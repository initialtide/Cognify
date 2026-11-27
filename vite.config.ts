import fs from 'node:fs';
import path from 'node:path';
import { configDefaults, defineConfig } from 'vitest/config';
import { loadEnv, type Connect, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import {
  buildMarkdownNotFoundBody,
  hasStaticAssetExtension,
  isKnownAppRoute,
  mergeVaryAccept,
  normalizeRoutePath,
  prefersMarkdown,
  resolveAgentRequest,
} from './src/server/agentNegotiation';

interface NodeLikeReq {
  method?: string;
  url?: string;
  headers?: Record<string, string | string[] | undefined>;
}

interface NodeLikeRes {
  statusCode: number;
  setHeader(name: string, value: string | string[] | number): unknown;
  getHeader(name: string): string | string[] | number | undefined;
  end(chunk?: string): unknown;
}

function readAssetFromRoots(roots: string[], relativePath: string): string | null {
  const safeRel = relativePath.replace(/^\/+/, '');
  for (const root of roots) {
    const candidate = path.resolve(root, safeRel);
    if (!candidate.startsWith(path.resolve(root))) continue;
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return fs.readFileSync(candidate, 'utf8');
    }
  }
  return null;
}

function cognifyAgentNegotiationPlugin(basePath: string): Plugin {
  const makeMiddleware = (roots: string[], isPreview: boolean): Connect.NextHandleFunction => {
    return (rawReq, rawRes, next) => {
      const req = rawReq as unknown as NodeLikeReq;
      const res = rawRes as unknown as NodeLikeRes;
      const method = (req.method ?? 'GET').toUpperCase();
      if (method !== 'GET' && method !== 'HEAD') {
        return next();
      }

      const rawUrl = req.url ?? '/';
      const pathname = rawUrl.split('?')[0] || '/';

      // Always let Vite internal module/HMR endpoints pass straight through in dev mode
      if (
        !isPreview &&
        (pathname.startsWith('/@') ||
          pathname.startsWith('/src/') ||
          pathname.startsWith('/node_modules/') ||
          pathname.startsWith('/__vite'))
      ) {
        return next();
      }

      const rawAccept = req.headers?.accept;
      const accept = typeof rawAccept === 'string' ? rawAccept : '';
      const route = normalizeRoutePath(pathname, basePath);

      // For static asset paths in preview mode, check if the file actually exists;
      // if missing and agent asks for Markdown, return an agent-friendly Markdown 404.
      if (hasStaticAssetExtension(route)) {
        if (isPreview) {
          const exists = readAssetFromRoots(roots, route) !== null;
          if (!exists && prefersMarkdown(accept)) {
            const body = buildMarkdownNotFoundBody(pathname);
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
            res.setHeader('Vary', mergeVaryAccept(res.getHeader('Vary')));
            res.end(method === 'HEAD' ? undefined : body);
            return;
          }
        }
        return next();
      }

      const result = resolveAgentRequest({
        pathname,
        acceptHeader: accept,
        basePath,
        readAsset: (rel) => readAssetFromRoots(roots, rel),
      });

      if (result && result.handled) {
        res.statusCode = result.status;
        res.setHeader('Content-Type', result.contentType);
        res.setHeader('Vary', mergeVaryAccept(res.getHeader('Vary')));
        res.end(method === 'HEAD' ? undefined : result.body);
        return;
      }

      // Known HTML route: guarantee Vary: Accept header is present on the HTML response.
      if (isKnownAppRoute(route)) {
        res.setHeader('Vary', mergeVaryAccept(res.getHeader('Vary')));

        // In preview mode, directly serve the prerendered HTML for non-root routes so
        // /dashboard, /about, /docs, /mcp, /course/<id> respond HTTP 200 without 301 chains.
        if (isPreview) {
          const htmlRel = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
          const htmlBody =
            readAssetFromRoots(roots, htmlRel) ??
            readAssetFromRoots(roots, `${route.slice(1)}/index.html`) ??
            readAssetFromRoots(roots, 'index.html');
          if (htmlBody) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.setHeader('Vary', mergeVaryAccept(res.getHeader('Vary')));
            res.end(method === 'HEAD' ? undefined : htmlBody);
            return;
          }
        }
      }

      next();
    };
  };

  return {
    name: 'cognify-agent-negotiation',
    configureServer(server) {
      server.middlewares.use(
        makeMiddleware([path.resolve(process.cwd(), 'public')], false)
      );
    },
    configurePreviewServer(server) {
      server.middlewares.use(
        makeMiddleware(
          [path.resolve(process.cwd(), 'dist'), path.resolve(process.cwd(), 'public')],
          true
        )
      );
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const basePath = env.VITE_BASE_PATH || '/';
  return {
    base: basePath,
    plugins: [react(), cognifyAgentNegotiationPlugin(basePath)],
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            const normalized = id.replace(/\\/g, '/');
            if (normalized.includes('/node_modules/')) {
              if (
                normalized.includes('/react/') ||
                normalized.includes('/react-dom/') ||
                normalized.includes('/react-router')
              ) {
                return 'vendor-react';
              }
              if (normalized.includes('/lucide-react/')) {
                return 'vendor-icons';
              }
              return 'vendor';
            }
            const courseMatch = normalized.match(/\/src\/data\/courses\/([^/]+)\.ts$/);
            if (courseMatch) {
              return `course-${courseMatch[1]}`;
            }
            return undefined;
          },
        },
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/test/setup.ts',
      css: true,
      include: ['src/**/*.{test,spec}.{ts,tsx}'],
      exclude: [...configDefaults.exclude, 'e2e/**'],
    },
  };
});
