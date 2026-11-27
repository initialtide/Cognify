import React, { useId, useInsertionEffect } from 'react';
import { DiagramKind } from '../../types/curriculum';

const FONT_LABEL = '"Nunito", system-ui, -apple-system, sans-serif';

const DIAGRAM_STYLE_ID = 'cognito-diagram-stage-styles';

const DIAGRAM_STAGE_CSS = `
.cognito-diagram-stage {
  width: 100%;
  max-width: 610px;
  margin: 6px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 16px;
  transition: background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}
.cognito-diagram-stage--compact {
  max-width: 520px;
}
.cognito-diagram-stage svg {
  width: 100%;
  height: auto;
  max-height: 272px;
  display: block;
  overflow: visible;
}
.cognito-diagram-stage--compact svg {
  max-height: 205px;
}
:root[data-theme="dark"] .cognito-diagram-stage,
:root:has(> head > meta[name="color-scheme"][content="dark"]) .cognito-diagram-stage {
  background: #1f2228;
  padding: 14px 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.28);
}
:root[data-theme="dark"] .cognito-diagram-stage svg,
:root:has(> head > meta[name="color-scheme"][content="dark"]) .cognito-diagram-stage svg {
  filter: invert(0.89) hue-rotate(180deg) saturate(1.18) contrast(1.04);
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]):not(:has(> head > meta[name="color-scheme"][content="light"])) .cognito-diagram-stage {
    background: #1f2228;
    padding: 14px 16px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.28);
  }
  :root:not([data-theme="light"]):not(:has(> head > meta[name="color-scheme"][content="light"])) .cognito-diagram-stage svg {
    filter: invert(0.89) hue-rotate(180deg) saturate(1.18) contrast(1.04);
  }
}
.sp-exam-diagram-frame .cognito-diagram-stage {
  background: transparent !important;
  border: 0 !important;
  padding: 0 !important;
  box-shadow: none !important;
  margin: 0 auto;
}
`;

function useDiagramStyles() {
  useInsertionEffect(() => {
    if (typeof document === 'undefined' || !document.head) return;
    if (document.getElementById(DIAGRAM_STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = DIAGRAM_STYLE_ID;
    style.textContent = DIAGRAM_STAGE_CSS;
    document.head.appendChild(style);
  }, []);
}

interface LabelProps {
  x: number;
  y: number;
  children: React.ReactNode;
  fill?: string;
  size?: number;
  anchor?: 'start' | 'middle' | 'end';
  weight?: number;
  letterSpacing?: string;
}

const CLabel: React.FC<LabelProps> = ({
  x,
  y,
  children,
  fill = '#4f5b6b',
  size = 11.5,
  anchor = 'middle',
  weight = 800,
  letterSpacing = '0.04em',
}) => (
  <text
    x={x}
    y={y}
    textAnchor={anchor}
    fontFamily={FONT_LABEL}
    fontSize={size}
    fontWeight={weight}
    letterSpacing={letterSpacing}
    fill={fill}
  >
    {children}
  </text>
);

const PillHeader: React.FC<{
  cx: number;
  cy: number;
  width: number;
  text: string;
  bg: string;
  stroke: string;
  color: string;
}> = ({ cx, cy, width, text, bg, stroke, color }) => (
  <g>
    <rect
      x={cx - width / 2}
      y={cy - 12}
      width={width}
      height={24}
      rx={12}
      fill={bg}
      stroke={stroke}
      strokeWidth={1.6}
    />
    <CLabel x={cx} y={cy + 4} fill={color} size={10.5}>
      {text}
    </CLabel>
  </g>
);

const ArrowMarkerDefs: React.FC<{ prefix: string; colors: Record<string, string> }> = ({
  prefix,
  colors,
}) => (
  <defs>
    {Object.entries(colors).map(([key, color]) => (
      <marker
        key={key}
        id={`${prefix}-${key}`}
        viewBox="0 0 10 10"
        refX="7.5"
        refY="5"
        markerWidth="6.5"
        markerHeight="6.5"
        orient="auto-start-reverse"
      >
        <path
          d="M 1.5 1.5 L 8.5 5 L 1.5 8.5 z"
          fill={color}
          stroke={color}
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
      </marker>
    ))}
  </defs>
);

const hexPoints = (cx: number, cy: number, r: number): string => {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    pts.push(`${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`);
  }
  return pts.join(' ');
};

export const EducationalDiagram: React.FC<{ kind: DiagramKind; compact?: boolean }> = ({
  kind,
  compact = false,
}) => {
  useDiagramStyles();
  const rawId = useId();
  const uid = `cd${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;

  const renderSvg = (): React.ReactNode => {
    switch (kind) {
      /* =====================================================================
       * 1. BACTERIAL CELL (1:1 Cognito mint capsule + purple flagellum style)
       * ===================================================================*/
      case 'bacterial-cell':
        return (
          <svg
            viewBox="0 0 560 232"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Labelled bacterial cell diagram showing circular chromosome, cytoplasm, plasmids, cell wall, cell membrane, and flagellum"
          >
            {/* Wavy purple flagellum emerging from upper-right end */}
            <path
              d="M 380 104 C 404 99, 434 111, 444 96 C 454 80, 405 70, 414 55 C 422 42, 448 42, 466 50"
              fill="none"
              stroke="#c64dd6"
              strokeWidth="7.5"
              strokeLinecap="round"
            />
            <path
              d="M 380 104 C 404 99, 434 111, 444 96 C 454 80, 405 70, 414 55 C 422 42, 448 42, 466 50"
              fill="none"
              stroke="#f5cbfc"
              strokeWidth="3.4"
              strokeLinecap="round"
            />

            {/* Tilted mint-teal capsule cell */}
            <g transform="translate(288 122) rotate(-11)">
              {/* Outer Cell Wall */}
              <rect
                x="-96"
                y="-45"
                width="192"
                height="90"
                rx="45"
                fill="#bcf2e4"
                stroke="#2da892"
                strokeWidth="2.6"
              />
              {/* Inner Cell Membrane + Cytoplasm */}
              <rect
                x="-87"
                y="-36"
                width="174"
                height="72"
                rx="36"
                fill="#effcf8"
                stroke="#49c2ac"
                strokeWidth="2"
              />

              {/* Subtle cytoplasmic ribosome dots (soft lilac & mint) */}
              <circle cx="-64" cy="-14" r="2.6" fill="#9f6ee0" opacity="0.85" />
              <circle cx="-54" cy="-19" r="2.2" fill="#46bea8" opacity="0.8" />
              <circle cx="-36" cy="-18" r="2.4" fill="#9f6ee0" opacity="0.75" />
              <circle cx="-67" cy="2" r="2" fill="#46bea8" opacity="0.75" />
              <circle cx="32" cy="-21" r="2.6" fill="#9f6ee0" opacity="0.85" />
              <circle cx="44" cy="22" r="2.5" fill="#9f6ee0" opacity="0.8" />
              <circle cx="64" cy="-4" r="2.6" fill="#9f6ee0" opacity="0.85" />
              <circle cx="70" cy="7" r="2.1" fill="#46bea8" opacity="0.8" />
              <circle cx="38" cy="4" r="2.2" fill="#46bea8" opacity="0.75" />
              <circle cx="-28" cy="23" r="2.3" fill="#46bea8" opacity="0.8" />

              {/* Plasmids (small circular DNA rings) */}
              <circle cx="-56" cy="8" r="5.5" fill="#f1e7fd" stroke="#7d52c7" strokeWidth="1.7" />
              <circle cx="-41" cy="18" r="4.6" fill="#f1e7fd" stroke="#7d52c7" strokeWidth="1.6" />
              <circle cx="49" cy="-11" r="5.3" fill="#f1e7fd" stroke="#7d52c7" strokeWidth="1.7" />
              <circle cx="57" cy="12" r="4.8" fill="#f1e7fd" stroke="#7d52c7" strokeWidth="1.6" />

              {/* Tangled Circular Chromosome in center */}
              <g fill="none" stroke="#4f5b6b" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
                <path d="M -18 -4 C -24 -20, 4 -24, 12 -10 C 20 4, 0 22, -14 14 C -26 6, -14 -14, 4 -12" />
                <path d="M -6 -18 C 14 -20, 24 2, 10 14 C -4 24, -22 10, -12 -4 C -4 -14, 16 4, 2 16" />
                <path d="M -20 4 C -12 22, 18 18, 20 0 C 20 -12, 2 -16, -8 -6" />
              </g>
            </g>

            {/* Curved Leader Lines & Cognito Labels */}
            {/* CIRCULAR CHROMOSOME */}
            <path
              d="M 284 42 C 284 64, 272 74, 281 103"
              fill="none"
              stroke="#556274"
              strokeWidth="1.65"
              strokeLinecap="round"
            />
            <CLabel x={284} y={32} fill="#525e70">
              CIRCULAR CHROMOSOME
            </CLabel>

            {/* CYTOPLASM */}
            <path
              d="M 164 68 C 186 68, 184 96, 214 108"
              fill="none"
              stroke="#249682"
              strokeWidth="1.65"
              strokeLinecap="round"
            />
            <CLabel x={158} y={72} anchor="end" fill="#208e7a">
              CYTOPLASM
            </CLabel>

            {/* PLASMIDS (forked smooth leaders to two rings) */}
            <path
              d="M 134 179 C 168 180, 166 140, 228 140"
              fill="none"
              stroke="#556274"
              strokeWidth="1.65"
              strokeLinecap="round"
            />
            <path
              d="M 164 166 C 184 164, 212 156, 245 149"
              fill="none"
              stroke="#556274"
              strokeWidth="1.65"
              strokeLinecap="round"
            />
            <CLabel x={126} y={183} anchor="end" fill="#525e70">
              PLASMIDS
            </CLabel>

            {/* CELL WALL */}
            <path
              d="M 432 143 C 402 145, 398 122, 381 120"
              fill="none"
              stroke="#249682"
              strokeWidth="1.65"
              strokeLinecap="round"
            />
            <CLabel x={439} y={147} anchor="start" fill="#208e7a">
              CELL WALL
            </CLabel>

            {/* CELL MEMBRANE */}
            <path
              d="M 384 185 C 384 164, 366 152, 344 146"
              fill="none"
              stroke="#249682"
              strokeWidth="1.65"
              strokeLinecap="round"
            />
            <CLabel x={392} y={202} anchor="middle" fill="#208e7a">
              CELL MEMBRANE
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 2. VIRUS PARTICLE (1:1 Cognito coral-pink spiked capsid style)
       * ===================================================================*/
      case 'virus-particle': {
        const spikeAngles = [18, 54, 90, 126, 162, 198, 234, 270, 306, 342];
        const capDots: { x: number; y: number }[] = [];
        const hexR = 37;
        for (let edge = 0; edge < 6; edge++) {
          const a1 = (Math.PI / 3) * edge;
          const a2 = (Math.PI / 3) * (edge + 1);
          const x1 = 280 + hexR * Math.cos(a1);
          const y1 = 118 + hexR * Math.sin(a1);
          const x2 = 280 + hexR * Math.cos(a2);
          const y2 = 118 + hexR * Math.sin(a2);
          for (let step = 0; step < 5; step++) {
            const t = step / 5;
            capDots.push({ x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t });
          }
        }
        return (
          <svg
            viewBox="0 0 560 248"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Labelled virus particle diagram showing protein coat and genetic material"
          >
            {/* Radial glycoprotein spikes */}
            <g transform="translate(280 118)">
              {spikeAngles.map((deg) => (
                <g key={deg} transform={`rotate(${deg})`}>
                  <rect
                    x="-4.2"
                    y="-82"
                    width="8.4"
                    height="24"
                    rx="4"
                    fill="#f8a9be"
                    stroke="#cf486d"
                    strokeWidth="2.1"
                  />
                  <circle
                    cx="0"
                    cy="-83"
                    r="7.4"
                    fill="#f8a9be"
                    stroke="#cf486d"
                    strokeWidth="2.1"
                  />
                </g>
              ))}
            </g>

            {/* Outer spherical coral-pink coat */}
            <circle cx="280" cy="118" r="63" fill="#fad2de" stroke="#cf486d" strokeWidth="2.8" />
            <circle cx="280" cy="118" r="54" fill="#f7bdd0" opacity="0.45" />

            {/* Inner hexagonal capsid (protein coat) */}
            <polygon
              points={hexPoints(280, 118, 43)}
              fill="#fdebf0"
              stroke="#c73f66"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />

            {/* Dotted inner capsomere ring */}
            {capDots.map((pt, i) => (
              <circle key={i} cx={pt.x} cy={pt.y} r="2.2" fill="#d9577c" opacity="0.85" />
            ))}

            {/* Wavy Genetic Material (DNA/RNA strands) */}
            <g strokeLinecap="round" fill="none">
              <path
                d="M 270 95 C 259 103, 279 111, 269 119 C 259 127, 278 135, 270 142"
                stroke="#397e82"
                strokeWidth="4.6"
              />
              <path
                d="M 270 95 C 259 103, 279 111, 269 119 C 259 127, 278 135, 270 142"
                stroke="#85dbcd"
                strokeWidth="1.7"
              />
              <path
                d="M 291 96 C 302 104, 282 112, 292 120 C 302 128, 284 135, 291 142"
                stroke="#536b7a"
                strokeWidth="4.6"
              />
              <path
                d="M 291 96 C 302 104, 282 112, 292 120 C 302 128, 284 135, 291 142"
                stroke="#a7cadb"
                strokeWidth="1.7"
              />
              {/* Tiny base-pair beads */}
              <circle cx="278" cy="107" r="2.6" fill="#e89a42" />
              <circle cx="282" cy="122" r="2.6" fill="#e36d8d" />
              <circle cx="277" cy="133" r="2.4" fill="#e89a42" />
            </g>

            {/* GENETIC MATERIAL label & curved leader */}
            <path
              d="M 192 206 C 224 208, 228 152, 262 124"
              fill="none"
              stroke="#556274"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <CLabel x={154} y={204} fill="#525e70">
              GENETIC
            </CLabel>
            <CLabel x={154} y={220} fill="#525e70">
              MATERIAL
            </CLabel>

            {/* PROTEIN COAT label & curved leader */}
            <path
              d="M 368 206 C 336 208, 326 172, 304 152"
              fill="none"
              stroke="#bd3c62"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <CLabel x={404} y={204} fill="#b5375d">
              PROTEIN
            </CLabel>
            <CLabel x={404} y={220} fill="#b5375d">
              COAT
            </CLabel>
          </svg>
        );
      }

      /* =====================================================================
       * 3. EUKARYOTIC VS PROKARYOTIC CELLS (Upgraded Cognito pastel style)
       * ===================================================================*/
      case 'eukaryotic-vs-prokaryotic':
        return (
          <svg
            viewBox="0 0 640 250"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Animal, Plant, and Bacterial cells comparison diagram"
          >
            {/* Animal Cell */}
            <g transform="translate(106 122)">
              <path
                d="M -66 -12 C -70 -46, -30 -58, 8 -54 C 48 -50, 74 -28, 68 8 C 62 42, 30 56, -12 54 C -48 52, -64 24, -66 -12 Z"
                fill="#fdecf2"
                stroke="#d4557a"
                strokeWidth="2.5"
              />
              {/* Nucleus */}
              <circle cx="-16" cy="-8" r="19" fill="#dec8f8" stroke="#7d3ec4" strokeWidth="2.1" />
              <circle cx="-19" cy="-11" r="6" fill="#b788ea" opacity="0.65" />
              {/* Mitochondria */}
              <g transform="translate(26 -14) rotate(-20)">
                <ellipse cx="0" cy="0" rx="14" ry="7.5" fill="#ffe1a8" stroke="#d48415" strokeWidth="1.8" />
                <path d="M -8 0 Q -4 -4, 0 0 T 8 0" fill="none" stroke="#c97810" strokeWidth="1.4" strokeLinecap="round" />
              </g>
              <g transform="translate(18 24) rotate(14)">
                <ellipse cx="0" cy="0" rx="13" ry="7" fill="#ffe1a8" stroke="#d48415" strokeWidth="1.8" />
                <path d="M -7 0 Q -3 -4, 0 0 T 7 0" fill="none" stroke="#c97810" strokeWidth="1.4" strokeLinecap="round" />
              </g>
              {/* Ribosomes */}
              <circle cx="-38" cy="22" r="2.5" fill="#6b778a" />
              <circle cx="-46" cy="10" r="2.3" fill="#6b778a" />
              <circle cx="-4" cy="28" r="2.4" fill="#6b778a" />
              <circle cx="42" cy="8" r="2.4" fill="#6b778a" />
            </g>
            {/* Animal labels */}
            <path d="M 74 42 C 74 62, 82 78, 86 96" fill="none" stroke="#7d3ec4" strokeWidth="1.5" strokeLinecap="round" />
            <CLabel x={70} y={33} fill="#6a2eb0" size={10.5}>
              NUCLEUS
            </CLabel>
            <path d="M 164 46 C 154 66, 146 82, 136 99" fill="none" stroke="#c97a0e" strokeWidth="1.5" strokeLinecap="round" />
            <CLabel x={168} y={37} fill="#b56c08" size={10}>
              MITOCHONDRIA
            </CLabel>
            <CLabel x={106} y={210} fill="#344054" size={12}>
              ANIMAL CELL
            </CLabel>
            <CLabel x={106} y={227} fill="#768499" size={10} weight={700}>
              (EUKARYOTE)
            </CLabel>

            {/* Plant Cell */}
            <g transform="translate(322 122)">
              {/* Cellulose Cell Wall */}
              <rect
                x="-70"
                y="-54"
                width="140"
                height="108"
                rx="18"
                fill="#c3f0ce"
                stroke="#2b964c"
                strokeWidth="2.8"
              />
              {/* Cell Membrane */}
              <rect
                x="-61"
                y="-45"
                width="122"
                height="90"
                rx="12"
                fill="#f1fcf4"
                stroke="#4ebc6e"
                strokeWidth="1.8"
              />
              {/* Permanent Vacuole */}
              <ellipse cx="10" cy="4" rx="31" ry="23" fill="#cbe9fe" stroke="#2686d6" strokeWidth="2" />
              {/* Nucleus */}
              <circle cx="-38" cy="-14" r="14" fill="#dec8f8" stroke="#7d3ec4" strokeWidth="2" />
              {/* Chloroplasts */}
              <g transform="translate(-36 22) rotate(12)">
                <ellipse cx="0" cy="0" rx="12" ry="6.5" fill="#7ce096" stroke="#22823e" strokeWidth="1.7" />
                <line x1="-6" y1="0" x2="6" y2="0" stroke="#1c6e34" strokeWidth="1.3" />
              </g>
              <g transform="translate(36 -26) rotate(-14)">
                <ellipse cx="0" cy="0" rx="12" ry="6.5" fill="#7ce096" stroke="#22823e" strokeWidth="1.7" />
                <line x1="-6" y1="0" x2="6" y2="0" stroke="#1c6e34" strokeWidth="1.3" />
              </g>
              <g transform="translate(34 28) rotate(18)">
                <ellipse cx="0" cy="0" rx="11" ry="6" fill="#7ce096" stroke="#22823e" strokeWidth="1.7" />
              </g>
              {/* Tiny Mitochondrion */}
              <ellipse cx="-2" cy="-32" rx="9" ry="5" fill="#ffe1a8" stroke="#d48415" strokeWidth="1.5" />
            </g>
            {/* Plant labels */}
            <path d="M 274 42 C 274 54, 276 62, 276 69" fill="none" stroke="#238742" strokeWidth="1.5" strokeLinecap="round" />
            <CLabel x={268} y={33} fill="#1f7a3b" size={10.5}>
              CELL WALL
            </CLabel>
            <path d="M 358 42 C 354 68, 344 88, 338 106" fill="none" stroke="#207cc9" strokeWidth="1.5" strokeLinecap="round" />
            <CLabel x={364} y={33} fill="#1766ad" size={10.5}>
              VACUOLE
            </CLabel>
            <CLabel x={322} y={210} fill="#344054" size={12}>
              PLANT CELL
            </CLabel>
            <CLabel x={322} y={227} fill="#768499" size={10} weight={700}>
              (EUKARYOTE)
            </CLabel>

            {/* Bacterial Cell */}
            <g>
              {/* Flagellum */}
              <path
                d="M 588 109 C 603 104, 616 112, 622 101 C 628 90, 604 82, 612 72 C 618 64, 630 66, 634 71"
                fill="none"
                stroke="#c64dd6"
                strokeWidth="5.2"
                strokeLinecap="round"
              />
              <path
                d="M 588 109 C 603 104, 616 112, 622 101 C 628 90, 604 82, 612 72 C 618 64, 630 66, 634 71"
                fill="none"
                stroke="#f5cbfc"
                strokeWidth="2.3"
                strokeLinecap="round"
              />
              <g transform="translate(526 122) rotate(-10)">
                <rect x="-64" y="-36" width="128" height="72" rx="36" fill="#bcf2e4" stroke="#2da892" strokeWidth="2.5" />
                <rect x="-56" y="-28" width="112" height="56" rx="28" fill="#effcf8" stroke="#49c2ac" strokeWidth="1.8" />
                {/* Circular DNA */}
                <path
                  d="M -18 -4 C -22 -18, 4 -18, 10 -6 C 16 6, -4 18, -14 10 C -22 2, -6 -14, 12 -4 C 20 2, 10 18, -6 14"
                  fill="none"
                  stroke="#4f5b6b"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                {/* Plasmids */}
                <circle cx="32" cy="10" r="5.5" fill="#f1e7fd" stroke="#7d52c7" strokeWidth="1.7" />
                <circle cx="-36" cy="10" r="4.6" fill="#f1e7fd" stroke="#7d52c7" strokeWidth="1.6" />
                <circle cx="28" cy="-12" r="2.3" fill="#9f6ee0" />
                <circle cx="-34" cy="-11" r="2.3" fill="#46bea8" />
              </g>
            </g>
            {/* Bacterial labels */}
            <path d="M 508 42 C 510 68, 514 86, 520 108" fill="none" stroke="#525e70" strokeWidth="1.5" strokeLinecap="round" />
            <CLabel x={508} y={33} fill="#525e70" size={10.5}>
              CIRCULAR DNA
            </CLabel>
            <path d="M 594 172 C 586 158, 574 146, 562 132" fill="none" stroke="#7d52c7" strokeWidth="1.5" strokeLinecap="round" />
            <CLabel x={596} y={185} fill="#6b3eb8" size={10}>
              PLASMIDS
            </CLabel>
            <CLabel x={526} y={212} fill="#344054" size={12}>
              BACTERIAL CELL
            </CLabel>
            <CLabel x={526} y={229} fill="#768499" size={10} weight={700}>
              (PROKARYOTE)
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 4. ROOT HAIR VS PALISADE CELL (Preserves X marker on Root hair nucleus!)
       * ===================================================================*/
      case 'root-hair-vs-palisade':
        return (
          <svg
            viewBox="0 0 600 238"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Root hair cell and leaf palisade cell diagram with structure labelled X"
          >
            {/* Root Hair Cell */}
            <g transform="translate(152 112)">
              {/* Outer Cell Wall */}
              <path
                d="M -98 -44 L 4 -44 C 15 -44, 24 -35, 24 -24 L 24 -12 L 92 -12 C 103 -12, 108 -5, 108 2 C 108 9, 103 16, 92 16 L 24 16 L 24 28 C 24 39, 15 48, 4 48 L -98 48 C -109 48, -118 39, -118 28 L -118 -24 C -118 -35, -109 -44, -98 -44 Z"
                fill="#c9f0d5"
                stroke="#329457"
                strokeWidth="2.6"
                strokeLinejoin="round"
              />
              {/* Inner Cell Membrane */}
              <path
                d="M -92 -37 L -2 -37 C 8 -37, 16 -29, 16 -19 L 16 -5 L 91 -5 C 97 -5, 100 -2, 100 2 C 100 6, 97 9, 91 9 L 16 9 L 16 23 C 16 33, 8 41, -2 41 L -92 41 C -102 41, -110 33, -110 23 L -110 -19 C -110 -29, -102 -37, -92 -37 Z"
                fill="#f2fcf5"
                stroke="#53bd78"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              {/* Vacuole extending toward hair */}
              <path
                d="M -52 -16 C -34 -24, 2 -22, 12 -4 L 78 -2 C 84 -2, 84 6, 78 6 L 12 8 C 2 26, -34 28, -52 20 C -66 12, -66 -8, -52 -16 Z"
                fill="#cde9fe"
                stroke="#2b8ad9"
                strokeWidth="1.8"
              />
              {/* Structure X (Nucleus) */}
              <circle cx="-84" cy="-14" r="11" fill="#dbc4f7" stroke="#783fc2" strokeWidth="2.1" />
              <circle cx="-86" cy="-16" r="3.4" fill="#9f6ce0" opacity="0.6" />

              {/* Curved leader pointing to X */}
              <path
                d="M -92 -23 C -102 -42, -108 -56, -114 -68"
                fill="none"
                stroke="#184770"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="-118" cy="-80" r="14" fill="#e6f4fe" stroke="#184770" strokeWidth="2" />
              <CLabel x={-118} y={-75} fill="#0b3c61" size={14.5}>
                X
              </CLabel>

              <CLabel x={-8} y={88} fill="#344054" size={12.5}>
                ROOT HAIR CELL
              </CLabel>
            </g>

            {/* Leaf Palisade Cell */}
            <g transform="translate(446 112)">
              {/* Outer Cell Wall */}
              <rect
                x="-60"
                y="-64"
                width="120"
                height="128"
                rx="18"
                fill="#c9f0d5"
                stroke="#329457"
                strokeWidth="2.6"
              />
              {/* Inner Cell Membrane */}
              <rect
                x="-51"
                y="-55"
                width="102"
                height="110"
                rx="12"
                fill="#f2fcf5"
                stroke="#53bd78"
                strokeWidth="1.8"
              />
              {/* Permanent Vacuole */}
              <rect
                x="-26"
                y="-30"
                width="52"
                height="66"
                rx="16"
                fill="#cde9fe"
                stroke="#2b8ad9"
                strokeWidth="1.8"
              />
              {/* Nucleus near top */}
              <circle cx="0" cy="-42" r="8.5" fill="#dbc4f7" stroke="#783fc2" strokeWidth="1.8" />
              {/* Green oval Chloroplasts arranged around cytoplasm */}
              {[
                { cx: -38, cy: -34, rot: -15 },
                { cx: -39, cy: -6, rot: 8 },
                { cx: -38, cy: 22, rot: -10 },
                { cx: -28, cy: 44, rot: 22 },
                { cx: 38, cy: -32, rot: 14 },
                { cx: 39, cy: -4, rot: -8 },
                { cx: 38, cy: 24, rot: 12 },
                { cx: 26, cy: 44, rot: -20 },
              ].map((ch, idx) => (
                <g key={idx} transform={`translate(${ch.cx} ${ch.cy}) rotate(${ch.rot})`}>
                  <ellipse cx="0" cy="0" rx="8.5" ry="5.2" fill="#7be095" stroke="#22823e" strokeWidth="1.5" />
                  <line x1="-4.5" y1="0" x2="4.5" y2="0" stroke="#1d6e35" strokeWidth="1.1" />
                </g>
              ))}

              <CLabel x={0} y={88} fill="#344054" size={12.5}>
                LEAF PALISADE CELL
              </CLabel>
            </g>
          </svg>
        );

      /* =====================================================================
       * 5. MICROSCOPE & I = A x M TRIANGLE (Upgraded Cognito pastel style)
       * ===================================================================*/
      case 'microscope':
        return (
          <svg
            viewBox="0 0 600 245"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Light microscope parts and magnification formula triangle I equals A times M"
          >
            {/* Pastel Light Microscope */}
            <g transform="translate(108 18)">
              {/* Subtle upward light beam from mirror to slide */}
              <path d="M 65 162 L 56 124 L 74 124 Z" fill="#fff2b3" opacity="0.7" />
              {/* Base */}
              <rect x="20" y="176" width="128" height="16" rx="8" fill="#b7daf7" stroke="#256ea8" strokeWidth="2.3" />
              {/* Curved Arm */}
              <path
                d="M 118 176 L 118 76 C 118 52, 102 42, 82 42 L 72 42"
                fill="none"
                stroke="#256ea8"
                strokeWidth="15"
                strokeLinecap="round"
              />
              <path
                d="M 118 176 L 118 76 C 118 52, 102 42, 82 42 L 72 42"
                fill="none"
                stroke="#d6ecfd"
                strokeWidth="9.5"
                strokeLinecap="round"
              />
              {/* Body Tube */}
              <rect x="52" y="24" width="26" height="58" rx="6" fill="#d6ecfd" stroke="#256ea8" strokeWidth="2.2" />
              {/* Eyepiece */}
              <rect x="56" y="8" width="18" height="18" rx="4" fill="#8bc7f7" stroke="#1b5d94" strokeWidth="2.2" />
              {/* Objective Lens Turret */}
              <rect x="57" y="82" width="16" height="16" rx="3" fill="#dec8f8" stroke="#7d3ec4" strokeWidth="2" />
              {/* Stage & Slide */}
              <rect x="26" y="116" width="76" height="9" rx="4" fill="#52647a" stroke="#2c3a4d" strokeWidth="1.8" />
              <rect x="48" y="111" width="34" height="5" rx="2" fill="#9eead4" stroke="#238f7b" strokeWidth="1.3" />
              {/* Focus Knobs */}
              <circle cx="118" cy="112" r="11.5" fill="#ffe1a8" stroke="#cc7e12" strokeWidth="2.2" />
              <circle cx="118" cy="112" r="4.5" fill="#fff4d6" stroke="#cc7e12" strokeWidth="1.6" />
              {/* Light Source / Mirror */}
              <circle cx="65" cy="156" r="13" fill="#ffef9e" stroke="#cf8c12" strokeWidth="2.2" />
              <circle cx="65" cy="156" r="6" fill="#fff9d6" />

              {/* Curved leader labels */}
              <path d="M 12 18 C 30 18, 42 18, 52 18" fill="none" stroke="#1b5d94" strokeWidth="1.6" strokeLinecap="round" />
              <CLabel x={6} y={22} anchor="end" fill="#17598f" size={10.5}>
                EYEPIECE (×10)
              </CLabel>

              <path d="M 12 90 C 30 90, 44 90, 54 90" fill="none" stroke="#7d3ec4" strokeWidth="1.6" strokeLinecap="round" />
              <CLabel x={6} y={94} anchor="end" fill="#6a2eb0" size={10.5}>
                OBJECTIVE LENS
              </CLabel>

              <path d="M 4 122 C 12 122, 18 121, 24 121" fill="none" stroke="#475569" strokeWidth="1.6" strokeLinecap="round" />
              <CLabel x={-2} y={125} anchor="end" fill="#3d4c5e" size={10.5}>
                STAGE
              </CLabel>

              <path d="M 12 162 C 28 162, 38 158, 49 157" fill="none" stroke="#c47e0e" strokeWidth="1.6" strokeLinecap="round" />
              <CLabel x={6} y={166} anchor="end" fill="#a86808" size={10.5}>
                LIGHT SOURCE
              </CLabel>

              <path d="M 156 112 C 146 112, 138 112, 132 112" fill="none" stroke="#c47e0e" strokeWidth="1.6" strokeLinecap="round" />
              <CLabel x={162} y={116} anchor="start" fill="#a86808" size={10.5}>
                FOCUS KNOBS
              </CLabel>
            </g>

            {/* Magnification Formula Triangle */}
            <g transform="translate(376 26)">
              <polygon
                points="98,12 178,146 18,146"
                fill="#dff1fe"
                stroke="#2484d6"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />
              <line x1="57" y1="81" x2="139" y2="81" stroke="#2484d6" strokeWidth="2.4" strokeLinecap="round" />
              <line x1="98" y1="81" x2="98" y2="146" stroke="#2484d6" strokeWidth="2.4" strokeLinecap="round" />
              <CLabel x={98} y={64} fill="#6a2eb0" size={26}>
                I
              </CLabel>
              <CLabel x={66} y={126} fill="#1766ad" size={24}>
                A
              </CLabel>
              <CLabel x={130} y={126} fill="#1f7f6b" size={24}>
                M
              </CLabel>
              {/* Subtle x operator circle */}
              <circle cx="98" cy="114" r="9.5" fill="#ffffff" stroke="#2484d6" strokeWidth="1.6" />
              <CLabel x={98} y={118} fill="#1766ad" size={12}>
                ×
              </CLabel>

              <CLabel x={98} y={176} fill="#1766ad" size={11.5}>
                IMAGE = ACTUAL × MAGNIFICATION
              </CLabel>
              <CLabel x={98} y={196} fill="#667385" size={10.5} weight={700}>
                1 mm = 1,000 µm
              </CLabel>
            </g>
          </svg>
        );

      /* =====================================================================
       * 6. ATOMIC STRUCTURE (Upgraded Cognito pastel Carbon-12 atom)
       * ===================================================================*/
      case 'atomic-structure':
        return (
          <svg
            viewBox="0 0 600 242"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Carbon-12 atomic structure diagram showing protons, neutrons, and electron shells"
          >
            {/* Carbon Atom */}
            <g transform="translate(184 120)">
              {/* Electron Shells */}
              <circle cx="0" cy="0" r="82" fill="none" stroke="#7c93ad" strokeWidth="2.1" strokeDasharray="6 4" />
              <circle cx="0" cy="0" r="46" fill="none" stroke="#5b7491" strokeWidth="2.1" />

              {/* Soft Nucleus Halo */}
              <circle cx="0" cy="0" r="24" fill="#fdeff4" opacity="0.85" />
              {/* Protons (pink +) & Neutrons (mint) clustered */}
              <circle cx="-9" cy="-8" r="6.5" fill="#f9afc3" stroke="#cc456b" strokeWidth="1.6" />
              <circle cx="7" cy="-9" r="6.5" fill="#a8ebd4" stroke="#289980" strokeWidth="1.6" />
              <circle cx="-11" cy="6" r="6.5" fill="#a8ebd4" stroke="#289980" strokeWidth="1.6" />
              <circle cx="10" cy="5" r="6.5" fill="#f9afc3" stroke="#cc456b" strokeWidth="1.6" />
              <circle cx="-1" cy="11" r="6.5" fill="#f9afc3" stroke="#cc456b" strokeWidth="1.6" />
              <circle cx="-1" cy="-2" r="6.8" fill="#a8ebd4" stroke="#289980" strokeWidth="1.6" />
              <circle cx="0" cy="-12" r="5.5" fill="#f9afc3" stroke="#cc456b" strokeWidth="1.5" />

              {/* Inner Shell Electrons (2) */}
              {[
                { x: 0, y: -46 },
                { x: 0, y: 46 },
              ].map((e, i) => (
                <g key={`in-${i}`} transform={`translate(${e.x} ${e.y})`}>
                  <circle cx="0" cy="0" r="7.5" fill="#70bffa" stroke="#186db5" strokeWidth="1.8" />
                  <line x1="-3.5" y1="0" x2="3.5" y2="0" stroke="#0c3c66" strokeWidth="1.8" strokeLinecap="round" />
                </g>
              ))}

              {/* Outer Shell Electrons (4) */}
              {[
                { x: 0, y: -82 },
                { x: 82, y: 0 },
                { x: 0, y: 82 },
                { x: -82, y: 0 },
              ].map((e, i) => (
                <g key={`out-${i}`} transform={`translate(${e.x} ${e.y})`}>
                  <circle cx="0" cy="0" r="7.5" fill="#70bffa" stroke="#186db5" strokeWidth="1.8" />
                  <line x1="-3.5" y1="0" x2="3.5" y2="0" stroke="#0c3c66" strokeWidth="1.8" strokeLinecap="round" />
                </g>
              ))}
            </g>

            {/* Curved Leader Callouts */}
            <path d="M 332 54 C 280 54, 240 82, 204 110" fill="none" stroke="#c43f66" strokeWidth="1.65" strokeLinecap="round" />
            <CLabel x={340} y={52} anchor="start" fill="#b5375d" size={12}>
              NUCLEUS
            </CLabel>
            <CLabel x={340} y={68} anchor="start" fill="#5e6b7d" size={10.5} weight={700}>
              6 PROTONS (+) &amp; 6 NEUTRONS (0)
            </CLabel>

            <path d="M 332 118 C 306 118, 290 120, 276 120" fill="none" stroke="#1d74bf" strokeWidth="1.65" strokeLinecap="round" />
            <CLabel x={340} y={116} anchor="start" fill="#1766ad" size={12}>
              ELECTRON (−)
            </CLabel>
            <CLabel x={340} y={132} anchor="start" fill="#5e6b7d" size={10.5} weight={700}>
              ORBITING IN SHELLS (CARBON: 2, 4)
            </CLabel>

            {/* Pastel Subatomic Particle Key */}
            <g transform="translate(328 166)">
              <rect x="0" y="0" width="256" height="56" rx="12" fill="#f5f8fc" stroke="#d9e3ef" strokeWidth="1.5" />
              <circle cx="20" cy="19" r="6" fill="#f9afc3" stroke="#cc456b" strokeWidth="1.6" />
              <CLabel x={32} y={23} anchor="start" fill="#b5375d" size={10}>
                PROTON (+1, MASS 1)
              </CLabel>
              <circle cx="20" cy="40" r="6" fill="#a8ebd4" stroke="#289980" strokeWidth="1.6" />
              <CLabel x={32} y={44} anchor="start" fill="#1f7f6b" size={10}>
                NEUTRON (0, MASS 1)
              </CLabel>
              <circle cx="178" cy="29" r="6" fill="#70bffa" stroke="#186db5" strokeWidth="1.6" />
              <CLabel x={190} y={33} anchor="start" fill="#1766ad" size={10}>
                e⁻ (−1)
              </CLabel>
            </g>
          </svg>
        );

      /* =====================================================================
       * 7. CIRCUIT SERIES VS PARALLEL (Upgraded Cognito pastel style)
       * ===================================================================*/
      case 'circuit-series-parallel':
        return (
          <svg
            viewBox="0 0 620 240"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Series and parallel electrical circuits comparison"
          >
            <ArrowMarkerDefs prefix={uid} colors={{ blue: '#1f7ec9', purple: '#7d3ec4' }} />

            {/* Subtle vertical center divider */}
            <line x1="310" y1="18" x2="310" y2="224" stroke="#d5dde8" strokeWidth="1.6" strokeDasharray="5 5" />

            {/* SERIES CIRCUIT */}
            <PillHeader cx={155} cy={22} width={132} text="SERIES CIRCUIT" bg="#e4f3ff" stroke="#7bc0f7" color="#1766ad" />

            <g transform="translate(55 46)">
              {/* Clean split wires stopping at battery plates (no background mask!) */}
              <path
                d="M 90 14 L 18 14 C 10 14, 6 18, 6 26 L 6 106 C 6 114, 10 118, 18 118 L 182 118 C 190 118, 194 114, 194 106 L 194 26 C 194 18, 190 14, 182 14 L 108 14"
                fill="none"
                stroke="#4a5b70"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Battery Cell */}
              <line x1="92" y1="0" x2="92" y2="28" stroke="#1766ad" strokeWidth="3" strokeLinecap="round" />
              <line x1="106" y1="6" x2="106" y2="22" stroke="#1766ad" strokeWidth="4.6" strokeLinecap="round" />
              <CLabel x={82} y={4} fill="#1766ad" size={11}>
                +
              </CLabel>
              <CLabel x={116} y={4} fill="#525e70" size={11}>
                −
              </CLabel>

              {/* Current direction arrows */}
              <path d="M 30 14 L 58 14" stroke="#1f7ec9" strokeWidth="2.2" markerEnd={`url(#${uid}-blue)`} />
              <path d="M 194 56 L 194 82" stroke="#1f7ec9" strokeWidth="2.2" markerEnd={`url(#${uid}-blue)`} />

              {/* Two Glowing Pastel Lamps */}
              {[62, 138].map((cx) => (
                <g key={cx} transform={`translate(${cx} 118)`}>
                  <circle cx="0" cy="0" r="15" fill="#fff0a6" stroke="#d48c14" strokeWidth="2.4" />
                  <line x1="-8" y1="-8" x2="8" y2="8" stroke="#b8730a" strokeWidth="2" strokeLinecap="round" />
                  <line x1="8" y1="-8" x2="-8" y2="8" stroke="#b8730a" strokeWidth="2" strokeLinecap="round" />
                </g>
              ))}
            </g>

            <CLabel x={155} y={204} fill="#1766ad" size={11.5}>
              SAME CURRENT (I₁ = I₂)
            </CLabel>
            <CLabel x={155} y={222} fill="#5c697a" size={10.5} weight={700}>
              VOLTAGE SHARED: Vₜ = V₁ + V₂
            </CLabel>

            {/* PARALLEL CIRCUIT */}
            <PillHeader cx={465} cy={22} width={146} text="PARALLEL CIRCUIT" bg="#f2e8fd" stroke="#c398f0" color="#682eb0" />

            <g transform="translate(365 46)">
              {/* Outer split loop */}
              <path
                d="M 90 14 L 18 14 C 10 14, 6 18, 6 26 L 6 112 C 6 120, 10 124, 18 124 L 182 124 C 190 124, 194 120, 194 112 L 194 26 C 194 18, 190 14, 182 14 L 108 14"
                fill="none"
                stroke="#4a5b70"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Middle parallel branch */}
              <line x1="6" y1="72" x2="194" y2="72" stroke="#4a5b70" strokeWidth="2.6" />
              <circle cx="6" cy="72" r="4" fill="#682eb0" />
              <circle cx="194" cy="72" r="4" fill="#682eb0" />

              {/* Battery Cell */}
              <line x1="92" y1="0" x2="92" y2="28" stroke="#682eb0" strokeWidth="3" strokeLinecap="round" />
              <line x1="106" y1="6" x2="106" y2="22" stroke="#682eb0" strokeWidth="4.6" strokeLinecap="round" />
              <CLabel x={82} y={4} fill="#682eb0" size={11}>
                +
              </CLabel>
              <CLabel x={116} y={4} fill="#525e70" size={11}>
                −
              </CLabel>

              {/* Branching Current Arrows */}
              <path d="M 30 72 L 58 72" stroke="#7d3ec4" strokeWidth="2.1" markerEnd={`url(#${uid}-purple)`} />
              <path d="M 30 124 L 58 124" stroke="#7d3ec4" strokeWidth="2.1" markerEnd={`url(#${uid}-purple)`} />

              {/* Two Lamps on Separate Branches */}
              {[72, 124].map((cy) => (
                <g key={cy} transform={`translate(100 ${cy})`}>
                  <circle cx="0" cy="0" r="14.5" fill="#fff0a6" stroke="#d48c14" strokeWidth="2.4" />
                  <line x1="-7.5" y1="-7.5" x2="7.5" y2="7.5" stroke="#b8730a" strokeWidth="2" strokeLinecap="round" />
                  <line x1="7.5" y1="-7.5" x2="-7.5" y2="7.5" stroke="#b8730a" strokeWidth="2" strokeLinecap="round" />
                </g>
              ))}
            </g>

            <CLabel x={465} y={204} fill="#682eb0" size={11.5}>
              SAME VOLTAGE (V₁ = V₂)
            </CLabel>
            <CLabel x={465} y={222} fill="#5c697a" size={10.5} weight={700}>
              CURRENT SPLITS: Iₜ = I₁ + I₂
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 8. TRANSVERSE WAVE (Upgraded Cognito pastel style)
       * ===================================================================*/
      case 'transverse-wave':
        return (
          <svg
            viewBox="0 0 620 238"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Transverse wave diagram showing wavelength, amplitude, peak, trough, and oscillation direction"
          >
            <ArrowMarkerDefs
              prefix={uid}
              colors={{ teal: '#229680', blue: '#1d7ac7', coral: '#d14a70', slate: '#5b687a' }}
            />

            {/* Oscillation perpendicular indicator on left */}
            <line
              x1="38"
              y1="96"
              x2="38"
              y2="156"
              stroke="#d14a70"
              strokeWidth="2.2"
              markerStart={`url(#${uid}-coral)`}
              markerEnd={`url(#${uid}-coral)`}
            />
            <CLabel x={38} y={84} fill="#b8375d" size={9.5}>
              VIBRATION
            </CLabel>
            <CLabel x={38} y={172} fill="#b8375d" size={9.5}>
              (90° TO WAVE)
            </CLabel>

            {/* Rest / Equilibrium Line */}
            <line x1="76" y1="126" x2="554" y2="126" stroke="#9aa8ba" strokeWidth="2" strokeDasharray="6 5" />
            <CLabel x={552} y={144} anchor="end" fill="#6d7b8f" size={9.5}>
              REST POSITION
            </CLabel>

            {/* Smooth Pastel Purple Transverse Wave (2 full wavelengths: 82..502, λ=210) */}
            <path
              d="M 82 126 C 101 90, 115 64, 134.5 64 C 154 64, 168 90, 187 126 C 206 162, 220 188, 239.5 188 C 259 188, 273 162, 292 126 C 311 90, 325 64, 344.5 64 C 364 64, 378 90, 397 126 C 416 162, 430 188, 449.5 188 C 469 188, 483 162, 502 126"
              fill="none"
              stroke="#e4cffb"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M 82 126 C 101 90, 115 64, 134.5 64 C 154 64, 168 90, 187 126 C 206 162, 220 188, 239.5 188 C 259 188, 273 162, 292 126 C 311 90, 325 64, 344.5 64 C 364 64, 378 90, 397 126 C 416 162, 430 188, 449.5 188 C 469 188, 483 162, 502 126"
              fill="none"
              stroke="#8438cc"
              strokeWidth="3.4"
              strokeLinecap="round"
            />

            {/* Wavelength Bracket (Peak 1 to Peak 2) */}
            <line x1="134.5" y1="34" x2="134.5" y2="62" stroke="#229680" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="344.5" y1="34" x2="344.5" y2="62" stroke="#229680" strokeWidth="1.5" strokeDasharray="3 3" />
            <line
              x1="140.5"
              y1="38"
              x2="338.5"
              y2="38"
              stroke="#229680"
              strokeWidth="2.3"
              markerStart={`url(#${uid}-teal)`}
              markerEnd={`url(#${uid}-teal)`}
            />
            <CLabel x={239.5} y={24} fill="#1b7f6c" size={11.5}>
              WAVELENGTH (λ)
            </CLabel>

            {/* Amplitude Vertical Bracket in clean open space on right */}
            <line x1="348" y1="64" x2="532" y2="64" stroke="#68b5f5" strokeWidth="1.5" strokeDasharray="4 4" />
            <line
              x1="522"
              y1="70"
              x2="522"
              y2="120"
              stroke="#1d7ac7"
              strokeWidth="2.4"
              markerStart={`url(#${uid}-blue)`}
              markerEnd={`url(#${uid}-blue)`}
            />
            <CLabel x={534} y={99} anchor="start" fill="#1766ad" size={11}>
              AMPLITUDE
            </CLabel>

            {/* Peak & Trough Markers */}
            <circle cx="134.5" cy="64" r="5" fill="#f9afc3" stroke="#cc456b" strokeWidth="2" />
            <path d="M 96 44 C 110 44, 122 50, 130 60" fill="none" stroke="#cc456b" strokeWidth="1.5" strokeLinecap="round" />
            <CLabel x={91} y={48} anchor="end" fill="#b5375d" size={10}>
              PEAK (CREST)
            </CLabel>

            <circle cx="239.5" cy="188" r="5" fill="#f9afc3" stroke="#cc456b" strokeWidth="2" />
            <path d="M 239.5 206 L 239.5 194" fill="none" stroke="#cc456b" strokeWidth="1.5" strokeLinecap="round" />
            <CLabel x={239.5} y={221} fill="#b5375d" size={10.5}>
              TROUGH
            </CLabel>

            {/* Energy / Wave Direction Arrow */}
            <line
              x1="406"
              y1="216"
              x2="536"
              y2="216"
              stroke="#5b687a"
              strokeWidth="2.2"
              markerEnd={`url(#${uid}-slate)`}
            />
            <CLabel x={468} y={207} fill="#4b5769" size={9.5}>
              WAVE DIRECTION
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 9. ENZYME LOCK-AND-KEY MODEL (NEW — Cognito pastel 3-step mechanism)
       * ===================================================================*/
      case 'enzyme-lock-key':
        return (
          <svg
            viewBox="0 0 640 236"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Enzyme lock and key model showing enzyme, active site, substrate, enzyme-substrate complex, and products"
          >
            <ArrowMarkerDefs prefix={uid} colors={{ slate: '#6b7a8f' }} />

            {/* STAGE 1: Enzyme + Substrate */}
            <g transform="translate(98 118)">
              {/* Notched Mint Enzyme */}
              <path
                d="M -46 -36 C -26 -54, 18 -54, 34 -34 L 34 -18 L 6 -2 L 34 14 L 34 34 C 18 54, -26 54, -46 36 C -64 18, -64 -18, -46 -36 Z"
                fill="#bcf2e4"
                stroke="#289c84"
                strokeWidth="2.6"
                strokeLinejoin="round"
              />
              {/* Complementary Coral-Pink Substrate approaching */}
              <path
                d="M 46 -2 L 70 -16 C 82 -18, 92 -8, 92 0 C 92 8, 82 18, 70 16 Z"
                fill="#fab8cb"
                stroke="#d44d72"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
            </g>
            {/* Stage 1 Labels */}
            <path d="M 68 44 C 68 56, 74 64, 80 72" fill="none" stroke="#228e79" strokeWidth="1.6" strokeLinecap="round" />
            <CLabel x={66} y={35} fill="#1f7f6b" size={11}>
              ENZYME
            </CLabel>

            <path d="M 184 52 C 180 70, 178 84, 174 98" fill="none" stroke="#c94369" strokeWidth="1.6" strokeLinecap="round" />
            <CLabel x={188} y={42} fill="#b5375d" size={11}>
              SUBSTRATE
            </CLabel>

            <path d="M 128 184 C 124 162, 120 144, 116 128" fill="none" stroke="#228e79" strokeWidth="1.6" strokeLinecap="round" />
            <CLabel x={128} y={200} fill="#1f7f6b" size={10.5}>
              ACTIVE SITE
            </CLabel>

            {/* Arrow 1 -> 2 */}
            <path
              d="M 206 118 Q 222 110, 238 118"
              fill="none"
              stroke="#6b7a8f"
              strokeWidth="2.3"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-slate)`}
            />

            {/* STAGE 2: Enzyme-Substrate Complex */}
            <g transform="translate(314 118)">
              <path
                d="M -46 -36 C -26 -54, 18 -54, 34 -34 L 34 -18 L 6 -2 L 34 14 L 34 34 C 18 54, -26 54, -46 36 C -64 18, -64 -18, -46 -36 Z"
                fill="#bcf2e4"
                stroke="#289c84"
                strokeWidth="2.6"
                strokeLinejoin="round"
              />
              {/* Docked Substrate */}
              <path
                d="M 9 -2 L 35 -16 C 47 -18, 57 -8, 57 0 C 57 8, 47 18, 35 16 Z"
                fill="#fab8cb"
                stroke="#d44d72"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              {/* Subtle reaction sparkle */}
              <circle cx="32" cy="-2" r="2.2" fill="#ffffff" />
            </g>
            <CLabel x={316} y={196} fill="#525e70" size={10.5}>
              ENZYME–SUBSTRATE
            </CLabel>
            <CLabel x={316} y={211} fill="#525e70" size={10.5}>
              COMPLEX
            </CLabel>

            {/* Arrow 2 -> 3 */}
            <path
              d="M 392 118 Q 408 110, 424 118"
              fill="none"
              stroke="#6b7a8f"
              strokeWidth="2.3"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-slate)`}
            />

            {/* STAGE 3: Enzyme Unchanged + Products */}
            <g transform="translate(500 118)">
              <path
                d="M -46 -36 C -26 -54, 18 -54, 34 -34 L 34 -18 L 6 -2 L 34 14 L 34 34 C 18 54, -26 54, -46 36 C -64 18, -64 -18, -46 -36 Z"
                fill="#bcf2e4"
                stroke="#289c84"
                strokeWidth="2.6"
                strokeLinejoin="round"
              />
              {/* Two separated pastel products drifting out */}
              <path
                d="M 46 -12 L 70 -26 C 82 -26, 90 -18, 90 -10 L 62 -10 Z"
                fill="#ffcfba"
                stroke="#d66547"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <path
                d="M 48 12 L 64 10 L 92 10 C 92 18, 84 26, 72 26 Z"
                fill="#e2c9fa"
                stroke="#8142c7"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
            </g>

            {/* Stage 3 Labels */}
            <path d="M 576 54 C 574 68, 572 78, 570 86" fill="none" stroke="#8142c7" strokeWidth="1.6" strokeLinecap="round" />
            <CLabel x={576} y={44} fill="#6c31b0" size={11}>
              PRODUCTS
            </CLabel>
            <CLabel x={500} y={196} fill="#1f7f6b" size={10.5}>
              ENZYME UNCHANGED
            </CLabel>
            <CLabel x={500} y={211} fill="#6b778a" size={9.5} weight={700}>
              (REUSABLE CATALYST)
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 10. OSMOSIS ACROSS PARTIALLY PERMEABLE MEMBRANE (NEW)
       * ===================================================================*/
      case 'osmosis-membrane':
        return (
          <svg
            viewBox="0 0 620 248"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Osmosis across a partially permeable membrane from dilute to concentrated sugar solution"
          >
            <ArrowMarkerDefs prefix={uid} colors={{ blue: '#1d7ac7' }} />

            {/* Column Headers */}
            <CLabel x={182} y={24} fill="#1766ad" size={11.5}>
              DILUTE SOLUTION
            </CLabel>
            <CLabel x={182} y={39} fill="#62758a" size={9.5} weight={700}>
              HIGH WATER POTENTIAL
            </CLabel>

            <CLabel x={438} y={24} fill="#b5375d" size={11.5}>
              CONCENTRATED SOLUTION
            </CLabel>
            <CLabel x={438} y={39} fill="#62758a" size={9.5} weight={700}>
              LOW WATER POTENTIAL
            </CLabel>

            {/* Split Solution Tank */}
            <g>
              <path
                d="M 74 52 L 310 52 L 310 194 L 74 194 C 64 194, 56 186, 56 176 L 56 70 C 56 60, 64 52, 74 52 Z"
                fill="#eef7ff"
              />
              <path
                d="M 310 52 L 546 52 C 556 52, 564 60, 564 70 L 564 176 C 564 186, 556 194, 546 194 L 310 194 Z"
                fill="#fef1f5"
              />
              <rect
                x="56"
                y="52"
                width="508"
                height="142"
                rx="18"
                fill="none"
                stroke="#6e8299"
                strokeWidth="2.4"
              />
            </g>

            {/* Partially Permeable Membrane (vertical segments with small pores) */}
            {[56, 86, 116, 146, 174].map((y, idx) => (
              <rect
                key={idx}
                x="305"
                y={y}
                width="10"
                height={idx === 4 ? 16 : 18}
                rx="5"
                fill="#8ae3cc"
                stroke="#23947e"
                strokeWidth="1.8"
              />
            ))}

            {/* Left Chamber: Many small water circles + 2 large sugar hexagons */}
            {[
              [84, 78], [116, 70], [154, 82], [198, 72], [240, 84], [276, 74],
              [94, 122], [134, 114], [184, 128], [228, 118], [268, 126],
              [88, 166], [142, 162], [202, 168], [254, 160],
            ].map(([cx, cy], i) => (
              <circle key={`wl-${i}`} cx={cx} cy={cy} r="6.2" fill="#7ac5fc" stroke="#1e7ac7" strokeWidth="1.6" />
            ))}
            {[
              [122, 142],
              [224, 142],
            ].map(([cx, cy], i) => (
              <polygon
                key={`sl-${i}`}
                points={hexPoints(cx, cy, 12.5)}
                fill="#fab8cb"
                stroke="#cc456b"
                strokeWidth="1.9"
                strokeLinejoin="round"
              />
            ))}

            {/* Right Chamber: Many large sugar hexagons + few water circles */}
            {[
              [376, 76], [428, 80], [486, 74], [534, 86],
              [386, 124], [452, 128], [516, 122],
              [388, 168], [446, 168], [508, 166],
            ].map(([cx, cy], i) => (
              <polygon
                key={`sr-${i}`}
                points={hexPoints(cx, cy, 12.5)}
                fill="#fab8cb"
                stroke="#cc456b"
                strokeWidth="1.9"
                strokeLinejoin="round"
              />
            ))}
            {[
              [352, 102], [420, 108], [484, 146], [538, 152],
            ].map(([cx, cy], i) => (
              <circle key={`wr-${i}`} cx={cx} cy={cy} r="6.2" fill="#7ac5fc" stroke="#1e7ac7" strokeWidth="1.6" />
            ))}

            {/* Net Water Osmosis Arrows Passing Through Membrane Pores */}
            <path
              d="M 272 108 C 292 108, 316 108, 344 108"
              fill="none"
              stroke="#1d7ac7"
              strokeWidth="3.2"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-blue)`}
            />
            <path
              d="M 272 140 C 292 140, 316 140, 344 140"
              fill="none"
              stroke="#1d7ac7"
              strokeWidth="3.2"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-blue)`}
            />

            {/* Net Movement Badge */}
            <PillHeader
              cx={310}
              cy={216}
              width={254}
              text="NET WATER MOVEMENT (OSMOSIS) →"
              bg="#e3f3ff"
              stroke="#6cb8f5"
              color="#145d9e"
            />

            {/* Bottom-Left & Bottom-Right Key */}
            <g transform="translate(56 216)">
              <circle cx="8" cy="0" r="6" fill="#7ac5fc" stroke="#1e7ac7" strokeWidth="1.6" />
              <CLabel x={20} y={4} anchor="start" fill="#1766ad" size={9.5}>
                WATER
              </CLabel>
            </g>
            <g transform="translate(474 216)">
              <polygon points={hexPoints(10, 0, 8.5)} fill="#fab8cb" stroke="#cc456b" strokeWidth="1.6" />
              <CLabel x={24} y={4} anchor="start" fill="#b5375d" size={9.5}>
                SUGAR
              </CLabel>
            </g>
            <CLabel x={310} y={240} fill="#1f7f6b" size={9.5}>
              PARTIALLY PERMEABLE MEMBRANE
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 11. MITOSIS CELL DIVISION CYCLE (NEW — 4-step pastel stages)
       * ===================================================================*/
      case 'mitosis-cycle':
        return (
          <svg
            viewBox="0 0 660 238"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Four-stage mitosis diagram: DNA replication, alignment at equator, chromatid separation, and two identical daughter cells"
          >
            <ArrowMarkerDefs prefix={uid} colors={{ purple: '#7d3ec4' }} />

            {/* STEP 1: DNA Replicates */}
            <g transform="translate(82 108)">
              <circle cx="0" cy="0" r="46" fill="#f5ecfd" stroke="#8949cf" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="29" fill="#fdfaff" stroke="#b98ee8" strokeWidth="1.6" strokeDasharray="4 3" />
              {/* X-shaped duplicated chromosomes */}
              <g stroke="#269980" strokeWidth="3.2" strokeLinecap="round">
                <line x1="-14" y1="-15" x2="-2" y2="1" />
                <line x1="-2" y1="-15" x2="-14" y2="1" />
              </g>
              <g stroke="#d44d72" strokeWidth="3.2" strokeLinecap="round">
                <line x1="4" y1="-4" x2="16" y2="14" />
                <line x1="16" y1="-4" x2="4" y2="14" />
              </g>
              {/* Step badge */}
              <circle cx="-36" cy="-38" r="11" fill="#8949cf" />
              <CLabel x={-36} y={-34} fill="#ffffff" size={11}>
                1
              </CLabel>
            </g>
            <CLabel x={82} y={182} fill="#5c2b99" size={10.5}>
              DNA REPLICATES
            </CLabel>
            <CLabel x={82} y={197} fill="#6b778a" size={9.5} weight={700}>
              (X-CHROMOSOMES)
            </CLabel>

            {/* Arrow 1 -> 2 */}
            <path d="M 138 108 L 176 108" stroke="#7d3ec4" strokeWidth="2.2" markerEnd={`url(#${uid}-purple)`} />

            {/* STEP 2: Line Up at Equator */}
            <g transform="translate(240 108)">
              <circle cx="0" cy="0" r="46" fill="#f5ecfd" stroke="#8949cf" strokeWidth="2.5" />
              {/* Spindle poles & fibres */}
              <g stroke="#d69c38" strokeWidth="1.2" strokeDasharray="3 2.5" opacity="0.9">
                <line x1="-35" y1="0" x2="0" y2="-16" />
                <line x1="-35" y1="0" x2="0" y2="16" />
                <line x1="35" y1="0" x2="0" y2="-16" />
                <line x1="35" y1="0" x2="0" y2="16" />
              </g>
              <circle cx="-36" cy="0" r="4.5" fill="#ffd98a" stroke="#c97d10" strokeWidth="1.5" />
              <circle cx="36" cy="0" r="4.5" fill="#ffd98a" stroke="#c97d10" strokeWidth="1.5" />
              {/* Aligned chromosomes along center */}
              <g stroke="#269980" strokeWidth="3.2" strokeLinecap="round">
                <line x1="-6" y1="-24" x2="6" y2="-8" />
                <line x1="6" y1="-24" x2="-6" y2="-8" />
              </g>
              <g stroke="#d44d72" strokeWidth="3.2" strokeLinecap="round">
                <line x1="-6" y1="8" x2="6" y2="24" />
                <line x1="6" y1="8" x2="-6" y2="24" />
              </g>
              <circle cx="-36" cy="-38" r="11" fill="#8949cf" />
              <CLabel x={-36} y={-34} fill="#ffffff" size={11}>
                2
              </CLabel>
            </g>
            <CLabel x={240} y={182} fill="#5c2b99" size={10.5}>
              ALIGN AT EQUATOR
            </CLabel>
            <CLabel x={240} y={197} fill="#6b778a" size={9.5} weight={700}>
              (SPINDLE FIBRES)
            </CLabel>

            {/* Arrow 2 -> 3 */}
            <path d="M 296 108 L 332 108" stroke="#7d3ec4" strokeWidth="2.2" markerEnd={`url(#${uid}-purple)`} />

            {/* STEP 3: Chromatids Pulled Apart */}
            <g transform="translate(402 108)">
              <ellipse cx="0" cy="0" rx="54" ry="42" fill="#f5ecfd" stroke="#8949cf" strokeWidth="2.5" />
              {/* Spindle fibres */}
              <g stroke="#d69c38" strokeWidth="1.2" strokeDasharray="3 2.5" opacity="0.9">
                <line x1="-43" y1="0" x2="-18" y2="-13" />
                <line x1="-43" y1="0" x2="-18" y2="13" />
                <line x1="43" y1="0" x2="18" y2="-13" />
                <line x1="43" y1="0" x2="18" y2="13" />
              </g>
              <circle cx="-44" cy="0" r="4.5" fill="#ffd98a" stroke="#c97d10" strokeWidth="1.5" />
              <circle cx="44" cy="0" r="4.5" fill="#ffd98a" stroke="#c97d10" strokeWidth="1.5" />
              {/* Separating V-chromatids */}
              <path d="M -12 -20 L -20 -13 L -12 -6" fill="none" stroke="#269980" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 12 -20 L 20 -13 L 12 -6" fill="none" stroke="#269980" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M -12 6 L -20 13 L -12 20" fill="none" stroke="#d44d72" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 12 6 L 20 13 L 12 20" fill="none" stroke="#d44d72" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="-44" cy="-36" r="11" fill="#8949cf" />
              <CLabel x={-44} y={-32} fill="#ffffff" size={11}>
                3
              </CLabel>
            </g>
            <CLabel x={402} y={182} fill="#5c2b99" size={10.5}>
              PULLED APART
            </CLabel>
            <CLabel x={402} y={197} fill="#6b778a" size={9.5} weight={700}>
              (OPPOSITE POLES)
            </CLabel>

            {/* Arrow 3 -> 4 */}
            <path d="M 466 108 L 502 108" stroke="#7d3ec4" strokeWidth="2.2" markerEnd={`url(#${uid}-purple)`} />

            {/* STEP 4: 2 Identical Daughter Cells */}
            <g transform="translate(578 108)">
              {[
                { x: -32, y: 0 },
                { x: 34, y: 0 },
              ].map((cell, i) => (
                <g key={i} transform={`translate(${cell.x} ${cell.y})`}>
                  <circle cx="0" cy="0" r="29" fill="#e6faf3" stroke="#289c84" strokeWidth="2.4" />
                  <circle cx="0" cy="0" r="17" fill="#ffffff" stroke="#7edcc6" strokeWidth="1.5" />
                  <line x1="-6" y1="-8" x2="-6" y2="6" stroke="#269980" strokeWidth="3" strokeLinecap="round" />
                  <line x1="6" y1="-6" x2="6" y2="8" stroke="#d44d72" strokeWidth="3" strokeLinecap="round" />
                </g>
              ))}
              <circle cx="-54" cy="-36" r="11" fill="#289c84" />
              <CLabel x={-54} y={-32} fill="#ffffff" size={11}>
                4
              </CLabel>
            </g>
            <CLabel x={578} y={182} fill="#1f7f6b" size={10.5}>
              2 IDENTICAL CELLS
            </CLabel>
            <CLabel x={578} y={197} fill="#6b778a" size={9.5} weight={700}>
              (CYTOKINESIS)
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 12. IONIC & COVALENT BONDING DOT-AND-CROSS (NEW — NaCl & H2O)
       * ===================================================================*/
      case 'ionic-covalent-bonding': {
        const Cross: React.FC<{ x: number; y: number; color: string }> = ({ x, y, color }) => (
          <g stroke={color} strokeWidth="2" strokeLinecap="round">
            <line x1={x - 3.3} y1={y - 3.3} x2={x + 3.3} y2={y + 3.3} />
            <line x1={x + 3.3} y1={y - 3.3} x2={x - 3.3} y2={y + 3.3} />
          </g>
        );
        return (
          <svg
            viewBox="0 0 660 250"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Dot and cross diagrams comparing ionic bonding in sodium chloride and covalent bonding in water"
          >
            <ArrowMarkerDefs prefix={uid} colors={{ coral: '#d14a70' }} />

            {/* Vertical divider */}
            <line x1="334" y1="16" x2="334" y2="236" stroke="#d5dde8" strokeWidth="1.6" strokeDasharray="5 5" />

            {/* LEFT: IONIC BONDING (NaCl) */}
            <PillHeader cx={166} cy={22} width={166} text="IONIC BONDING (NaCl)" bg="#fff2d9" stroke="#f2ba5a" color="#a86408" />

            {/* Electron transfer arc */}
            <path
              d="M 114 82 C 138 56, 174 56, 196 86"
              fill="none"
              stroke="#d14a70"
              strokeWidth="2.1"
              strokeDasharray="4 3"
              markerEnd={`url(#${uid}-coral)`}
            />
            <CLabel x={156} y={58} fill="#b8375d" size={9.5}>
              1 e⁻ TRANSFERRED
            </CLabel>

            {/* Na+ ion */}
            <g transform="translate(86 134)">
              {/* Square brackets */}
              <path d="M -42 -48 L -52 -48 L -52 48 L -42 48" fill="none" stroke="#64748b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 42 -48 L 52 -48 L 52 48 L 42 48" fill="none" stroke="#64748b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <CLabel x={60} y={-42} fill="#b56b09" size={14}>
                +
              </CLabel>
              {/* Shells */}
              <circle cx="0" cy="0" r="39" fill="none" stroke="#c99748" strokeWidth="1.8" />
              <circle cx="0" cy="0" r="24" fill="none" stroke="#d9b16e" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="14" fill="#ffe2ad" stroke="#d48415" strokeWidth="1.8" />
              <CLabel x={0} y={4.5} fill="#8a4f04" size={11.5}>
                Na
              </CLabel>
              {/* 2 inner + 8 outer amber dots */}
              {[
                [0, -24], [0, 24],
                [-4, -39], [4, -39],
                [-4, 39], [4, 39],
                [39, -4], [39, 4],
                [-39, -4], [-39, 4],
              ].map(([dx, dy], i) => (
                <circle key={`na-${i}`} cx={dx} cy={dy} r="2.8" fill="#d48415" />
              ))}
            </g>

            {/* Cl- ion */}
            <g transform="translate(242 134)">
              <path d="M -42 -48 L -52 -48 L -52 48 L -42 48" fill="none" stroke="#64748b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 42 -48 L 52 -48 L 52 48 L 42 48" fill="none" stroke="#64748b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <CLabel x={60} y={-42} fill="#1f7f6b" size={15}>
                −
              </CLabel>
              {/* Outer shell */}
              <circle cx="0" cy="0" r="39" fill="none" stroke="#3aa892" strokeWidth="1.9" />
              <circle cx="0" cy="0" r="15" fill="#bcf2e4" stroke="#26967f" strokeWidth="1.8" />
              <CLabel x={0} y={4.5} fill="#146353" size={11.5}>
                Cl
              </CLabel>
              {/* 7 mint crosses */}
              <Cross x={-4} y={-39} color="#1f7f6b" />
              <Cross x={5} y={-39} color="#1f7f6b" />
              <Cross x={-4} y={39} color="#1f7f6b" />
              <Cross x={5} y={39} color="#1f7f6b" />
              <Cross x={39} y={-4} color="#1f7f6b" />
              <Cross x={39} y={5} color="#1f7f6b" />
              <Cross x={-39} y={5} color="#1f7f6b" />
              {/* 1 transferred amber dot highlighted */}
              <circle cx="-39" cy="-5" r="5.5" fill="#fde3ea" opacity="0.9" />
              <circle cx="-39" cy="-5" r="3.4" fill="#d44d72" />
            </g>

            <CLabel x={166} y={214} fill="#475569" size={10.5}>
              METAL + NON-METAL
            </CLabel>
            <CLabel x={166} y={230} fill="#768499" size={9.5} weight={700}>
              STRONG ELECTROSTATIC ATTRACTION
            </CLabel>

            {/* RIGHT: COVALENT BONDING (H2O) */}
            <PillHeader cx={498} cy={22} width={174} text="COVALENT BONDING (H₂O)" bg="#e4f3ff" stroke="#7bc0f7" color="#1766ad" />

            <g transform="translate(498 122)">
              {/* Oxygen Outer Shell */}
              <circle cx="0" cy="-6" r="42" fill="#e6f4ff" fillOpacity="0.65" stroke="#2282d4" strokeWidth="2.1" />
              {/* Hydrogen Shells overlapping Oxygen */}
              <circle cx="-46" cy="30" r="28" fill="#f1e6fd" fillOpacity="0.6" stroke="#7d3ec4" strokeWidth="2" />
              <circle cx="46" cy="30" r="28" fill="#f1e6fd" fillOpacity="0.6" stroke="#7d3ec4" strokeWidth="2" />

              {/* Atom Cores */}
              <circle cx="0" cy="-6" r="14" fill="#c4e4fc" stroke="#1b74bf" strokeWidth="1.8" />
              <CLabel x={0} y={-2} fill="#104e85" size={12}>
                O
              </CLabel>
              <circle cx="-48" cy="32" r="11" fill="#e2cef9" stroke="#7133b8" strokeWidth="1.7" />
              <CLabel x={-48} y={36} fill="#52218c" size={11}>
                H
              </CLabel>
              <circle cx="48" cy="32" r="11" fill="#e2cef9" stroke="#7133b8" strokeWidth="1.7" />
              <CLabel x={48} y={36} fill="#52218c" size={11}>
                H
              </CLabel>

              {/* Lone pairs on Oxygen (4 blue dots) */}
              <circle cx="-18" cy="-42" r="3.1" fill="#186db5" />
              <circle cx="-8" cy="-46" r="3.1" fill="#186db5" />
              <circle cx="8" cy="-46" r="3.1" fill="#186db5" />
              <circle cx="18" cy="-42" r="3.1" fill="#186db5" />

              {/* Shared Electron Pairs in Overlap Lenses (dot + cross) */}
              <circle cx="-28" cy="14" r="3.2" fill="#186db5" />
              <Cross x={-21} y={22} color="#7133b8" />

              <circle cx="28" cy="14" r="3.2" fill="#186db5" />
              <Cross x={21} y={22} color="#7133b8" />

              {/* Leader to shared pair */}
              <path d="M 74 -34 C 58 -24, 42 -6, 31 10" fill="none" stroke="#186db5" strokeWidth="1.55" strokeLinecap="round" />
              <CLabel x={76} y={-40} anchor="middle" fill="#1766ad" size={9.5}>
                SHARED PAIR
              </CLabel>
            </g>

            <CLabel x={498} y={214} fill="#475569" size={10.5}>
              NON-METALS SHARE ELECTRONS
            </CLabel>
            <CLabel x={498} y={230} fill="#768499" size={9.5} weight={700}>
              FULL OUTER SHELLS ACHIEVED
            </CLabel>
          </svg>
        );
      }

      /* =====================================================================
       * 13. EXOTHERMIC & ENDOTHERMIC REACTION PROFILES (NEW)
       * ===================================================================*/
      case 'exothermic-endothermic':
        return (
          <svg
            viewBox="0 0 640 246"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Exothermic and endothermic reaction energy profile diagrams showing activation energy Ea and enthalpy change delta H"
          >
            <ArrowMarkerDefs
              prefix={uid}
              colors={{ slate: '#556478', amber: '#cc7c0e', coral: '#c93c63', blue: '#1b76c2' }}
            />

            {/* LEFT: EXOTHERMIC */}
            <PillHeader cx={170} cy={22} width={164} text="EXOTHERMIC REACTION" bg="#fdebf0" stroke="#f0a8bc" color="#b5375d" />

            {/* Axes */}
            <line x1="48" y1="204" x2="48" y2="48" stroke="#556478" strokeWidth="2.1" markerEnd={`url(#${uid}-slate)`} />
            <line x1="48" y1="204" x2="294" y2="204" stroke="#556478" strokeWidth="2.1" markerEnd={`url(#${uid}-slate)`} />
            <text
              x="28"
              y="128"
              textAnchor="middle"
              transform="rotate(-90 28 128)"
              fontFamily={FONT_LABEL}
              fontSize="10.5"
              fontWeight="800"
              letterSpacing="0.06em"
              fill="#556478"
            >
              ENERGY
            </text>
            <CLabel x={172} y={224} fill="#556478" size={9.5}>
              PROGRESS OF REACTION
            </CLabel>

            {/* Dashed Reactants Baseline */}
            <line x1="114" y1="112" x2="262" y2="112" stroke="#a6b3c4" strokeWidth="1.6" strokeDasharray="4 4" />

            {/* Reaction Energy Curve */}
            <path
              d="M 62 112 L 114 112 C 136 112, 142 62, 166 62 C 194 62, 198 172, 224 172 L 280 172"
              fill="none"
              stroke="#d95378"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <CLabel x={88} y={103} fill="#1f7f6b" size={9.5}>
              REACTANTS
            </CLabel>
            <CLabel x={256} y={189} fill="#6c31b0" size={9.5}>
              PRODUCTS
            </CLabel>

            {/* Ea Arrow */}
            <line x1="166" y1="110" x2="166" y2="68" stroke="#cc7c0e" strokeWidth="2.3" markerEnd={`url(#${uid}-amber)`} />
            <CLabel x={174} y={91} anchor="start" fill="#b36a08" size={10.5}>
              Ea
            </CLabel>

            {/* Delta H Down Arrow */}
            <line x1="244" y1="114" x2="244" y2="166" stroke="#c93c63" strokeWidth="2.3" markerEnd={`url(#${uid}-coral)`} />
            <CLabel x={252} y={136} anchor="start" fill="#b5375d" size={10}>
              ΔH &lt; 0
            </CLabel>
            <CLabel x={252} y={149} anchor="start" fill="#b5375d" size={8.5} weight={700}>
              RELEASED
            </CLabel>

            {/* RIGHT: ENDOTHERMIC */}
            <PillHeader cx={482} cy={22} width={172} text="ENDOTHERMIC REACTION" bg="#e4f3ff" stroke="#7bc0f7" color="#1766ad" />

            {/* Axes */}
            <line x1="360" y1="204" x2="360" y2="48" stroke="#556478" strokeWidth="2.1" markerEnd={`url(#${uid}-slate)`} />
            <line x1="360" y1="204" x2="606" y2="204" stroke="#556478" strokeWidth="2.1" markerEnd={`url(#${uid}-slate)`} />
            <text
              x="340"
              y="128"
              textAnchor="middle"
              transform="rotate(-90 340 128)"
              fontFamily={FONT_LABEL}
              fontSize="10.5"
              fontWeight="800"
              letterSpacing="0.06em"
              fill="#556478"
            >
              ENERGY
            </text>
            <CLabel x={484} y={224} fill="#556478" size={9.5}>
              PROGRESS OF REACTION
            </CLabel>

            {/* Dashed Reactants Baseline */}
            <line x1="426" y1="172" x2="574" y2="172" stroke="#a6b3c4" strokeWidth="1.6" strokeDasharray="4 4" />

            {/* Reaction Energy Curve */}
            <path
              d="M 374 172 L 426 172 C 450 172, 456 64, 482 64 C 504 64, 508 108, 534 108 L 592 108"
              fill="none"
              stroke="#2484d6"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <CLabel x={400} y={189} fill="#1f7f6b" size={9.5}>
              REACTANTS
            </CLabel>
            <CLabel x={568} y={99} fill="#6c31b0" size={9.5}>
              PRODUCTS
            </CLabel>

            {/* Ea Arrow */}
            <line x1="482" y1="170" x2="482" y2="70" stroke="#cc7c0e" strokeWidth="2.3" markerEnd={`url(#${uid}-amber)`} />
            <CLabel x={490} y={128} anchor="start" fill="#b36a08" size={10.5}>
              Ea
            </CLabel>

            {/* Delta H Up Arrow */}
            <line x1="556" y1="170" x2="556" y2="114" stroke="#1b76c2" strokeWidth="2.3" markerEnd={`url(#${uid}-blue)`} />
            <CLabel x={564} y={138} anchor="start" fill="#1766ad" size={10}>
              ΔH &gt; 0
            </CLabel>
            <CLabel x={564} y={151} anchor="start" fill="#1766ad" size={8.5} weight={700}>
              ABSORBED
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 14. REFLEX ARC (NEW — Sensory -> Relay CNS -> Motor + Synapse)
       * ===================================================================*/
      case 'reflex-arc':
        return (
          <svg
            viewBox="0 0 660 245"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Reflex arc pathway showing receptor, sensory neurone, relay neurone in spinal cord CNS, synapses, motor neurone, and effector muscle"
          >
            <ArrowMarkerDefs prefix={uid} colors={{ blue: '#1d7ac7', coral: '#cf486d', purple: '#7d3ec4' }} />

            {/* SPINAL CORD (CNS) Cross-Section */}
            <g transform="translate(348 122)">
              <ellipse cx="0" cy="0" rx="80" ry="66" fill="#f5eefc" stroke="#8e54cf" strokeWidth="2.5" />
              {/* Butterfly grey-matter shape */}
              <path
                d="M -34 -36 C -16 -36, -12 -14, 0 -14 C 12 -14, 16 -36, 34 -36 C 46 -36, 42 -8, 22 0 C 42 8, 46 36, 34 36 C 16 36, 12 14, 0 14 C -12 14, -16 36, -34 36 C -46 36, -42 8, -22 0 C -42 -8, -46 -36, -34 -36 Z"
                fill="#e2cdfa"
                stroke="#a675e0"
                strokeWidth="1.6"
              />
            </g>

            {/* STIMULUS & RECEPTOR (Left) */}
            <g transform="translate(44 96)">
              {/* Warm flame/pin stimulus burst */}
              <path
                d="M 0 -18 L 5 -6 L 16 -10 L 8 0 L 16 10 L 4 6 L 0 18 L -5 6 L -16 10 L -8 0 L -16 -10 L -5 -6 Z"
                fill="#ffd68a"
                stroke="#d96b27"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </g>
            {/* Mint Receptor Pad */}
            <rect x="74" y="76" width="40" height="40" rx="14" fill="#bcf2e4" stroke="#269980" strokeWidth="2.4" />
            <circle cx="94" cy="96" r="8" fill="#7be0c8" stroke="#1f7f6b" strokeWidth="1.6" />

            {/* SENSORY NEURONE (Top Blue Pathway) */}
            <path
              d="M 114 94 C 154 76, 198 64, 248 70 C 282 74, 304 86, 318 96"
              fill="none"
              stroke="#2080cf"
              strokeWidth="3.4"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-blue)`}
            />
            {/* Dorsal root ganglion cell body offshoot */}
            <line x1="216" y1="68" x2="216" y2="54" stroke="#2080cf" strokeWidth="2.8" />
            <circle cx="216" cy="48" r="9.5" fill="#c7e6fe" stroke="#2080cf" strokeWidth="2.2" />

            {/* SYNAPSE 1 Highlight Glow */}
            <circle cx="326" cy="100" r="10" fill="#ffe7ad" stroke="#d98916" strokeWidth="1.8" strokeDasharray="3 2" />

            {/* RELAY NEURONE (Inside CNS, Purple) */}
            <path
              d="M 334 104 C 348 112, 358 124, 368 136"
              fill="none"
              stroke="#7d3ec4"
              strokeWidth="3.2"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-purple)`}
            />
            <circle cx="350" cy="116" r="6" fill="#dec8f8" stroke="#7d3ec4" strokeWidth="1.8" />

            {/* SYNAPSE 2 Highlight Glow */}
            <circle cx="375" cy="143" r="10" fill="#ffe7ad" stroke="#d98916" strokeWidth="1.8" strokeDasharray="3 2" />

            {/* MOTOR NEURONE (Bottom Coral-Pink Pathway) */}
            <circle cx="384" cy="150" r="8" fill="#fab8cb" stroke="#cf486d" strokeWidth="2" />
            <path
              d="M 392 154 C 426 172, 474 176, 526 164"
              fill="none"
              stroke="#cf486d"
              strokeWidth="3.4"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-coral)`}
            />

            {/* EFFECTOR (MUSCLE) on Right */}
            <g transform="translate(578 156)">
              <path
                d="M -46 6 C -32 -16, 18 -20, 48 -4 C 54 0, 54 12, 48 16 C 18 28, -32 24, -46 6 Z"
                fill="#ffd3c9"
                stroke="#cc544e"
                strokeWidth="2.4"
              />
              <path d="M -26 4 C -6 -6, 18 -6, 36 4" fill="none" stroke="#cf6761" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M -22 12 C -4 4, 16 4, 32 12" fill="none" stroke="#cf6761" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* Curved Labels */}
            <CLabel x={76} y={142} fill="#1f7f6b" size={10.5}>
              STIMULUS →
            </CLabel>
            <CLabel x={76} y={157} fill="#1f7f6b" size={10.5}>
              RECEPTOR
            </CLabel>

            <CLabel x={198} y={24} fill="#1766ad" size={11}>
              SENSORY NEURONE
            </CLabel>

            <CLabel x={348} y={32} fill="#6a2eb0" size={11}>
              RELAY NEURONE (CNS)
            </CLabel>
            <CLabel x={348} y={47} fill="#7e6699" size={9.5} weight={700}>
              SPINAL CORD
            </CLabel>

            {/* Synapse curved leader */}
            <path d="M 484 82 C 446 82, 412 108, 384 136" fill="none" stroke="#c97a0e" strokeWidth="1.65" strokeLinecap="round" />
            <CLabel x={490} y={86} anchor="start" fill="#b36a08" size={11}>
              SYNAPSE GAP
            </CLabel>

            <CLabel x={442} y={208} fill="#b5375d" size={11}>
              MOTOR NEURONE
            </CLabel>

            <CLabel x={578} y={208} fill="#b5443e" size={11}>
              EFFECTOR
            </CLabel>
            <CLabel x={578} y={223} fill="#7a5c5a" size={9.5} weight={700}>
              (MUSCLE / GLAND)
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 15. FORCES FREE-BODY & SUVAT VELOCITY-TIME GRAPH (NEW)
       * ===================================================================*/
      case 'forces-free-body':
        return (
          <svg
            viewBox="0 0 650 244"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Free-body force vector diagram with resultant force and SUVAT velocity-time graph"
          >
            <ArrowMarkerDefs
              prefix={uid}
              colors={{ teal: '#239680', purple: '#7d3ec4', blue: '#1d7ac7', coral: '#d14a70', slate: '#556478' }}
            />

            {/* Vertical divider */}
            <line x1="316" y1="16" x2="316" y2="230" stroke="#d5dde8" strokeWidth="1.6" strokeDasharray="5 5" />

            {/* LEFT: FREE-BODY DIAGRAM */}
            <PillHeader cx={154} cy={22} width={186} text="FREE-BODY FORCES" bg="#e6faf3" stroke="#7bdcc1" color="#1a7d69" />

            {/* Dashed surface */}
            <line x1="46" y1="149" x2="266" y2="149" stroke="#a6b3c4" strokeWidth="1.8" strokeDasharray="5 4" />

            {/* Block */}
            <rect x="120" y="97" width="68" height="50" rx="11" fill="#cfe9fe" stroke="#2282d4" strokeWidth="2.4" />
            <CLabel x={154} y={127} fill="#104e85" size={13}>
              2 kg
            </CLabel>

            {/* Normal Reaction (Up) */}
            <line x1="154" y1="97" x2="154" y2="58" stroke="#239680" strokeWidth="2.8" markerEnd={`url(#${uid}-teal)`} />
            <CLabel x={154} y={50} fill="#1b7f6c" size={9.5}>
              NORMAL (20 N)
            </CLabel>

            {/* Weight (Down) */}
            <line x1="154" y1="147" x2="154" y2="184" stroke="#7d3ec4" strokeWidth="2.8" markerEnd={`url(#${uid}-purple)`} />
            <CLabel x={154} y={199} fill="#682eb0" size={9.5}>
              WEIGHT (20 N)
            </CLabel>

            {/* Thrust (Right, longer) */}
            <line x1="188" y1="122" x2="282" y2="122" stroke="#1d7ac7" strokeWidth="3.2" markerEnd={`url(#${uid}-blue)`} />
            <CLabel x={242} y={111} fill="#1766ad" size={9.5}>
              THRUST (14 N)
            </CLabel>

            {/* Drag (Left, shorter) */}
            <line x1="120" y1="122" x2="66" y2="122" stroke="#d14a70" strokeWidth="2.8" markerEnd={`url(#${uid}-coral)`} />
            <CLabel x={74} y={111} fill="#b5375d" size={9.5}>
              DRAG (6 N)
            </CLabel>

            {/* Resultant Summary */}
            <PillHeader
              cx={154}
              cy={224}
              width={254}
              text="RESULTANT F = 8 N → · a = 4 m/s²"
              bg="#edf6ff"
              stroke="#8ec6f7"
              color="#145c9e"
            />

            {/* RIGHT: SUVAT VELOCITY-TIME GRAPH */}
            <PillHeader cx={486} cy={22} width={196} text="VELOCITY–TIME (SUVAT)" bg="#f2e8fd" stroke="#c398f0" color="#682eb0" />

            {/* Shaded displacement trapezium */}
            <polygon points="376,192 376,144 574,72 574,192" fill="#d5f5eb" opacity="0.78" />

            {/* Dashed guides for u, v, t */}
            <line x1="376" y1="72" x2="574" y2="72" stroke="#99a8ba" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="574" y1="72" x2="574" y2="192" stroke="#99a8ba" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Axes */}
            <line x1="376" y1="192" x2="376" y2="48" stroke="#556478" strokeWidth="2.1" markerEnd={`url(#${uid}-slate)`} />
            <line x1="376" y1="192" x2="614" y2="192" stroke="#556478" strokeWidth="2.1" markerEnd={`url(#${uid}-slate)`} />

            {/* Velocity Slope Line */}
            <line x1="376" y1="144" x2="574" y2="72" stroke="#7d3ec4" strokeWidth="3.3" strokeLinecap="round" />
            <circle cx="376" cy="144" r="4.5" fill="#7d3ec4" />
            <circle cx="574" cy="72" r="4.5" fill="#7d3ec4" />

            {/* Axis Ticks & Labels */}
            <CLabel x={364} y={148} anchor="end" fill="#682eb0" size={12}>
              u
            </CLabel>
            <CLabel x={364} y={76} anchor="end" fill="#682eb0" size={12}>
              v
            </CLabel>
            <CLabel x={574} y={208} fill="#556478" size={11.5}>
              t
            </CLabel>
            <text
              x="342"
              y="122"
              textAnchor="middle"
              transform="rotate(-90 342 122)"
              fontFamily={FONT_LABEL}
              fontSize="10"
              fontWeight="800"
              fill="#556478"
            >
              VELOCITY (m/s)
            </text>
            <CLabel x={494} y={226} fill="#556478" size={9.5}>
              TIME (s)
            </CLabel>

            {/* Slope & Area Callouts */}
            <CLabel x={464} y={62} fill="#682eb0" size={9.8}>
              GRADIENT = a = (v − u) / t
            </CLabel>
            <CLabel x={488} y={150} fill="#187865" size={10}>
              AREA = DISPLACEMENT (s)
            </CLabel>
            <CLabel x={488} y={166} fill="#268572" size={9.5} weight={700}>
              s = ½(u + v)t
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 16. MULTI-STORE MODEL OF MEMORY (NEW — A-Level Psychology)
       * ===================================================================*/
      case 'multi-store-memory':
        return (
          <svg
            viewBox="0 0 660 246"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Atkinson and Shiffrin Multi-Store Model of Memory flowchart showing Sensory Register, Short-Term Memory with rehearsal loop, and Long-Term Memory"
          >
            <ArrowMarkerDefs
              prefix={uid}
              colors={{ blue: '#1d7ac7', teal: '#229680', purple: '#7d3ec4', coral: '#d15674', slate: '#5b687a' }}
            />

            <PillHeader
              cx={330}
              cy={20}
              width={298}
              text="ATKINSON & SHIFFRIN (1968) MULTI-STORE MODEL"
              bg="#f3eafd"
              stroke="#c59ef0"
              color="#682eb0"
            />

            {/* Environmental Stimuli Arrow */}
            <line x1="12" y1="120" x2="54" y2="120" stroke="#5b687a" strokeWidth="2.3" markerEnd={`url(#${uid}-slate)`} />
            <CLabel x={32} y={108} fill="#525e70" size={9}>
              STIMULI
            </CLabel>

            {/* STORE 1: Sensory Register */}
            <rect x="60" y="84" width="136" height="72" rx="14" fill="#fff3d9" stroke="#d98916" strokeWidth="2.4" />
            <CLabel x={128} y={110} fill="#9c5c06" size={11}>
              SENSORY
            </CLabel>
            <CLabel x={128} y={125} fill="#9c5c06" size={11}>
              REGISTER
            </CLabel>
            <CLabel x={128} y={144} fill="#8a6d43" size={9} weight={700}>
              &lt;0.5 s · Modality-specific
            </CLabel>

            {/* Attention Arrow (SR -> STM) */}
            <line x1="198" y1="120" x2="254" y2="120" stroke="#1d7ac7" strokeWidth="2.5" markerEnd={`url(#${uid}-blue)`} />
            <CLabel x={226} y={109} fill="#1766ad" size={9.5}>
              ATTENTION
            </CLabel>

            {/* Maintenance Rehearsal Loop above STM */}
            <path
              d="M 366 84 C 366 50, 304 50, 304 79"
              fill="none"
              stroke="#229680"
              strokeWidth="2.4"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-teal)`}
            />
            <CLabel x={335} y={48} fill="#1a7d69" size={9.5}>
              MAINTENANCE REHEARSAL
            </CLabel>

            {/* STORE 2: Short-Term Memory (STM) */}
            <rect x="260" y="84" width="150" height="72" rx="14" fill="#dff1fe" stroke="#2282d4" strokeWidth="2.4" />
            <CLabel x={335} y={110} fill="#145a99" size={11}>
              SHORT-TERM
            </CLabel>
            <CLabel x={335} y={125} fill="#145a99" size={11}>
              MEMORY (STM)
            </CLabel>
            <CLabel x={335} y={144} fill="#466c8f" size={9} weight={700}>
              7±2 items · 18–30 s · Acoustic
            </CLabel>

            {/* Encoding Arrow (STM -> LTM) */}
            <line x1="412" y1="106" x2="492" y2="106" stroke="#7d3ec4" strokeWidth="2.4" markerEnd={`url(#${uid}-purple)`} />
            <CLabel x={452} y={96} fill="#682eb0" size={9.3}>
              ENCODING
            </CLabel>

            {/* Retrieval Arrow (LTM -> STM) */}
            <line x1="496" y1="136" x2="416" y2="136" stroke="#229680" strokeWidth="2.4" markerEnd={`url(#${uid}-teal)`} />
            <CLabel x={456} y={152} fill="#1a7d69" size={9.3}>
              RETRIEVAL
            </CLabel>

            {/* STORE 3: Long-Term Memory (LTM) */}
            <rect x="498" y="84" width="148" height="72" rx="14" fill="#f0e4fc" stroke="#7d3ec4" strokeWidth="2.4" />
            <CLabel x={572} y={110} fill="#5c289c" size={11}>
              LONG-TERM
            </CLabel>
            <CLabel x={572} y={125} fill="#5c289c" size={11}>
              MEMORY (LTM)
            </CLabel>
            <CLabel x={572} y={144} fill="#6e538f" size={9} weight={700}>
              Unlimited · Lifetime · Semantic
            </CLabel>

            {/* Forgetting Pathways (Dashed coral downward arrows) */}
            <line x1="128" y1="158" x2="128" y2="196" stroke="#d15674" strokeWidth="1.9" strokeDasharray="4 3" markerEnd={`url(#${uid}-coral)`} />
            <CLabel x={128} y={214} fill="#b5375d" size={9.5}>
              DECAY
            </CLabel>

            <line x1="335" y1="158" x2="335" y2="196" stroke="#d15674" strokeWidth="1.9" strokeDasharray="4 3" markerEnd={`url(#${uid}-coral)`} />
            <CLabel x={335} y={214} fill="#b5375d" size={9.5}>
              DISPLACEMENT / DECAY
            </CLabel>

            <line x1="572" y1="158" x2="572" y2="196" stroke="#d15674" strokeWidth="1.9" strokeDasharray="4 3" markerEnd={`url(#${uid}-coral)`} />
            <CLabel x={572} y={214} fill="#b5375d" size={9.5}>
              INTERFERENCE /
            </CLabel>
            <CLabel x={572} y={228} fill="#b5375d" size={9.5}>
              RETRIEVAL FAILURE
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 17. SYNAPTIC TRANSMISSION (NEW — A-Level Biology & Psychology)
       * ===================================================================*/
      case 'synaptic-transmission':
        return (
          <svg
            viewBox="0 0 620 250"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Synaptic transmission diagram showing presynaptic neurone, synaptic vesicles, neurotransmitter diffusion across synaptic cleft, and postsynaptic receptors"
          >
            <ArrowMarkerDefs prefix={uid} colors={{ amber: '#d68816', purple: '#7d3ec4', blue: '#1d7ac7' }} />

            {/* PRESYNAPTIC NEURONE KNOB (Top) */}
            <path
              d="M 264 8 L 264 40 C 216 54, 202 92, 218 118 C 232 134, 286 132, 298 130 C 304 128, 305 114, 312 114 C 319 114, 320 128, 326 130 C 340 132, 392 134, 404 118 C 418 92, 404 54, 356 40 L 356 8"
              fill="#e4f3ff"
              stroke="#2282d4"
              strokeWidth="2.6"
              strokeLinecap="round"
            />

            {/* Action Potential Arrow */}
            <line x1="310" y1="14" x2="310" y2="48" stroke="#d68816" strokeWidth="2.8" markerEnd={`url(#${uid}-amber)`} />

            {/* Ca2+ influx arrow into right side of knob */}
            <path d="M 418 74 L 392 78" stroke="#1d7ac7" strokeWidth="2.2" markerEnd={`url(#${uid}-blue)`} />

            {/* Synaptic Vesicles containing purple neurotransmitters */}
            {[
              { cx: 262, cy: 84, r: 15 },
              { cx: 356, cy: 80, r: 15 },
              { cx: 306, cy: 84, r: 13 },
            ].map((v, i) => (
              <g key={i}>
                <circle cx={v.cx} cy={v.cy} r={v.r} fill="#ffe4ad" stroke="#d48415" strokeWidth="2" />
                <circle cx={v.cx - 4} cy={v.cy - 3} r="2.7" fill="#813cc7" />
                <circle cx={v.cx + 4} cy={v.cy - 2} r="2.7" fill="#813cc7" />
                <circle cx={v.cx} cy={v.cy + 4} r="2.7" fill="#813cc7" />
              </g>
            ))}

            {/* Neurotransmitters diffusing across Synaptic Cleft */}
            {[
              [312, 125], [304, 140], [322, 142], [286, 152], [312, 156], [338, 152],
              [262, 158], [358, 158],
            ].map(([nx, ny], i) => (
              <circle key={`nt-${i}`} cx={nx} cy={ny} r="3.4" fill="#843cc9" stroke="#5b2294" strokeWidth="1" />
            ))}
            {/* Subtle diffusion direction arrow */}
            <line
              x1="234"
              y1="140"
              x2="234"
              y2="164"
              stroke="#7d3ec4"
              strokeWidth="1.8"
              strokeDasharray="3 2.5"
              markerEnd={`url(#${uid}-purple)`}
            />

            {/* POSTSYNAPTIC NEURONE (Bottom) */}
            <path
              d="M 188 242 C 196 196, 238 178, 310 178 C 382 178, 424 196, 432 242"
              fill="#e2faf2"
              stroke="#269980"
              strokeWidth="2.6"
              strokeLinecap="round"
            />

            {/* Complementary Postsynaptic Receptor Sites (4 coral U-cups) */}
            {[
              { x: 246, y: 186, rot: -14, bound: false },
              { x: 288, y: 179, rot: -4, bound: true },
              { x: 332, y: 179, rot: 4, bound: true },
              { x: 374, y: 186, rot: 14, bound: false },
            ].map((rec, i) => (
              <g key={i} transform={`translate(${rec.x} ${rec.y}) rotate(${rec.rot})`}>
                <path
                  d="M -9 -10 L -9 4 C -9 10, 9 10, 9 4 L 9 -10 L 4 -10 L 4 0 C 4 4, -4 4, -4 0 L -4 -10 Z"
                  fill="#fab8cb"
                  stroke="#cf486d"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                {rec.bound && <circle cx="0" cy="-4" r="3.6" fill="#843cc9" stroke="#5b2294" strokeWidth="1" />}
              </g>
            ))}

            {/* LEFT CURVED LEADER LABELS */}
            <path d="M 176 34 C 216 34, 256 34, 298 34" fill="none" stroke="#c97b0c" strokeWidth="1.55" strokeLinecap="round" />
            <CLabel x={170} y={38} anchor="end" fill="#b36a08" size={10.5}>
              ACTION POTENTIAL
            </CLabel>

            <path d="M 176 84 C 204 84, 224 84, 244 84" fill="none" stroke="#c97b0c" strokeWidth="1.55" strokeLinecap="round" />
            <CLabel x={170} y={88} anchor="end" fill="#b36a08" size={10.5}>
              SYNAPTIC VESICLE
            </CLabel>

            <path d="M 176 132 C 194 132, 206 126, 218 122" fill="none" stroke="#1d7ac7" strokeWidth="1.55" strokeLinecap="round" />
            <CLabel x={170} y={131} anchor="end" fill="#1766ad" size={10}>
              PRESYNAPTIC
            </CLabel>
            <CLabel x={170} y={144} anchor="end" fill="#1766ad" size={10}>
              MEMBRANE
            </CLabel>

            <path d="M 176 196 C 204 196, 220 192, 236 188" fill="none" stroke="#cf486d" strokeWidth="1.55" strokeLinecap="round" />
            <CLabel x={170} y={200} anchor="end" fill="#b5375d" size={10.5}>
              RECEPTOR SITE
            </CLabel>

            {/* RIGHT CURVED LEADER LABELS */}
            <CLabel x={426} y={77} anchor="start" fill="#1766ad" size={10.5}>
              Ca²⁺ INFLUX
            </CLabel>

            <path d="M 442 124 C 406 124, 376 134, 344 148" fill="none" stroke="#7d3ec4" strokeWidth="1.55" strokeLinecap="round" />
            <CLabel x={448} y={128} anchor="start" fill="#682eb0" size={10.5}>
              NEUROTRANSMITTERS
            </CLabel>

            <path d="M 442 162 C 414 162, 396 160, 376 160" fill="none" stroke="#556478" strokeWidth="1.55" strokeLinecap="round" />
            <CLabel x={448} y={166} anchor="start" fill="#4f5b6b" size={10.5}>
              SYNAPTIC CLEFT
            </CLabel>

            <path d="M 442 208 C 424 208, 412 206, 400 204" fill="none" stroke="#228e79" strokeWidth="1.55" strokeLinecap="round" />
            <CLabel x={448} y={206} anchor="start" fill="#1b7f6c" size={10}>
              POSTSYNAPTIC
            </CLabel>
            <CLabel x={448} y={219} anchor="start" fill="#1b7f6c" size={10}>
              NEURONE
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 18. PHOTOSYNTHESIS CHLOROPLAST (NEW — Light-Dependent & Calvin Cycle)
       * ===================================================================*/
      case 'photosynthesis-chloroplast':
        return (
          <svg
            viewBox="0 0 650 248"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Chloroplast photosynthesis diagram showing light-dependent reaction in thylakoid grana and Calvin cycle in the stroma"
          >
            <ArrowMarkerDefs
              prefix={uid}
              colors={{ amber: '#d68816', blue: '#1d7ac7', teal: '#229680', purple: '#7d3ec4', coral: '#cf486d', slate: '#5b687a' }}
            />

            {/* Chloroplast Double Membrane Envelope */}
            <ellipse cx="325" cy="128" rx="258" ry="86" fill="#d0f4da" stroke="#2a944a" strokeWidth="2.8" />
            <ellipse cx="325" cy="128" rx="248" ry="76" fill="#f1fcf4" stroke="#53bd72" strokeWidth="1.8" />

            {/* Double Membrane label at top center */}
            <path d="M 325 26 L 325 41" fill="none" stroke="#238742" strokeWidth="1.6" strokeLinecap="round" />
            <CLabel x={325} y={19} fill="#1f7a3b" size={10}>
              DOUBLE MEMBRANE
            </CLabel>

            {/* LEFT: Thylakoid Grana (Light-Dependent Reaction) */}
            {/* Connecting Lamellae */}
            <line x1="176" y1="112" x2="212" y2="112" stroke="#228540" strokeWidth="3.2" />
            <line x1="176" y1="138" x2="212" y2="138" stroke="#228540" strokeWidth="3.2" />

            {/* Granum Stack 1 */}
            {[94, 110, 126, 142, 158].map((y, i) => (
              <rect
                key={`g1-${i}`}
                x="128"
                y={y}
                width="52"
                height="13"
                rx="6.5"
                fill="#8be3a4"
                stroke="#228540"
                strokeWidth="1.9"
              />
            ))}
            {/* Granum Stack 2 */}
            {[102, 118, 134, 150].map((y, i) => (
              <rect
                key={`g2-${i}`}
                x="208"
                y={y}
                width="50"
                height="13"
                rx="6.5"
                fill="#8be3a4"
                stroke="#228540"
                strokeWidth="1.9"
              />
            ))}

            {/* Wavy Golden Light Arrows striking Thylakoids */}
            <path
              d="M 80 34 Q 90 48, 86 58 T 106 78 L 122 92"
              fill="none"
              stroke="#e09012"
              strokeWidth="2.5"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-amber)`}
            />
            <CLabel x={62} y={32} fill="#b87008" size={10.5}>
              LIGHT
            </CLabel>

            {/* H2O In -> O2 Out */}
            <path
              d="M 70 186 C 96 184, 114 176, 128 164"
              fill="none"
              stroke="#1d7ac7"
              strokeWidth="2.3"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-blue)`}
            />
            <PillHeader cx={46} cy={188} width={44} text="H₂O" bg="#e4f3ff" stroke="#7bc0f7" color="#1766ad" />

            <path
              d="M 164 90 C 172 68, 182 52, 194 40"
              fill="none"
              stroke="#229680"
              strokeWidth="2.3"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-teal)`}
            />
            <PillHeader cx={206} cy={28} width={42} text="O₂" bg="#e6faf3" stroke="#7bdcc1" color="#1a7d69" />

            {/* CENTER SHUTTLE ARROWS: ATP + Reduced NADP <-> ADP + Pi + NADP */}
            <path
              d="M 272 106 C 314 96, 356 96, 404 106"
              fill="none"
              stroke="#7d3ec4"
              strokeWidth="2.4"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-purple)`}
            />
            <CLabel x={338} y={88} fill="#682eb0" size={9.5}>
              ATP + REDUCED NADP
            </CLabel>

            <path
              d="M 406 154 C 358 164, 316 164, 272 154"
              fill="none"
              stroke="#5b687a"
              strokeWidth="2.2"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-slate)`}
            />
            <CLabel x={338} y={176} fill="#525e70" size={9}>
              ADP + Pi + NADP
            </CLabel>

            {/* RIGHT: Stroma & Calvin Cycle */}
            <g transform="translate(470 128)">
              <circle cx="0" cy="0" r="46" fill="#f3eafd" opacity="0.8" />
              {/* Circular Cycle Arrows */}
              <path
                d="M -28 -26 A 38 38 0 0 1 28 -26"
                fill="none"
                stroke="#7d3ec4"
                strokeWidth="2.6"
                strokeLinecap="round"
                markerEnd={`url(#${uid}-purple)`}
              />
              <path
                d="M 34 -12 A 38 38 0 0 1 12 36"
                fill="none"
                stroke="#7d3ec4"
                strokeWidth="2.6"
                strokeLinecap="round"
                markerEnd={`url(#${uid}-purple)`}
              />
              <path
                d="M -6 37 A 38 38 0 0 1 -34 -14"
                fill="none"
                stroke="#7d3ec4"
                strokeWidth="2.6"
                strokeLinecap="round"
                markerEnd={`url(#${uid}-purple)`}
              />
              <CLabel x={0} y={-4} fill="#5c289c" size={10.5}>
                CALVIN
              </CLabel>
              <CLabel x={0} y={11} fill="#5c289c" size={10.5}>
                CYCLE
              </CLabel>
            </g>

            {/* CO2 In -> Glucose Out */}
            <path
              d="M 564 42 C 542 54, 520 70, 502 88"
              fill="none"
              stroke="#cf486d"
              strokeWidth="2.3"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-coral)`}
            />
            <PillHeader cx={586} cy={32} width={46} text="CO₂" bg="#fdebf0" stroke="#f0a8bc" color="#b5375d" />

            <path
              d="M 504 166 C 524 182, 544 192, 566 198"
              fill="none"
              stroke="#d68816"
              strokeWidth="2.3"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-amber)`}
            />
            <PillHeader cx={596} cy={204} width={76} text="GLUCOSE" bg="#fff2d9" stroke="#f2ba5a" color="#a86408" />

            {/* Bottom Region Captions */}
            <CLabel x={196} y={234} fill="#1f7a3b" size={10}>
              THYLAKOIDS (LIGHT-DEPENDENT)
            </CLabel>
            <CLabel x={468} y={234} fill="#682eb0" size={10}>
              STROMA (LIGHT-INDEPENDENT)
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 19. QUADRATIC GRAPH (Parabola, vertex, roots, y-intercept, symmetry)
       * ===================================================================*/
      case 'quadratic-graph':
        return (
          <svg
            viewBox="0 0 640 246"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Quadratic graph showing a parabola, turning point vertex, x-intercept roots, y-intercept, and dashed axis of symmetry"
          >
            <ArrowMarkerDefs
              prefix={uid}
              colors={{
                slate: '#556478',
                purple: '#7d3ec4',
                coral: '#d95378',
                teal: '#229680',
              }}
            />

            {/* Subtle coordinate grid */}
            <g stroke="#e6edf5" strokeWidth="1">
              {[100, 140, 180, 220, 260, 300, 340].map((gx) => (
                <line key={`qx-${gx}`} x1={gx} y1={34} x2={gx} y2={220} />
              ))}
              {[68, 100, 132, 164, 196].map((gy) => (
                <line key={`qy-${gy}`} x1={74} y1={gy} x2={382} y2={gy} />
              ))}
            </g>

            {/* Coordinate axes */}
            <line
              x1="68"
              y1="164"
              x2="388"
              y2="164"
              stroke="#556478"
              strokeWidth="2.3"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-slate)`}
            />
            <line
              x1="140"
              y1="224"
              x2="140"
              y2="28"
              stroke="#556478"
              strokeWidth="2.3"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-slate)`}
            />
            <CLabel x={398} y={168} fill="#4f5b6b" size={12}>
              x
            </CLabel>
            <CLabel x={140} y={19} fill="#4f5b6b" size={12}>
              y
            </CLabel>

            {/* Dashed Axis of Symmetry */}
            <line
              x1="240"
              y1="42"
              x2="240"
              y2="224"
              stroke="#9a6ce0"
              strokeWidth="1.8"
              strokeDasharray="5 4"
            />
            <CLabel x={240} y={34} fill="#682eb0" size={9.5}>
              AXIS OF SYMMETRY
            </CLabel>

            {/* Exact Parabola passing through (140,100), (180,164), (240,200), (300,164) */}
            <path
              d="M 120 56 Q 240 344 360 56"
              fill="none"
              stroke="#2282d4"
              strokeWidth="3.2"
              strokeLinecap="round"
            />

            {/* Key Feature Points */}
            <circle cx="140" cy="100" r="5.5" fill="#229680" stroke="#ffffff" strokeWidth="2" />
            <CLabel x={128} y={96} anchor="end" fill="#1a7d69" size={9.5}>
              y-INTERCEPT
            </CLabel>
            <CLabel x={128} y={108} anchor="end" fill="#1a7d69" size={8.5} weight={700}>
              (0, c)
            </CLabel>

            <circle cx="180" cy="164" r="5.5" fill="#d95378" stroke="#ffffff" strokeWidth="2" />
            <circle cx="300" cy="164" r="5.5" fill="#d95378" stroke="#ffffff" strokeWidth="2" />
            <CLabel x={180} y={150} fill="#b5375d" size={9.5}>
              ROOT
            </CLabel>
            <CLabel x={300} y={150} fill="#b5375d" size={9.5}>
              ROOT
            </CLabel>

            <circle cx="240" cy="200" r="6" fill="#7d3ec4" stroke="#ffffff" strokeWidth="2" />
            <CLabel x={240} y={238} fill="#5c289c" size={9.5}>
              VERTEX (TURNING POINT)
            </CLabel>

            {/* Right-side summary panel */}
            <rect
              x="420"
              y="26"
              width="200"
              height="194"
              rx="14"
              fill="#f8fbff"
              stroke="#c4ddf7"
              strokeWidth="1.8"
            />
            <PillHeader
              cx={520}
              cy={50}
              width={162}
              text="y = ax² + bx + c"
              bg="#e4f3ff"
              stroke="#7bc0f7"
              color="#145a99"
            />

            <rect x="436" y="76" width="168" height="36" rx="10" fill="#fdebf0" stroke="#f0a8bc" strokeWidth="1.4" />
            <CLabel x={520} y={92} fill="#b5375d" size={9.5}>
              ROOTS (x-INTERCEPTS)
            </CLabel>
            <CLabel x={520} y={105} fill="#5b687a" size={8.5} weight={700}>
              Solve ax² + bx + c = 0
            </CLabel>

            <rect x="436" y="122" width="168" height="36" rx="10" fill="#effcf8" stroke="#7bdcc1" strokeWidth="1.4" />
            <CLabel x={520} y={138} fill="#1a7d69" size={9.5}>
              y-INTERCEPT
            </CLabel>
            <CLabel x={520} y={151} fill="#5b687a" size={8.5} weight={700}>
              Set x = 0 → y = c
            </CLabel>

            <rect x="436" y="168" width="168" height="36" rx="10" fill="#f3eafd" stroke="#c59ef0" strokeWidth="1.4" />
            <CLabel x={520} y={184} fill="#5c289c" size={9.5}>
              TURNING POINT
            </CLabel>
            <CLabel x={520} y={197} fill="#5b687a" size={8.5} weight={700}>
              a(x + p)² + q → (−p, q)
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 20. RIGHT-ANGLED TRIANGLE TRIGONOMETRY (SOHCAHTOA & Pythagoras)
       * ===================================================================*/
      case 'right-triangle-trig':
        return (
          <svg
            viewBox="0 0 640 246"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Right-angled triangle showing Opposite, Adjacent, and Hypotenuse sides relative to angle theta, with SOHCAHTOA and Pythagoras formulas"
          >
            {/* Triangle Fill */}
            <polygon points="74,200 300,200 300,52" fill="#f8fbff" stroke="none" />

            {/* Right-angle marker */}
            <path
              d="M 280 200 L 280 180 L 300 180"
              fill="#e4f3ff"
              stroke="#556478"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Angle theta arc */}
            <path
              d="M 118 200 A 44 44 0 0 0 110 176"
              fill="none"
              stroke="#7d3ec4"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <CLabel x={132} y={188} fill="#5c289c" size={14}>
              θ
            </CLabel>

            {/* Colour-coded sides */}
            <line
              x1="74"
              y1="200"
              x2="300"
              y2="52"
              stroke="#d95378"
              strokeWidth="3.4"
              strokeLinecap="round"
            />
            <line
              x1="300"
              y1="52"
              x2="300"
              y2="200"
              stroke="#229680"
              strokeWidth="3.4"
              strokeLinecap="round"
            />
            <line
              x1="74"
              y1="200"
              x2="300"
              y2="200"
              stroke="#2282d4"
              strokeWidth="3.4"
              strokeLinecap="round"
            />

            {/* Vertex Dots */}
            <circle cx="74" cy="200" r="4.5" fill="#556478" />
            <circle cx="300" cy="200" r="4.5" fill="#556478" />
            <circle cx="300" cy="52" r="4.5" fill="#556478" />

            {/* Side Labels */}
            <g transform="translate(172 110) rotate(-33)">
              <CLabel x={0} y={0} fill="#b5375d" size={11}>
                HYPOTENUSE (H)
              </CLabel>
            </g>
            <CLabel x={312} y={122} anchor="start" fill="#1a7d69" size={10.5}>
              OPPOSITE
            </CLabel>
            <CLabel x={312} y={136} anchor="start" fill="#1a7d69" size={9.5} weight={700}>
              (O)
            </CLabel>
            <CLabel x={187} y={224} fill="#145a99" size={11}>
              ADJACENT (A)
            </CLabel>

            {/* Right-hand Formula Panel */}
            <rect
              x="404"
              y="22"
              width="216"
              height="204"
              rx="14"
              fill="#fafbfd"
              stroke="#d5dfec"
              strokeWidth="1.8"
            />
            <PillHeader
              cx={512}
              cy={44}
              width={162}
              text="SOH · CAH · TOA"
              bg="#f3eafd"
              stroke="#c59ef0"
              color="#5c289c"
            />

            <rect x="422" y="68" width="180" height="32" rx="10" fill="#effcf8" stroke="#7bdcc1" strokeWidth="1.5" />
            <CLabel x={512} y={88} fill="#1a7d69" size={11.5}>
              sin θ = O ÷ H
            </CLabel>

            <rect x="422" y="108" width="180" height="32" rx="10" fill="#e4f3ff" stroke="#7bc0f7" strokeWidth="1.5" />
            <CLabel x={512} y={128} fill="#145a99" size={11.5}>
              cos θ = A ÷ H
            </CLabel>

            <rect x="422" y="148" width="180" height="32" rx="10" fill="#fdebf0" stroke="#f0a8bc" strokeWidth="1.5" />
            <CLabel x={512} y={168} fill="#b5375d" size={11.5}>
              tan θ = O ÷ A
            </CLabel>

            <rect x="422" y="188" width="180" height="28" rx="10" fill="#fff3d9" stroke="#f2ba5a" strokeWidth="1.5" />
            <CLabel x={512} y={206} fill="#9c5c06" size={10.5}>
              PYTHAGORAS: a² + b² = c²
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 21. SUPPLY & DEMAND EQUILIBRIUM (Curves, P*, Q*, outward shift)
       * ===================================================================*/
      case 'supply-demand-equilibrium':
        return (
          <svg
            viewBox="0 0 640 246"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Supply and demand diagram showing equilibrium price and quantity and a rightward shift in demand to a new equilibrium"
          >
            <ArrowMarkerDefs
              prefix={uid}
              colors={{
                slate: '#556478',
                purple: '#7d3ec4',
                teal: '#229680',
                blue: '#2282d4',
              }}
            />

            {/* Axes */}
            <line
              x1="94"
              y1="208"
              x2="94"
              y2="28"
              stroke="#556478"
              strokeWidth="2.4"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-slate)`}
            />
            <line
              x1="94"
              y1="208"
              x2="394"
              y2="208"
              stroke="#556478"
              strokeWidth="2.4"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-slate)`}
            />
            <CLabel x={82} y={24} anchor="end" fill="#4f5b6b" size={10.5}>
              PRICE (P)
            </CLabel>
            <CLabel x={392} y={230} anchor="end" fill="#4f5b6b" size={10.5}>
              QUANTITY (Q)
            </CLabel>

            {/* Dashed Projections for E1 (226, 126) and E2 (251, 111) */}
            <line x1="94" y1="126" x2="226" y2="126" stroke="#a6b3c4" strokeWidth="1.6" strokeDasharray="4 4" />
            <line x1="226" y1="126" x2="226" y2="208" stroke="#a6b3c4" strokeWidth="1.6" strokeDasharray="4 4" />
            <line x1="94" y1="111" x2="251" y2="111" stroke="#b694e8" strokeWidth="1.6" strokeDasharray="4 4" />
            <line x1="251" y1="111" x2="251" y2="208" stroke="#b694e8" strokeWidth="1.6" strokeDasharray="4 4" />

            <CLabel x={84} y={130} anchor="end" fill="#145a99" size={10}>
              P*
            </CLabel>
            <CLabel x={84} y={114} anchor="end" fill="#682eb0" size={10}>
              P₂
            </CLabel>
            <CLabel x={226} y={224} fill="#145a99" size={10}>
              Q*
            </CLabel>
            <CLabel x={253} y={224} fill="#682eb0" size={10}>
              Q₂
            </CLabel>

            {/* Supply Curve S */}
            <line
              x1="126"
              y1="186"
              x2="346"
              y2="54"
              stroke="#229680"
              strokeWidth="3.1"
              strokeLinecap="round"
            />
            <CLabel x={356} y={56} anchor="start" fill="#1a7d69" size={11.5}>
              S
            </CLabel>

            {/* Demand Curve D1 */}
            <line
              x1="126"
              y1="66"
              x2="326"
              y2="186"
              stroke="#2282d4"
              strokeWidth="3.1"
              strokeLinecap="round"
            />
            <CLabel x={328} y={199} fill="#145a99" size={11}>
              D₁
            </CLabel>

            {/* Shifted Demand Curve D2 */}
            <line
              x1="176"
              y1="66"
              x2="376"
              y2="186"
              stroke="#7d3ec4"
              strokeWidth="3.1"
              strokeLinecap="round"
              strokeDasharray="7 4"
            />
            <CLabel x={380} y={199} fill="#5c289c" size={11}>
              D₂
            </CLabel>

            {/* Outward Shift Arrow */}
            <line
              x1="288"
              y1="158"
              x2="326"
              y2="158"
              stroke="#7d3ec4"
              strokeWidth="2.3"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-purple)`}
            />

            {/* Equilibrium Dots */}
            <circle cx="226" cy="126" r="5.5" fill="#2282d4" stroke="#ffffff" strokeWidth="2" />
            <CLabel x={215} y={120} anchor="end" fill="#145a99" size={9.5}>
              E₁
            </CLabel>

            <circle cx="251" cy="111" r="6" fill="#7d3ec4" stroke="#ffffff" strokeWidth="2" />
            <CLabel x={262} y={106} anchor="start" fill="#5c289c" size={9.5}>
              E₂
            </CLabel>

            {/* Right-hand explanation panel */}
            <rect
              x="418"
              y="26"
              width="202"
              height="194"
              rx="14"
              fill="#f8fbff"
              stroke="#c4ddf7"
              strokeWidth="1.8"
            />
            <PillHeader
              cx={519}
              cy={50}
              width={168}
              text="MARKET EQUILIBRIUM"
              bg="#effcf8"
              stroke="#7bdcc1"
              color="#1a7d69"
            />

            <rect x="434" y="76" width="170" height="40" rx="10" fill="#e4f3ff" stroke="#7bc0f7" strokeWidth="1.4" />
            <CLabel x={519} y={92} fill="#145a99" size={9.5}>
              E₁ (P*, Q*)
            </CLabel>
            <CLabel x={519} y={106} fill="#5b687a" size={8.5} weight={700}>
              Quantity demanded = supplied
            </CLabel>

            <rect x="434" y="126" width="170" height="40" rx="10" fill="#f3eafd" stroke="#c59ef0" strokeWidth="1.4" />
            <CLabel x={519} y={142} fill="#5c289c" size={9.5}>
              SHIFT D₁ → D₂
            </CLabel>
            <CLabel x={519} y={156} fill="#5b687a" size={8.5} weight={700}>
              Higher demand raises P & Q
            </CLabel>

            <rect x="434" y="176" width="170" height="30" rx="10" fill="#fff3d9" stroke="#f2ba5a" strokeWidth="1.4" />
            <CLabel x={519} y={195} fill="#9c5c06" size={9}>
              EXTENSION ALONG S TO E₂
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 22. PRODUCTION POSSIBILITY CURVE (PPC / PPF)
       * ===================================================================*/
      case 'production-possibility-curve':
        return (
          <svg
            viewBox="0 0 640 246"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Production possibility curve showing efficient point on the curve, inefficient point inside, unattainable point outside, and an outward growth shift"
          >
            <ArrowMarkerDefs
              prefix={uid}
              colors={{
                slate: '#556478',
                purple: '#7d3ec4',
              }}
            />

            {/* Soft area under PPC1 */}
            <path d="M 96 68 Q 272 72 296 208 L 96 208 Z" fill="#effcf8" opacity="0.85" />

            {/* Axes */}
            <line
              x1="96"
              y1="208"
              x2="96"
              y2="24"
              stroke="#556478"
              strokeWidth="2.4"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-slate)`}
            />
            <line
              x1="96"
              y1="208"
              x2="394"
              y2="208"
              stroke="#556478"
              strokeWidth="2.4"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-slate)`}
            />
            <CLabel x={88} y={20} anchor="end" fill="#4f5b6b" size={9.5}>
              CAPITAL
            </CLabel>
            <CLabel x={88} y={32} anchor="end" fill="#4f5b6b" size={9.5}>
              GOODS
            </CLabel>
            <CLabel x={392} y={230} anchor="end" fill="#4f5b6b" size={10}>
              CONSUMER GOODS
            </CLabel>

            {/* PPC1 Curve */}
            <path
              d="M 96 68 Q 272 72 296 208"
              fill="none"
              stroke="#229680"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <CLabel x={286} y={196} anchor="end" fill="#1a7d69" size={10}>
              PPC₁
            </CLabel>

            {/* Outward Shift PPC2 Curve */}
            <path
              d="M 96 42 Q 332 46 356 208"
              fill="none"
              stroke="#7d3ec4"
              strokeWidth="2.6"
              strokeDasharray="6 4"
              strokeLinecap="round"
            />
            <CLabel x={368} y={196} fill="#5c289c" size={10}>
              PPC₂
            </CLabel>

            {/* Growth Arrow */}
            <line
              x1="246"
              y1="118"
              x2="282"
              y2="92"
              stroke="#7d3ec4"
              strokeWidth="2.2"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-purple)`}
            />

            {/* Key Points: A (Efficient), B (Inefficient), C (Unattainable) */}
            <circle cx="224" cy="99" r="5.5" fill="#229680" stroke="#ffffff" strokeWidth="2" />
            <CLabel x={212} y={94} anchor="end" fill="#1a7d69" size={10.5}>
              A
            </CLabel>

            <circle cx="166" cy="158" r="5.5" fill="#d98916" stroke="#ffffff" strokeWidth="2" />
            <CLabel x={178} y={162} anchor="start" fill="#9c5c06" size={10.5}>
              B
            </CLabel>

            <circle cx="322" cy="78" r="5.5" fill="#d95378" stroke="#ffffff" strokeWidth="2" />
            <CLabel x={334} y={82} anchor="start" fill="#b5375d" size={10.5}>
              C
            </CLabel>

            {/* Right-hand Key Panel */}
            <rect
              x="418"
              y="22"
              width="202"
              height="204"
              rx="14"
              fill="#fafbfd"
              stroke="#d5dfec"
              strokeWidth="1.8"
            />
            <PillHeader
              cx={519}
              cy={44}
              width={168}
              text="PPC FRONTIER KEY"
              bg="#effcf8"
              stroke="#7bdcc1"
              color="#1a7d69"
            />

            <rect x="434" y="66" width="170" height="32" rx="9" fill="#effcf8" stroke="#7bdcc1" strokeWidth="1.4" />
            <CLabel x={519} y={80} fill="#1a7d69" size={9.5}>
              A — EFFICIENT
            </CLabel>
            <CLabel x={519} y={92} fill="#5b687a" size={8.2} weight={700}>
              All resources fully employed
            </CLabel>

            <rect x="434" y="106" width="170" height="32" rx="9" fill="#fff3d9" stroke="#f2ba5a" strokeWidth="1.4" />
            <CLabel x={519} y={120} fill="#9c5c06" size={9.5}>
              B — INEFFICIENT
            </CLabel>
            <CLabel x={519} y={132} fill="#5b687a" size={8.2} weight={700}>
              Spare capacity / unemployment
            </CLabel>

            <rect x="434" y="146" width="170" height="32" rx="9" fill="#fdebf0" stroke="#f0a8bc" strokeWidth="1.4" />
            <CLabel x={519} y={160} fill="#b5375d" size={9.5}>
              C — UNATTAINABLE
            </CLabel>
            <CLabel x={519} y={172} fill="#5b687a" size={8.2} weight={700}>
              Beyond current PPC₁ limit
            </CLabel>

            <rect x="434" y="186" width="170" height="28" rx="9" fill="#f3eafd" stroke="#c59ef0" strokeWidth="1.4" />
            <CLabel x={519} y={204} fill="#5c289c" size={8.8}>
              PPC₁ → PPC₂: ECONOMIC GROWTH
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 23. VON NEUMANN CPU & FDE ARCHITECTURE (CU, ALU, Registers, RAM, Buses)
       * ===================================================================*/
      case 'cpu-fde-architecture':
        return (
          <svg
            viewBox="0 0 660 248"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Von Neumann CPU architecture showing Control Unit, ALU, registers PC, MAR, MDR, ACC, Main Memory RAM, and Address, Data, and Control buses"
          >
            <ArrowMarkerDefs
              prefix={uid}
              colors={{
                blue: '#2282d4',
                teal: '#229680',
                coral: '#d95378',
                purple: '#7d3ec4',
              }}
            />

            {/* CPU Outer Box */}
            <rect
              x="20"
              y="22"
              width="374"
              height="208"
              rx="14"
              fill="#f8fbff"
              stroke="#7bc0f7"
              strokeWidth="2.2"
            />
            <PillHeader
              cx={207}
              cy={22}
              width={196}
              text="CPU (VON NEUMANN)"
              bg="#e4f3ff"
              stroke="#2282d4"
              color="#145a99"
            />

            {/* Control Unit */}
            <rect x="38" y="48" width="154" height="68" rx="12" fill="#f3eafd" stroke="#9b66db" strokeWidth="1.8" />
            <CLabel x={115} y={76} fill="#5c289c" size={11.5}>
              CONTROL UNIT
            </CLabel>
            <CLabel x={115} y={93} fill="#682eb0" size={9} weight={700}>
              Fetches & decodes
            </CLabel>
            <CLabel x={115} y={105} fill="#682eb0" size={9} weight={700}>
              instructions (CU)
            </CLabel>

            {/* ALU */}
            <rect x="38" y="136" width="154" height="74" rx="12" fill="#effcf8" stroke="#2da892" strokeWidth="1.8" />
            <CLabel x={115} y={165} fill="#1a7d69" size={11.5}>
              ALU
            </CLabel>
            <CLabel x={115} y={182} fill="#1f7f6b" size={9} weight={700}>
              Arithmetic & logic
            </CLabel>
            <CLabel x={115} y={195} fill="#1f7f6b" size={9} weight={700}>
              operations
            </CLabel>

            {/* Registers Column */}
            <rect x="212" y="48" width="164" height="162" rx="12" fill="#ffffff" stroke="#a4d5fa" strokeWidth="1.6" />
            <CLabel x={294} y={66} fill="#145a99" size={10}>
              CPU REGISTERS
            </CLabel>

            <rect x="224" y="76" width="140" height="26" rx="8" fill="#e4f3ff" stroke="#7bc0f7" strokeWidth="1.3" />
            <CLabel x={294} y={93} fill="#145a99" size={9.5}>
              PC — Next address
            </CLabel>

            <rect x="224" y="108" width="140" height="26" rx="8" fill="#e4f3ff" stroke="#7bc0f7" strokeWidth="1.3" />
            <CLabel x={294} y={125} fill="#145a99" size={9.5}>
              MAR — Memory addr
            </CLabel>

            <rect x="224" y="140" width="140" height="26" rx="8" fill="#effcf8" stroke="#7bdcc1" strokeWidth="1.3" />
            <CLabel x={294} y={157} fill="#1a7d69" size={9.5}>
              MDR — Data / instr
            </CLabel>

            <rect x="224" y="172" width="140" height="26" rx="8" fill="#fff3d9" stroke="#f2ba5a" strokeWidth="1.3" />
            <CLabel x={294} y={189} fill="#9c5c06" size={9.5}>
              ACC — ALU result
            </CLabel>

            {/* System Buses between CPU (x=394) and RAM (x=518) */}
            <line
              x1="398"
              y1="78"
              x2="512"
              y2="78"
              stroke="#2282d4"
              strokeWidth="2.8"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-blue)`}
            />
            <CLabel x={456} y={68} fill="#145a99" size={9}>
              ADDRESS BUS
            </CLabel>

            <line
              x1="402"
              y1="128"
              x2="512"
              y2="128"
              stroke="#229680"
              strokeWidth="2.8"
              strokeLinecap="round"
              markerStart={`url(#${uid}-teal)`}
              markerEnd={`url(#${uid}-teal)`}
            />
            <CLabel x={456} y={118} fill="#1a7d69" size={9}>
              DATA BUS
            </CLabel>

            <line
              x1="402"
              y1="178"
              x2="512"
              y2="178"
              stroke="#d95378"
              strokeWidth="2.8"
              strokeLinecap="round"
              markerStart={`url(#${uid}-coral)`}
              markerEnd={`url(#${uid}-coral)`}
            />
            <CLabel x={456} y={168} fill="#b5375d" size={9}>
              CONTROL BUS
            </CLabel>

            {/* Main Memory (RAM) Box */}
            <rect
              x="518"
              y="38"
              width="122"
              height="176"
              rx="14"
              fill="#fff8eb"
              stroke="#f2ba5a"
              strokeWidth="2.2"
            />
            <PillHeader
              cx={579}
              cy={38}
              width={102}
              text="MAIN RAM"
              bg="#fff3d9"
              stroke="#d98916"
              color="#9c5c06"
            />
            {[
              { y: 66, label: '0001  LOAD 5' },
              { y: 98, label: '0002  ADD 6' },
              { y: 130, label: '0003  STORE 7' },
              { y: 162, label: '0005  DATA: 12' },
            ].map((slot) => (
              <g key={slot.label}>
                <rect
                  x="530"
                  y={slot.y}
                  width="98"
                  height="24"
                  rx="6"
                  fill="#ffffff"
                  stroke="#f2cf8d"
                  strokeWidth="1.2"
                />
                <CLabel x={579} y={slot.y + 15.5} fill="#7d4a07" size={8.4} weight={700}>
                  {slot.label}
                </CLabel>
              </g>
            ))}
            <CLabel x={579} y={204} fill="#9c5c06" size={8.2} weight={700}>
              STORES DATA & PROG
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 24. LOGIC GATES & TRUTH TABLES (AND, OR, NOT)
       * ===================================================================*/
      case 'logic-gates-truth':
        return (
          <svg
            viewBox="0 0 660 248"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Standard AND, OR, and NOT logic gate symbols with inputs A and B, output Q, and corresponding truth tables"
          >
            {/* PANEL 1: AND GATE */}
            <rect x="16" y="14" width="198" height="222" rx="14" fill="#effcf8" stroke="#7bdcc1" strokeWidth="1.8" />
            <PillHeader cx={115} cy={34} width={128} text="AND (A · B)" bg="#d9f7ee" stroke="#229680" color="#1a7d69" />

            {/* AND Gate Symbol */}
            <line x1="56" y1="68" x2="88" y2="68" stroke="#556478" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="56" y1="94" x2="88" y2="94" stroke="#556478" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="138" y1="81" x2="170" y2="81" stroke="#556478" strokeWidth="2.2" strokeLinecap="round" />
            <path
              d="M 88 58 L 116 58 A 23 23 0 0 1 116 104 L 88 104 Z"
              fill="#ffffff"
              stroke="#229680"
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            <CLabel x={46} y={72} fill="#4f5b6b" size={10}>
              A
            </CLabel>
            <CLabel x={46} y={98} fill="#4f5b6b" size={10}>
              B
            </CLabel>
            <CLabel x={180} y={85} fill="#1a7d69" size={10.5}>
              Q
            </CLabel>

            {/* AND Truth Table */}
            <rect x="44" y="120" width="142" height="102" rx="9" fill="#ffffff" stroke="#bcebd9" strokeWidth="1.4" />
            <rect x="44" y="120" width="142" height="22" rx="9" fill="#d9f7ee" />
            <CLabel x={70} y={135} fill="#1a7d69" size={9.5}>
              A
            </CLabel>
            <CLabel x={115} y={135} fill="#1a7d69" size={9.5}>
              B
            </CLabel>
            <CLabel x={160} y={135} fill="#1a7d69" size={9.5}>
              Q
            </CLabel>
            {[
              ['0', '0', '0'],
              ['0', '1', '0'],
              ['1', '0', '0'],
              ['1', '1', '1'],
            ].map(([a, b, q], i) => (
              <g key={`and-${i}`}>
                {q === '1' && <rect x="48" y={145 + i * 19} width="134" height="17" rx="4" fill="#d9f7ee" />}
                <CLabel x={70} y={157 + i * 19} fill="#4f5b6b" size={9.5} weight={700}>
                  {a}
                </CLabel>
                <CLabel x={115} y={157 + i * 19} fill="#4f5b6b" size={9.5} weight={700}>
                  {b}
                </CLabel>
                <CLabel x={160} y={157 + i * 19} fill={q === '1' ? '#1a7d69' : '#64748b'} size={9.5}>
                  {q}
                </CLabel>
              </g>
            ))}

            {/* PANEL 2: OR GATE */}
            <rect x="231" y="14" width="198" height="222" rx="14" fill="#edf7ff" stroke="#7bc0f7" strokeWidth="1.8" />
            <PillHeader cx={330} cy={34} width={128} text="OR (A + B)" bg="#d9eeff" stroke="#2282d4" color="#145a99" />

            {/* OR Gate Symbol */}
            <line x1="271" y1="68" x2="306" y2="68" stroke="#556478" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="271" y1="94" x2="306" y2="94" stroke="#556478" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="356" y1="81" x2="385" y2="81" stroke="#556478" strokeWidth="2.2" strokeLinecap="round" />
            <path
              d="M 298 58 Q 312 81 298 104 Q 334 104 358 81 Q 334 58 298 58 Z"
              fill="#ffffff"
              stroke="#2282d4"
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            <CLabel x={261} y={72} fill="#4f5b6b" size={10}>
              A
            </CLabel>
            <CLabel x={261} y={98} fill="#4f5b6b" size={10}>
              B
            </CLabel>
            <CLabel x={395} y={85} fill="#145a99" size={10.5}>
              Q
            </CLabel>

            {/* OR Truth Table */}
            <rect x="259" y="120" width="142" height="102" rx="9" fill="#ffffff" stroke="#b8dcfb" strokeWidth="1.4" />
            <rect x="259" y="120" width="142" height="22" rx="9" fill="#d9eeff" />
            <CLabel x={285} y={135} fill="#145a99" size={9.5}>
              A
            </CLabel>
            <CLabel x={330} y={135} fill="#145a99" size={9.5}>
              B
            </CLabel>
            <CLabel x={375} y={135} fill="#145a99" size={9.5}>
              Q
            </CLabel>
            {[
              ['0', '0', '0'],
              ['0', '1', '1'],
              ['1', '0', '1'],
              ['1', '1', '1'],
            ].map(([a, b, q], i) => (
              <g key={`or-${i}`}>
                {q === '1' && <rect x="263" y={145 + i * 19} width="134" height="17" rx="4" fill="#e4f3ff" />}
                <CLabel x={285} y={157 + i * 19} fill="#4f5b6b" size={9.5} weight={700}>
                  {a}
                </CLabel>
                <CLabel x={330} y={157 + i * 19} fill="#4f5b6b" size={9.5} weight={700}>
                  {b}
                </CLabel>
                <CLabel x={375} y={157 + i * 19} fill={q === '1' ? '#145a99' : '#64748b'} size={9.5}>
                  {q}
                </CLabel>
              </g>
            ))}

            {/* PANEL 3: NOT GATE */}
            <rect x="446" y="14" width="198" height="222" rx="14" fill="#f6effe" stroke="#c59ef0" strokeWidth="1.8" />
            <PillHeader cx={545} cy={34} width={128} text="NOT (¬A)" bg="#eadbfd" stroke="#7d3ec4" color="#5c289c" />

            {/* NOT Gate Symbol */}
            <line x1="486" y1="81" x2="518" y2="81" stroke="#556478" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="572" y1="81" x2="600" y2="81" stroke="#556478" strokeWidth="2.2" strokeLinecap="round" />
            <polygon
              points="518,58 560,81 518,104"
              fill="#ffffff"
              stroke="#7d3ec4"
              strokeWidth="2.6"
              strokeLinejoin="round"
            />
            <circle cx="566" cy="81" r="5.5" fill="#ffffff" stroke="#7d3ec4" strokeWidth="2.4" />
            <CLabel x={476} y={85} fill="#4f5b6b" size={10}>
              A
            </CLabel>
            <CLabel x={610} y={85} fill="#5c289c" size={10.5}>
              Q
            </CLabel>

            {/* NOT Truth Table */}
            <rect x="484" y="120" width="122" height="72" rx="9" fill="#ffffff" stroke="#d9c1f5" strokeWidth="1.4" />
            <rect x="484" y="120" width="122" height="22" rx="9" fill="#eadbfd" />
            <CLabel x={516} y={135} fill="#5c289c" size={9.5}>
              A
            </CLabel>
            <CLabel x={574} y={135} fill="#5c289c" size={9.5}>
              Q
            </CLabel>
            <rect x="488" y="146" width="114" height="19" rx="4" fill="#f3eafd" />
            <CLabel x={516} y={159} fill="#4f5b6b" size={9.5} weight={700}>
              0
            </CLabel>
            <CLabel x={574} y={159} fill="#5c289c" size={9.5}>
              1
            </CLabel>
            <CLabel x={516} y={181} fill="#4f5b6b" size={9.5} weight={700}>
              1
            </CLabel>
            <CLabel x={574} y={181} fill="#64748b" size={9.5}>
              0
            </CLabel>
            <CLabel x={545} y={214} fill="#682eb0" size={8.8} weight={700}>
              INVERTS SINGLE INPUT
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 25. TECTONIC PLATE MARGINS (Destructive, Constructive, Conservative)
       * ===================================================================*/
      case 'tectonic-plate-margins':
        return (
          <svg
            viewBox="0 0 660 248"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Three tectonic plate margins: destructive subduction boundary, constructive diverging boundary, and conservative sliding fault boundary"
          >
            <ArrowMarkerDefs
              prefix={uid}
              colors={{
                coral: '#d95378',
                teal: '#229680',
                blue: '#2282d4',
                amber: '#d98916',
                purple: '#7d3ec4',
              }}
            />

            {/* PANEL 1: DESTRUCTIVE */}
            <rect x="16" y="14" width="198" height="222" rx="14" fill="#fff9fa" stroke="#f0a8bc" strokeWidth="1.8" />
            <PillHeader cx={115} cy={34} width={132} text="DESTRUCTIVE" bg="#fdebf0" stroke="#d95378" color="#b5375d" />

            {/* Mantle base */}
            <rect x="26" y="138" width="178" height="58" rx="8" fill="#ffe9c7" />
            {/* Subducting oceanic plate */}
            <path
              d="M 26 112 L 104 112 L 146 184 L 126 192 L 94 132 L 26 132 Z"
              fill="#c8e5fc"
              stroke="#2282d4"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Continental plate + volcano */}
            <path
              d="M 108 112 L 142 112 L 160 80 L 178 112 L 204 112 L 204 142 L 116 142 Z"
              fill="#e9d8fc"
              stroke="#7d3ec4"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Rising magma plume */}
            <path d="M 148 164 Q 158 134 160 88" fill="none" stroke="#d95378" strokeWidth="3" strokeLinecap="round" />
            {/* Converging Arrows */}
            <line x1="36" y1="92" x2="80" y2="92" stroke="#2282d4" strokeWidth="2.4" markerEnd={`url(#${uid}-blue)`} />
            <line x1="196" y1="68" x2="158" y2="68" stroke="#7d3ec4" strokeWidth="2.4" markerEnd={`url(#${uid}-purple)`} />
            <CLabel x={62} y={125} fill="#145a99" size={8} weight={700}>
              OCEANIC
            </CLabel>
            <CLabel x={162} y={131} fill="#5c289c" size={8} weight={700}>
              CONT.
            </CLabel>
            <CLabel x={115} y={214} fill="#b5375d" size={8.6} weight={700}>
              SUBDUCTION · VOLCANOES
            </CLabel>
            <CLabel x={115} y={226} fill="#5b687a" size={8} weight={700}>
              &amp; STRONG EARTHQUAKES
            </CLabel>

            {/* PANEL 2: CONSTRUCTIVE */}
            <rect x="231" y="14" width="198" height="222" rx="14" fill="#f4fdf9" stroke="#7bdcc1" strokeWidth="1.8" />
            <PillHeader cx={330} cy={34} width={142} text="CONSTRUCTIVE" bg="#d9f7ee" stroke="#229680" color="#1a7d69" />

            {/* Mantle base */}
            <rect x="241" y="138" width="178" height="58" rx="8" fill="#ffe9c7" />
            {/* Left & Right diverging plates */}
            <rect x="241" y="108" width="70" height="28" rx="4" fill="#c8e5fc" stroke="#2282d4" strokeWidth="2" />
            <rect x="349" y="108" width="70" height="28" rx="4" fill="#c8e5fc" stroke="#2282d4" strokeWidth="2" />
            {/* Rising Magma & Mid-Ocean Ridge */}
            <path
              d="M 311 136 L 320 96 L 330 88 L 340 96 L 349 136 Z"
              fill="#ffd6df"
              stroke="#d95378"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <line x1="330" y1="184" x2="330" y2="112" stroke="#d95378" strokeWidth="2.5" markerEnd={`url(#${uid}-coral)`} />
            {/* Diverging Arrows */}
            <line x1="298" y1="86" x2="256" y2="86" stroke="#229680" strokeWidth="2.4" markerEnd={`url(#${uid}-teal)`} />
            <line x1="362" y1="86" x2="404" y2="86" stroke="#229680" strokeWidth="2.4" markerEnd={`url(#${uid}-teal)`} />
            <CLabel x={330} y={191} fill="#b5375d" size={8} weight={700}>
              MAGMA RISES
            </CLabel>
            <CLabel x={330} y={214} fill="#1a7d69" size={8.6} weight={700}>
              PLATES DIVERGE · NEW CRUST
            </CLabel>
            <CLabel x={330} y={226} fill="#5b687a" size={8} weight={700}>
              SHIELD VOLCANOES
            </CLabel>

            {/* PANEL 3: CONSERVATIVE */}
            <rect x="446" y="14" width="198" height="222" rx="14" fill="#f4f9ff" stroke="#7bc0f7" strokeWidth="1.8" />
            <PillHeader cx={545} cy={34} width={142} text="CONSERVATIVE" bg="#d9eeff" stroke="#2282d4" color="#145a99" />

            {/* Two Sliding Plates (plan view) */}
            <rect x="462" y="66" width="76" height="122" rx="8" fill="#e4f3ff" stroke="#2282d4" strokeWidth="2" />
            <rect x="552" y="66" width="76" height="122" rx="8" fill="#f3eafd" stroke="#7d3ec4" strokeWidth="2" />
            {/* Fault Line */}
            <path
              d="M 545 62 L 541 88 L 549 114 L 541 140 L 549 166 L 545 192"
              fill="none"
              stroke="#d98916"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            {/* Pressure / Focus Ring */}
            <circle cx="545" cy="127" r="12" fill="#fff3d9" stroke="#d95378" strokeWidth="2" strokeDasharray="3 2" />
            <circle cx="545" cy="127" r="4" fill="#d95378" />
            {/* Parallel Opposite Arrows */}
            <line x1="500" y1="158" x2="500" y2="96" stroke="#2282d4" strokeWidth="2.6" markerEnd={`url(#${uid}-blue)`} />
            <line x1="590" y1="96" x2="590" y2="158" stroke="#7d3ec4" strokeWidth="2.6" markerEnd={`url(#${uid}-purple)`} />
            <CLabel x={545} y={214} fill="#145a99" size={8.6} weight={700}>
              PLATES SLIDE · FRICTION
            </CLabel>
            <CLabel x={545} y={226} fill="#5b687a" size={8} weight={700}>
              EARTHQUAKES ONLY (NO MAGMA)
            </CLabel>
          </svg>
        );

      /* =====================================================================
       * 26. BREAK-EVEN CHART (FC, TC, TR, BEP, Profit/Loss, Margin of Safety)
       * ===================================================================*/
      case 'break-even-chart':
        return (
          <svg
            viewBox="0 0 640 246"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Break-even chart showing Fixed Costs, Total Costs, Total Revenue, Break-Even Point, shaded Loss and Profit zones, and Margin of Safety"
          >
            <ArrowMarkerDefs
              prefix={uid}
              colors={{
                slate: '#556478',
                purple: '#7d3ec4',
              }}
            />

            {/* Shaded Loss & Profit Zones */}
            <polygon points="88,206 88,158 248,126" fill="#fdebf0" opacity="0.78" />
            <polygon points="248,126 408,94 408,46" fill="#d9f7ee" opacity="0.78" />

            {/* Axes */}
            <line
              x1="88"
              y1="206"
              x2="88"
              y2="24"
              stroke="#556478"
              strokeWidth="2.3"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-slate)`}
            />
            <line
              x1="88"
              y1="206"
              x2="424"
              y2="206"
              stroke="#556478"
              strokeWidth="2.3"
              strokeLinecap="round"
              markerEnd={`url(#${uid}-slate)`}
            />
            <CLabel x={80} y={22} anchor="end" fill="#4f5b6b" size={9.5}>
              COSTS /
            </CLabel>
            <CLabel x={80} y={34} anchor="end" fill="#4f5b6b" size={9.5}>
              REV (£)
            </CLabel>
            <CLabel x={422} y={226} anchor="end" fill="#4f5b6b" size={9.5}>
              OUTPUT (UNITS)
            </CLabel>

            {/* Fixed Costs (FC) */}
            <line
              x1="88"
              y1="158"
              x2="408"
              y2="158"
              stroke="#d98916"
              strokeWidth="2.4"
              strokeDasharray="6 4"
            />
            <CLabel x={412} y={162} anchor="start" fill="#9c5c06" size={9.5}>
              FC
            </CLabel>

            {/* Total Costs (TC) */}
            <line x1="88" y1="158" x2="408" y2="94" stroke="#d95378" strokeWidth="3" strokeLinecap="round" />
            <CLabel x={412} y={98} anchor="start" fill="#b5375d" size={9.5}>
              TC
            </CLabel>

            {/* Total Revenue (TR) */}
            <line x1="88" y1="206" x2="408" y2="46" stroke="#229680" strokeWidth="3" strokeLinecap="round" />
            <CLabel x={412} y={50} anchor="start" fill="#1a7d69" size={9.5}>
              TR
            </CLabel>

            {/* Zone Captions */}
            <CLabel x={148} y={166} fill="#b5375d" size={9}>
              LOSS
            </CLabel>
            <CLabel x={364} y={84} fill="#1a7d69" size={9}>
              PROFIT
            </CLabel>

            {/* BEP Vertical & Actual Output Vertical */}
            <line x1="248" y1="126" x2="248" y2="206" stroke="#7d3ec4" strokeWidth="1.7" strokeDasharray="4 3" />
            <line x1="348" y1="76" x2="348" y2="206" stroke="#a6b3c4" strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Margin of Safety Bracket */}
            <line
              x1="254"
              y1="194"
              x2="342"
              y2="194"
              stroke="#7d3ec4"
              strokeWidth="2.1"
              markerStart={`url(#${uid}-purple)`}
              markerEnd={`url(#${uid}-purple)`}
            />
            <CLabel x={298} y={186} fill="#5c289c" size={8.5}>
              MARGIN OF SAFETY
            </CLabel>
            <CLabel x={248} y={220} fill="#5c289c" size={8.8}>
              BEP
            </CLabel>
            <CLabel x={348} y={220} fill="#4f5b6b" size={8.5} weight={700}>
              ACTUAL
            </CLabel>

            {/* Break-Even Point Dot */}
            <circle cx="248" cy="126" r="6" fill="#7d3ec4" stroke="#ffffff" strokeWidth="2" />
            <CLabel x={244} y={114} anchor="end" fill="#5c289c" size={9.5}>
              BREAK-EVEN (TR = TC)
            </CLabel>

            {/* Right-hand Summary Card */}
            <rect
              x="442"
              y="26"
              width="182"
              height="194"
              rx="14"
              fill="#fafbfd"
              stroke="#d5dfec"
              strokeWidth="1.8"
            />
            <PillHeader
              cx={533}
              cy={50}
              width={154}
              text="KEY FORMULAS"
              bg="#f3eafd"
              stroke="#c59ef0"
              color="#5c289c"
            />

            <rect x="454" y="76" width="158" height="44" rx="10" fill="#effcf8" stroke="#7bdcc1" strokeWidth="1.4" />
            <CLabel x={533} y={93} fill="#1a7d69" size={9.2}>
              BREAK-EVEN OUTPUT
            </CLabel>
            <CLabel x={533} y={108} fill="#5b687a" size={8.2} weight={700}>
              Fixed Costs ÷ (P − VC)
            </CLabel>

            <rect x="454" y="130" width="158" height="36" rx="10" fill="#f3eafd" stroke="#c59ef0" strokeWidth="1.4" />
            <CLabel x={533} y={145} fill="#5c289c" size={9.2}>
              MARGIN OF SAFETY
            </CLabel>
            <CLabel x={533} y={158} fill="#5b687a" size={8.2} weight={700}>
              Actual Output − BEP
            </CLabel>

            <rect x="454" y="176" width="158" height="30" rx="10" fill="#fff3d9" stroke="#f2ba5a" strokeWidth="1.4" />
            <CLabel x={533} y={195} fill="#9c5c06" size={8.4}>
              TC = FC + (VC × Output)
            </CLabel>
          </svg>
        );
    }
  };

  return (
    <div className={`cognito-diagram-stage${compact ? ' cognito-diagram-stage--compact' : ''}`}>
      {renderSvg()}
    </div>
  );
};
