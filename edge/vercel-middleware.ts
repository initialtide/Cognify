/**
 * Cognify Vercel Edge Middleware (optional alternative to Cloudflare Workers)
 *
 * Copy to `middleware.ts` at the repo root if deploying on Vercel to enable
 * HTTP Accept: text/markdown content negotiation, Vary: Accept, and Markdown 404s.
 */

import {
  buildMarkdownNotFoundBody,
  hasStaticAssetExtension,
  isKnownAppRoute,
  normalizeRoutePath,
  prefersMarkdown,
  resolveMarkdownFileForRoute,
} from '../src/server/agentNegotiation';

export const config = {
  matcher: ['/((?!assets/|icon\\.svg|apple-icon\\.png|og-image\\.png).*)'],
};

export default async function middleware(request: Request): Promise<Response | undefined> {
  const url = new URL(request.url);
  const route = normalizeRoutePath(url.pathname);
  const accept = request.headers.get('accept') || '';
  const wantsMarkdown = prefersMarkdown(accept);

  if (hasStaticAssetExtension(route)) {
    return undefined;
  }

  if (!isKnownAppRoute(route)) {
    if (wantsMarkdown) {
      return new Response(buildMarkdownNotFoundBody(url.pathname, url.origin), {
        status: 404,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          Vary: 'Accept',
        },
      });
    }
    return undefined;
  }

  if (wantsMarkdown) {
    const mdFile = resolveMarkdownFileForRoute(route);
    if (mdFile) {
      const mdResp = await fetch(new URL(`/${mdFile}`, url.origin));
      if (mdResp.ok) {
        return new Response(mdResp.body, {
          status: 200,
          headers: {
            'Content-Type': 'text/markdown; charset=utf-8',
            Vary: 'Accept',
          },
        });
      }
    }
  }

  return undefined;
}
