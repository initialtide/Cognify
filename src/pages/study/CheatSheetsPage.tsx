import React, { useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Download, Expand, Printer, Search } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CognitoDialog } from '../../components/modals/CognitoDialog';
import { ALL_COURSES, getCourseById } from '../../data/catalog';
import { CheatSheetSection } from '../../types/curriculum';
import { renderInlineMarkdown, stripInlineMarkdown } from './NotesViewerPage';

function wrapSvgLines(rawText: string, maxChars: number): string[] {
  const clean = stripInlineMarkdown(rawText).replace(/\s+/g, ' ').trim();
  if (!clean) return [];
  const words = clean.split(' ');
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if (!current) {
      if (word.length <= maxChars) {
        current = word;
      } else {
        for (let i = 0; i < word.length; i += maxChars) {
          lines.push(word.slice(i, i + maxChars));
        }
      }
    } else if (current.length + 1 + word.length <= maxChars) {
      current = `${current} ${word}`;
    } else {
      lines.push(current);
      if (word.length <= maxChars) {
        current = word;
      } else {
        current = '';
        for (let i = 0; i < word.length; i += maxChars) {
          const chunk = word.slice(i, i + maxChars);
          if (i + maxChars < word.length) {
            lines.push(chunk);
          } else {
            current = chunk;
          }
        }
      }
    }
  }
  if (current) lines.push(current);
  return lines;
}

interface ComputedSectionLayout {
  sec: CheatSheetSection;
  y: number;
  boxHeight: number;
  formulaLines: string[];
  formulaStartY: number;
  bulletBlocks: { startY: number; lines: string[] }[];
}

export const CheatSheetDetailPage: React.FC = () => {
  const { courseId, slug } = useParams<{ courseId: string; slug: string }>();
  const course = getCourseById(courseId ?? '') ?? ALL_COURSES[0];

  const sheets = course.cheatSheets;
  const idx = Math.max(0, sheets.findIndex((s) => s.slug === slug));
  const sheet = sheets[idx] ?? sheets[0];
  const nextSheet = sheets[(idx + 1) % Math.max(1, sheets.length)];

  const [expandOpen, setExpandOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const svgRef = useRef<SVGSVGElement>(null);

  const filteredSections = useMemo(() => {
    if (!sheet) return [];
    const q = searchText.trim().toLowerCase();
    if (!q) return sheet.sections;
    return sheet.sections.filter(
      (s) =>
        s.heading.toLowerCase().includes(q) ||
        s.points.some((p) => p.toLowerCase().includes(q)) ||
        (s.formula?.toLowerCase().includes(q) ?? false)
    );
  }, [sheet, searchText]);

  const posterLayout = useMemo(() => {
    if (!sheet) return { sections: [] as ComputedSectionLayout[], posterHeight: 560 };
    const sectionGap = 24;
    let cursorY = 104;
    const computed: ComputedSectionLayout[] = [];

    for (const sec of sheet.sections) {
      let innerY = 30;
      const formulaLines = sec.formula ? wrapSvgLines(sec.formula, 84) : [];
      const formulaStartY = innerY;
      if (formulaLines.length > 0) {
        innerY += formulaLines.length * 18 + 10;
      }

      const bulletBlocks: { startY: number; lines: string[] }[] = [];
      for (const pt of sec.points) {
        const lines = wrapSvgLines(pt, 86);
        if (lines.length === 0) continue;
        bulletBlocks.push({ startY: innerY, lines });
        innerY += lines.length * 20 + 4;
      }

      const boxHeight = Math.max(108, innerY + 14);
      computed.push({
        sec,
        y: cursorY,
        boxHeight,
        formulaLines,
        formulaStartY,
        bulletBlocks,
      });
      cursorY += boxHeight + sectionGap;
    }

    const posterHeight = Math.max(560, cursorY + 8);
    return { sections: computed, posterHeight };
  }, [sheet]);

  if (!sheet) {
    return (
      <main className="page-container">
        <p>No cheat sheet found.</p>
      </main>
    );
  }

  const handleDownloadPng = () => {
    const svgEl = svgRef.current;
    if (!svgEl) return;
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgEl);
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      const scale = 1.5;
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(800 * scale);
      canvas.height = Math.round(posterLayout.posterHeight * scale);
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const link = document.createElement('a');
        link.download = `${sheet.slug}-cheat-sheet.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  const renderPosterSvg = (refProp?: React.RefObject<SVGSVGElement | null>) => (
    <svg
      ref={refProp}
      viewBox={`0 0 800 ${posterLayout.posterHeight}`}
      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 12, border: '1.5px solid var(--border-card)', backgroundColor: '#ffffff' }}
      aria-label={`${sheet.title} printable poster`}
    >
      <rect width="800" height={posterLayout.posterHeight} fill="#fdfdfc" />
      <rect x="0" y="0" width="800" height="74" fill={sheet.accentColor} />
      <text x="28" y="34" fontSize="14" fontWeight="800" fill="#ffffff" opacity="0.92">
        {course.qualificationLabel.toUpperCase()} · {course.subjectName.toUpperCase()} · TOPIC {sheet.topicNumber}
      </text>
      <text x="28" y="58" fontSize="24" fontWeight="800" fill="#ffffff">
        {sheet.title}
      </text>

      {posterLayout.sections.map((item, sIdx) => {
        const cleanHeading = stripInlineMarkdown(item.sec.heading).toUpperCase();
        const badgeWidth = Math.min(716, Math.max(140, cleanHeading.length * 8.4 + 28));
        return (
          <g key={`${item.sec.heading}-${sIdx}`} transform={`translate(28 ${item.y})`}>
            <rect
              x="0"
              y="0"
              width="744"
              height={item.boxHeight}
              rx="12"
              fill="#f8fafc"
              stroke="#e2e8f0"
              strokeWidth="1.5"
            />
            <rect x="14" y="-11" width={badgeWidth} height="24" rx="7" fill="#0b3c61" />
            <text x="26" y="5" fontSize="12" fontWeight="800" fill="#ffffff">
              {cleanHeading}
            </text>
            {item.formulaLines.length > 0 && (
              <g>
                <rect
                  x="16"
                  y={item.formulaStartY - 14}
                  width="712"
                  height={item.formulaLines.length * 18 + 8}
                  rx="7"
                  fill="#eef6ff"
                  stroke="#cfe3fb"
                  strokeWidth="1"
                />
                {item.formulaLines.map((line, fIdx) => (
                  <text
                    key={`f-${fIdx}`}
                    x="24"
                    y={item.formulaStartY + fIdx * 18}
                    fontSize="12.5"
                    fontWeight="800"
                    fill={sheet.accentColor}
                  >
                    {line}
                  </text>
                ))}
              </g>
            )}
            {item.bulletBlocks.map((block, bIdx) =>
              block.lines.map((line, lIdx) => (
                <text
                  key={`b-${bIdx}-${lIdx}`}
                  x={lIdx === 0 ? 20 : 32}
                  y={block.startY + lIdx * 20}
                  fontSize="13.5"
                  fontWeight="600"
                  fill="#1d2939"
                >
                  {lIdx === 0 ? `• ${line}` : line}
                </text>
              ))
            )}
          </g>
        );
      })}
    </svg>
  );

  return (
    <main className="page-container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <Link to={`/course/${course.id}/cheat-sheets`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 700, color: 'var(--text-secondary)' }}>
          <ArrowLeft size={16} /> See all {course.subjectName} cheat sheets
        </Link>
        {sheets.length > 1 && (
          <Link to={`/course/${course.id}/cheat-sheets/${nextSheet.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 700, color: 'var(--text-heading)' }}>
            Next cheat sheet <ArrowRight size={16} />
          </Link>
        )}
      </div>

      {/* Main Cheat Sheet Card (100% Unlocked) */}
      <section className="cognito-card" style={{ padding: '28px 26px', marginBottom: 24 }}>
        <span className="tilted-badge tilted-badge--edge tilted-badge--navy">CHEAT SHEET</span>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 28,
            alignItems: 'center',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
                ONE-PAGE {course.subjectName.toUpperCase()} POSTER
              </span>
              <button
                type="button"
                onClick={() => setExpandOpen(true)}
                style={{ border: 0, background: 'transparent', display: 'inline-flex', alignItems: 'center', gap: 5, fontWeight: 700, color: 'var(--color-blue-600)' }}
              >
                <Expand size={15} /> Expand
              </button>
            </div>
            {renderPosterSvg(svgRef)}
          </div>

          <div>
            <h1 className="font-heading" style={{ fontSize: '2.1rem', marginBottom: 10 }}>
              {sheet.title}
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.55, marginBottom: 18 }}>
              {renderInlineMarkdown(sheet.summary)}
            </p>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: 20 }}>
              Topic {sheet.topicNumber}: {sheet.topicName} · Fully Unlocked
            </div>
            <div className="no-print" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button type="button" className="tactile-btn tactile-btn--blue" onClick={handleDownloadPng}>
                <Download size={16} /> Download PNG
              </button>
              <button type="button" className="tactile-btn" onClick={() => window.print()}>
                <Printer size={16} /> Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ON THIS CHEAT SHEET Searchable Breakdown */}
      <section className="cognito-card" style={{ padding: '26px 26px' }}>
        <span className="tilted-badge tilted-badge--edge tilted-badge--navy">ON THIS CHEAT SHEET</span>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 18 }}>
          <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Everything on the {sheet.title} poster is written out below for searching or copying into your notes.
          </p>
          <div style={{ position: 'relative', width: 'min(100%, 240px)' }}>
            <Search size={15} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Filter sheet..."
              aria-label="Filter cheat sheet content"
              style={{ width: '100%', padding: '7px 10px 7px 32px', borderRadius: 8, border: '1px solid var(--border-card)', backgroundColor: 'var(--bg-elevated)' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gap: 18 }}>
          {filteredSections.map((sec, sIdx) => (
            <div key={`${sec.heading}-${sIdx}`}>
              <h2 className="font-heading" style={{ fontSize: '1.3rem', marginBottom: 6 }}>
                {renderInlineMarkdown(sec.heading)}
              </h2>
              {sec.formula && (
                <div style={{ display: 'inline-block', padding: '5px 12px', borderRadius: 8, backgroundColor: 'var(--color-blue-50)', color: '#0b3c61', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.9rem', marginBottom: 8 }}>
                  {renderInlineMarkdown(sec.formula)}
                </div>
              )}
              <ul style={{ margin: 0, paddingLeft: 20, display: 'grid', gap: 6 }}>
                {sec.points.map((pt, i) => (
                  <li key={i}>{renderInlineMarkdown(pt)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CognitoDialog open={expandOpen} onClose={() => setExpandOpen(false)} titleId="cheat-expand-title" size="xl">
        <h2 id="cheat-expand-title" className="font-heading" style={{ fontSize: '1.5rem', marginBottom: 14 }}>
          {sheet.title}
        </h2>
        {renderPosterSvg()}
      </CognitoDialog>
    </main>
  );
};
