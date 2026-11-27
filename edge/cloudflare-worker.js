/**
 * Cognify Production Edge Worker (Cloudflare Workers)
 *
 * Adds full HTTP Accept: text/markdown content negotiation (acceptmarkdown.com),
 * Vary: Accept headers, and agent-friendly Markdown HTTP 404 responses on top of
 * Cognify's static GitHub Pages origin (or Wrangler static assets).
 */

const DEFAULT_ORIGIN = 'https://initialtide.github.io/Cognify';

const ROUTE_TO_MD = {
  '/': 'index.md',
  '/dashboard': 'dashboard.md',
  '/courses': 'courses.md',
  '/about': 'about.md',
  '/contact': 'contact.md',
  '/privacy': 'privacy.md',
  '/docs': 'docs.md',
  '/api': 'api.md',
  '/mcp': 'mcp.md',
  '/faq': 'faq.md',
  '/teacher-tools': 'teacher-tools.md',
};

function parseAccept(header) {
  if (!header) return [];
  return header
    .split(',')
    .map((part, index) => {
      const segments = part
        .split(';')
        .map((s) => s.trim())
        .filter(Boolean);
      const type = (segments[0] || '').toLowerCase();
      let q = 1;
      for (const p of segments.slice(1)) {
        const m = /^q\s*=\s*([0-9]+(?:\.[0-9]+)?)$/i.exec(p);
        if (m) {
          const parsed = Number.parseFloat(m[1]);
          q = Number.isNaN(parsed) ? 0 : Math.max(0, Math.min(1, parsed));
        }
      }
      return { type, q, index };
    })
    .filter((entry) => entry.type.length > 0);
}

export function prefersMarkdown(acceptHeader) {
  const ranges = parseAccept(acceptHeader);
  const md = ranges.filter((r) => r.type === 'text/markdown' || r.type === 'text/x-markdown');
  if (md.length === 0) return false;
  const bestMd = md.reduce((a, b) => (b.q > a.q ? b : a), md[0]);
  if (bestMd.q <= 0) return false;

  const html = ranges.filter((r) => r.type === 'text/html' || r.type === 'application/xhtml+xml');
  if (html.length === 0) return true;
  const bestHtml = html.reduce((a, b) => (b.q > a.q ? b : a), html[0]);
  if (bestMd.q !== bestHtml.q) return bestMd.q > bestHtml.q;
  return bestMd.index < bestHtml.index;
}

function normalizePath(pathname) {
  let rel = pathname;
  if (rel === '/Cognify' || rel.startsWith('/Cognify/')) {
    rel = rel.slice('/Cognify'.length) || '/';
  }
  if (rel.length > 1) {
    rel = rel.replace(/\/+$/, '');
  }
  return rel.startsWith('/') ? rel : `/${rel}`;
}

function resolveMarkdownFile(route) {
  if (route in ROUTE_TO_MD) return ROUTE_TO_MD[route];
  if (route.startsWith('/courses/')) return 'courses.md';
  const courseMatch = /^\/course\/([a-z0-9-]+)(?:\/.*)?$/i.exec(route);
  if (courseMatch) return `course/${courseMatch[1]}.md`;
  return null;
}

function buildMarkdown404(pathname, originUrl) {
  const base = originUrl.replace(/\/+$/, '');
  return `# 404 Not Found — Cognify

The requested path \`${pathname}\` could not be found on Cognify. It may have moved, contain a typo, or refer to a nonexistent route.

## Helpful Resources for AI Agents & Developers

- [Cognify API & Developer Documentation](${base}/docs)
- [XML Sitemap](${base}/sitemap.xml)
- [Agent Instructions (llms.txt)](${base}/llms.txt)
- [Curriculum Courses JSON](${base}/api/v1/courses.json)
- [Cognify Homepage](${base}/)
`;
}

function addVaryAccept(headers) {
  const existing = headers.get('Vary') || '';
  const parts = existing
    .split(',')
    .map((p) => p.trim())
    .filter(Boolean);
  if (!parts.some((p) => p.toLowerCase() === 'accept')) {
    parts.unshift('Accept');
  }
  headers.set('Vary', parts.join(', '));
}

export default {
  async fetch(request, env) {
    const originBase = (env && env.UPSTREAM_ORIGIN) || DEFAULT_ORIGIN;
    const url = new URL(request.url);
    const route = normalizePath(url.pathname);
    const accept = request.headers.get('Accept') || '';
    const wantsMarkdown = prefersMarkdown(accept);
    const publicBase = `${url.origin}`;

    const hasExtension =
      route !== '/' && /\.[a-z0-9]{1,8}$/i.test(route.split('/').pop() || '');

    if (wantsMarkdown && !hasExtension) {
      const mdFile = resolveMarkdownFile(route);
      if (mdFile) {
        const mdResp = await fetch(`${originBase}/${mdFile}`, {
          headers: { 'User-Agent': 'Cognify-Edge-Negotiator/1.0' },
        });
        if (mdResp.ok) {
          const headers = new Headers(mdResp.headers);
          headers.set('Content-Type', 'text/markdown; charset=utf-8');
          addVaryAccept(headers);
          return new Response(mdResp.body, { status: 200, headers });
        }
      }
      return new Response(buildMarkdown404(url.pathname, publicBase), {
        status: 404,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          Vary: 'Accept',
        },
      });
    }

    const upstreamUrl = `${originBase}${route === '/' ? '/' : route}${url.search}`;
    const upstream = await fetch(upstreamUrl, {
      method: request.method,
      redirect: 'follow',
    });

    if (upstream.status === 404 && wantsMarkdown) {
      return new Response(buildMarkdown404(url.pathname, publicBase), {
        status: 404,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          Vary: 'Accept',
        },
      });
    }

    const headers = new Headers(upstream.headers);
    const contentType = headers.get('Content-Type') || '';
    if (contentType.includes('text/html') || !hasExtension) {
      addVaryAccept(headers);
    }

    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers,
    });
  },
};
