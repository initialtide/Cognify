import { SITE_METADATA } from '../data/siteMetadata';

export interface AcceptRange {
  type: string;
  q: number;
  index: number;
}

export interface AgentNegotiationResult {
  handled: boolean;
  status: number;
  contentType: string;
  vary: string;
  body: string;
}

const STATIC_EXACT_ROUTES = new Set<string>([
  '/',
  '/dashboard',
  '/courses',
  '/about',
  '/contact',
  '/privacy',
  '/docs',
  '/api',
  '/mcp',
  '/faq',
  '/teacher-tools',
  '/onboarding',
  '/auth',
  '/login',
  '/register',
  '/account',
]);

const STATIC_ROUTE_TO_MD: Record<string, string> = {
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
  '/onboarding': 'dashboard.md',
  '/auth': 'dashboard.md',
  '/login': 'dashboard.md',
  '/register': 'dashboard.md',
  '/account': 'dashboard.md',
};

/**
 * Parse an HTTP Accept header per RFC 9110 into ordered media ranges with q-values.
 */
export function parseAcceptHeader(acceptHeader?: string | null): AcceptRange[] {
  if (!acceptHeader || !acceptHeader.trim()) return [];
  return acceptHeader
    .split(',')
    .map((part, index) => {
      const segments = part
        .split(';')
        .map((s) => s.trim())
        .filter(Boolean);
      const mediaType = (segments[0] ?? '').toLowerCase();
      let q = 1;
      for (const param of segments.slice(1)) {
        const match = /^q\s*=\s*([0-9]+(?:\.[0-9]+)?)$/i.exec(param);
        if (match) {
          const parsed = Number.parseFloat(match[1]);
          q = Number.isNaN(parsed) ? 0 : Math.max(0, Math.min(1, parsed));
        }
      }
      return { type: mediaType, q, index };
    })
    .filter((entry) => entry.type.length > 0);
}

/**
 * Determine whether the HTTP Accept header prefers Markdown over HTML.
 * Standard browser Accept headers (text/html,application/xhtml+xml,...;q=0.8) return false.
 * Agent headers such as "text/markdown" or "text/markdown, text/html;q=0.8" return true.
 */
export function prefersMarkdown(acceptHeader?: string | null): boolean {
  const ranges = parseAcceptHeader(acceptHeader);
  if (ranges.length === 0) return false;

  const mdEntries = ranges.filter(
    (r) => r.type === 'text/markdown' || r.type === 'text/x-markdown'
  );
  if (mdEntries.length === 0) return false;

  const bestMd = mdEntries.reduce((best, cur) => (cur.q > best.q ? cur : best), mdEntries[0]);
  if (bestMd.q <= 0) return false;

  const htmlEntries = ranges.filter(
    (r) => r.type === 'text/html' || r.type === 'application/xhtml+xml'
  );
  if (htmlEntries.length === 0) return true;

  const bestHtml = htmlEntries.reduce(
    (best, cur) => (cur.q > best.q ? cur : best),
    htmlEntries[0]
  );

  if (bestMd.q > bestHtml.q) return true;
  if (bestMd.q < bestHtml.q) return false;
  return bestMd.index < bestHtml.index;
}

/**
 * Normalize an incoming URL path by removing query strings, stripping the configured
 * basePath (e.g. "/Cognify/"), and trimming trailing slashes while preserving "/".
 */
export function normalizeRoutePath(pathname: string, basePath = '/'): string {
  const cleanUrl = pathname.split('?')[0].split('#')[0] || '/';
  const normalizedBase =
    basePath && basePath !== '/' ? `/${basePath.replace(/^\/+|\/+$/g, '')}` : '';

  let rel = cleanUrl;
  if (normalizedBase && (rel === normalizedBase || rel.startsWith(`${normalizedBase}/`))) {
    rel = rel.slice(normalizedBase.length) || '/';
  }
  // Also accept /Cognify prefix even when Vite preview runs at base "/"
  if (
    !normalizedBase &&
    (rel === '/Cognify' || rel.startsWith('/Cognify/'))
  ) {
    rel = rel.slice('/Cognify'.length) || '/';
  }

  if (rel.length > 1) {
    rel = rel.replace(/\/+$/, '');
  }
  return rel.startsWith('/') ? rel : `/${rel}`;
}

/**
 * Returns true if the path points to a static file asset with an explicit file extension
 * (e.g. .js, .css, .png, .json, .xml, .txt, .md, .svg, .ico, .woff2).
 */
export function hasStaticAssetExtension(route: string): boolean {
  if (route === '/' || route.endsWith('/')) return false;
  const lastSegment = route.split('/').pop() ?? '';
  if (!lastSegment.includes('.')) return false;
  return /\.(js|mjs|cjs|css|png|jpg|jpeg|gif|webp|svg|ico|json|xml|txt|md|woff|woff2|ttf|eot|pdf|map|html)$/i.test(
    lastSegment
  );
}

/**
 * Checks whether a normalized route corresponds to a real Cognify application route.
 * Unknown probe paths (such as "/__ora-404-probe-nw6yioio") return false so servers return HTTP 404.
 */
export function isKnownAppRoute(route: string): boolean {
  if (STATIC_EXACT_ROUTES.has(route)) return true;
  if (/^\/courses\/[a-z0-9-]+(\/[a-z0-9-]+){0,2}$/i.test(route)) return true;
  if (/^\/account\/(profile|activity|preferences|security)$/i.test(route)) return true;
  if (
    /^\/course\/[a-z0-9-]+(\/(lessons|notes|quiz|flashcards|exam-practice|past-papers|cheat-sheets|key-terms|videos|revision-session)(\/[a-z0-9-]+)?)?$/i.test(
      route
    )
  ) {
    return true;
  }
  if (/^\/course\/[a-z0-9-]+\/lesson\/[a-z0-9-]+$/i.test(route)) return true;
  return false;
}

/**
 * Maps a normalized Cognify route to its generated Markdown twin path inside public/ or dist/.
 */
export function resolveMarkdownFileForRoute(route: string): string | null {
  if (route in STATIC_ROUTE_TO_MD) {
    return STATIC_ROUTE_TO_MD[route];
  }
  if (route.startsWith('/courses/')) {
    return 'courses.md';
  }
  if (route.startsWith('/account/')) {
    return 'dashboard.md';
  }
  const courseMatch = /^\/course\/([a-z0-9-]+)(?:\/.*)?$/i.exec(route);
  if (courseMatch) {
    return `course/${courseMatch[1]}.md`;
  }
  return null;
}

/**
 * Builds an agent-friendly HTTP 404 Markdown error body (>= 20 chars) with links to
 * /docs, /sitemap.xml, and /llms.txt.
 */
export function buildMarkdownNotFoundBody(
  requestedPath: string,
  baseUrl: string = SITE_METADATA.baseUrl
): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  return `# 404 Not Found — Cognify

The requested path \`${requestedPath}\` does not exist on Cognify (${cleanBase}). It may have moved, contain a typo, or refer to an unavailable resource.

## Helpful Links for Agents & Developers

- [Cognify API & Developer Documentation](${cleanBase}/docs)
- [XML Sitemap](${cleanBase}/sitemap.xml)
- [Agent Instructions (llms.txt)](${cleanBase}/llms.txt)
- [Cognify Curriculum JSON API](${cleanBase}/api/v1/courses.json)
- [Cognify Homepage](${cleanBase}/)
`;
}

export function mergeVaryAccept(existingVary?: string | string[] | number): string {
  const raw = Array.isArray(existingVary)
    ? existingVary.join(', ')
    : typeof existingVary === 'string'
      ? existingVary
      : '';
  const tokens = raw
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean);
  if (!tokens.some((t) => t.toLowerCase() === 'accept')) {
    tokens.unshift('Accept');
  }
  return tokens.join(', ');
}

export function resolveAgentRequest(options: {
  pathname: string;
  acceptHeader?: string | null;
  basePath?: string;
  baseUrl?: string;
  readAsset: (relativePath: string) => string | null;
}): AgentNegotiationResult | null {
  const { pathname, acceptHeader, basePath = '/', baseUrl = SITE_METADATA.baseUrl, readAsset } =
    options;
  const route = normalizeRoutePath(pathname, basePath);

  // Let direct static asset requests (.js, .css, .json, .xml, .md, .png, etc.) pass through normally
  // unless the static file itself is missing (handled separately by static middleware).
  if (hasStaticAssetExtension(route)) {
    return null;
  }

  const wantsMarkdown = prefersMarkdown(acceptHeader);
  const known = isKnownAppRoute(route);

  if (!known) {
    if (wantsMarkdown) {
      return {
        handled: true,
        status: 404,
        contentType: 'text/markdown; charset=utf-8',
        vary: 'Accept',
        body: buildMarkdownNotFoundBody(pathname, baseUrl),
      };
    }

    const html404 =
      readAsset('404.html') ??
      `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>404 Page Not Found — Cognify</title></head><body><main><h1>404 Page Not Found — Cognify</h1><p>The requested path ${pathname} was not found.</p><ul><li><a href="${baseUrl}/docs">Docs</a></li><li><a href="${baseUrl}/sitemap.xml">Sitemap</a></li><li><a href="${baseUrl}/llms.txt">llms.txt</a></li></ul></main></body></html>`;

    return {
      handled: true,
      status: 404,
      contentType: 'text/html; charset=utf-8',
      vary: 'Accept',
      body: html404,
    };
  }

  if (wantsMarkdown) {
    const mdRel = resolveMarkdownFileForRoute(route);
    const mdBody = (mdRel && readAsset(mdRel)) || readAsset('index.md');
    if (mdBody) {
      return {
        handled: true,
        status: 200,
        contentType: 'text/markdown; charset=utf-8',
        vary: 'Accept',
        body: mdBody,
      };
    }
  }

  return null;
}
