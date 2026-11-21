import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const COURSES_DIR = path.join(ROOT_DIR, 'src', 'data', 'courses');

const BATCH_SIZE = 8;
const YOUTUBE_ID_RE = /youtubeId\s*:\s*['"]([A-Za-z0-9_-]{11})['"]/g;

function collectYoutubeIds() {
  if (!fs.existsSync(COURSES_DIR)) {
    throw new Error(`Courses directory not found: ${COURSES_DIR}`);
  }

  const files = fs
    .readdirSync(COURSES_DIR)
    .filter((f) => f.endsWith('.ts'))
    .sort();

  /** @type {Map<string, Set<string>>} */
  const idToFiles = new Map();

  for (const file of files) {
    const fullPath = path.join(COURSES_DIR, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    let match;
    while ((match = YOUTUBE_ID_RE.exec(content)) !== null) {
      const videoId = match[1];
      if (!idToFiles.has(videoId)) {
        idToFiles.set(videoId, new Set());
      }
      idToFiles.get(videoId).add(path.relative(ROOT_DIR, fullPath).replace(/\\/g, '/'));
    }
  }

  return idToFiles;
}

async function checkOembed(videoId) {
  const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
  try {
    const res = await fetch(url);
    return { videoId, ok: res.status === 200, status: res.status };
  } catch (err) {
    return {
      videoId,
      ok: false,
      status: 0,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

async function main() {
  const idToFiles = collectYoutubeIds();
  const uniqueIds = Array.from(idToFiles.keys());

  console.log(`Scanning ${uniqueIds.length} unique YouTube IDs across src/data/courses/*.ts...`);

  const passed = [];
  const failed = [];

  for (let i = 0; i < uniqueIds.length; i += BATCH_SIZE) {
    const batch = uniqueIds.slice(i, i + BATCH_SIZE);
    const results = await Promise.all(batch.map(checkOembed));
    for (const r of results) {
      if (r.ok) {
        passed.push(r);
      } else {
        failed.push({
          ...r,
          files: Array.from(idToFiles.get(r.videoId) ?? []),
        });
      }
    }
  }

  console.log(`\nChecked ${uniqueIds.length} unique IDs: ${passed.length} passed (HTTP 200), ${failed.length} failed.`);

  if (failed.length > 0) {
    console.error('\nFailed YouTube IDs:');
    for (const f of failed) {
      const detail = f.error ? `error=${f.error}` : `HTTP ${f.status}`;
      console.error(`  - ${f.videoId} (${detail}) -> referenced in: ${f.files.join(', ')}`);
    }
    process.exit(1);
  }

  console.log('All YouTube IDs returned HTTP 200 via oEmbed.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
