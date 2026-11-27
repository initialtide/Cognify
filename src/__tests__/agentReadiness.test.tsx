import fs from 'node:fs';
import path from 'node:path';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { SiteFooter } from '../components/layout/SiteFooter';
import { ApiReferencePage, DocsPage, McpPage } from '../pages/DeveloperDocsPage';
import { AboutPage, ContactPage, NotFoundPage, PrivacyPage } from '../pages/TrustPages';
import {
  buildMarkdownNotFoundBody,
  mergeVaryAccept,
  normalizeRoutePath,
  prefersMarkdown,
  resolveAgentRequest,
} from '../server/agentNegotiation';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

function readPublicFile(relPath: string): string {
  return fs.readFileSync(path.join(PUBLIC_DIR, relPath), 'utf8');
}

function readPublicOrNull(relPath: string): string | null {
  const full = path.join(PUBLIC_DIR, relPath);
  return fs.existsSync(full) ? fs.readFileSync(full, 'utf8') : null;
}

describe('Agent Readiness & Ora Audit Compliance', () => {
  describe('1. AI crawler & bot rules (robots.txt)', () => {
    it('explicitly allows major AI agents and links the XML sitemap', () => {
      const robots = readPublicFile('robots.txt');
      for (const agent of [
        'GPTBot',
        'OAI-SearchBot',
        'ChatGPT-User',
        'ClaudeBot',
        'PerplexityBot',
        'Google-Extended',
        'Googlebot',
      ]) {
        expect(robots).toContain(`User-agent: ${agent}`);
      }
      expect(robots).toContain('User-agent: *\nAllow: /');
      expect(robots).not.toMatch(/Disallow:\s*\/\s*$/m);
      expect(robots).toContain('Sitemap: https://initialtide.github.io/Cognify/sitemap.xml');
    });
  });

  describe('2 & 3. Markdown content negotiation & Agent-friendly 404s', () => {
    it('accurately parses Accept headers including q-values and browser defaults', () => {
      expect(prefersMarkdown('text/markdown')).toBe(true);
      expect(prefersMarkdown('text/markdown; charset=utf-8')).toBe(true);
      expect(prefersMarkdown('text/markdown, text/html;q=0.8')).toBe(true);
      expect(prefersMarkdown('text/markdown;q=0.9, */*;q=0.1')).toBe(true);

      // Standard browser / HTML / wildcard requests must continue serving HTML
      expect(prefersMarkdown('text/html')).toBe(false);
      expect(
        prefersMarkdown('text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8')
      ).toBe(false);
      expect(prefersMarkdown('*/*')).toBe(false);
      expect(prefersMarkdown('')).toBe(false);
      expect(prefersMarkdown('text/markdown;q=0, text/html;q=1')).toBe(false);
    });

    it('serves nonempty Markdown with Vary: Accept on homepage and key routes when Accept: text/markdown', () => {
      for (const pathname of ['/', '/Cognify/', '/dashboard', '/about', '/docs', '/mcp']) {
        const res = resolveAgentRequest({
          pathname,
          acceptHeader: 'text/markdown',
          readAsset: readPublicOrNull,
        });
        expect(res).not.toBeNull();
        expect(res?.status).toBe(200);
        expect(res?.contentType).toBe('text/markdown; charset=utf-8');
        expect(res?.vary).toBe('Accept');
        expect((res?.body.trim().length ?? 0) > 100).toBe(true);
      }

      // HTML request on homepage passes through to HTML handler
      const htmlPass = resolveAgentRequest({
        pathname: '/',
        acceptHeader: 'text/html',
        readAsset: readPublicOrNull,
      });
      expect(htmlPass).toBeNull();
    });

    it('returns HTTP 404 with Markdown error body (>=20 chars + docs, sitemap, llms.txt links) on nonexistent paths', () => {
      const res = resolveAgentRequest({
        pathname: '/__ora-404-probe-nw6yioio',
        acceptHeader: 'text/markdown',
        readAsset: readPublicOrNull,
      });

      expect(res).not.toBeNull();
      expect(res?.status).toBe(404);
      expect(res?.contentType).toBe('text/markdown; charset=utf-8');
      expect(res?.vary).toBe('Accept');
      expect(res!.body.length).toBeGreaterThanOrEqual(20);
      expect(res!.body).toContain('/docs');
      expect(res!.body).toContain('/sitemap.xml');
      expect(res!.body).toContain('/llms.txt');

      // Nonexistent HTML request also keeps HTTP 404 status with Vary: Accept
      const html404 = resolveAgentRequest({
        pathname: '/some-path-that-does-not-exist',
        acceptHeader: 'text/html',
        readAsset: readPublicOrNull,
      });
      expect(html404?.status).toBe(404);
      expect(html404?.contentType).toBe('text/html; charset=utf-8');
      expect(html404?.vary).toBe('Accept');

      // Direct helper check & Vary header merge
      expect(buildMarkdownNotFoundBody('/missing').length).toBeGreaterThan(50);
      expect(mergeVaryAccept('Accept-Encoding')).toBe('Accept, Accept-Encoding');
      expect(mergeVaryAccept('Accept')).toBe('Accept');
      expect(normalizeRoutePath('/Cognify/dashboard/')).toBe('/dashboard');
    });
  });

  describe('4. Developer resource discoverability (/docs, /api, /mcp, OpenAPI, MCP)', () => {
    it('renders DocsPage, ApiReferencePage, and McpPage with exact product + API/MCP headings and GitHub links', () => {
      const { unmount } = render(
        <MemoryRouter>
          <DocsPage />
        </MemoryRouter>
      );
      expect(
        screen.getByRole('heading', { level: 1, name: /Cognify API & Developer Documentation/i })
      ).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Initialtide on GitHub/i })).toHaveAttribute(
        'href',
        'https://github.com/initialtide'
      );
      unmount();

      const apiRender = render(
        <MemoryRouter>
          <ApiReferencePage />
        </MemoryRouter>
      );
      expect(
        screen.getByRole('heading', { level: 1, name: /Cognify Curriculum API Reference/i })
      ).toBeInTheDocument();
      apiRender.unmount();

      const mcpRender = render(
        <MemoryRouter>
          <McpPage />
        </MemoryRouter>
      );
      expect(
        screen.getByRole('heading', { level: 1, name: /Cognify MCP Server & Agent Tools/i })
      ).toBeInTheDocument();
      mcpRender.unmount();
    });

    it('publishes valid OpenAPI 3.1, Courses JSON catalog, and MCP discovery manifest', () => {
      const openapi = JSON.parse(readPublicFile('api/openapi.json'));
      expect(openapi.openapi).toBe('3.1.0');
      expect(openapi.info.title).toContain('Cognify');
      expect(openapi.paths['/api/v1/courses.json']).toBeDefined();

      const catalog = JSON.parse(readPublicFile('api/v1/courses.json'));
      expect(catalog.courseCount).toBeGreaterThanOrEqual(20);
      expect(catalog.courses.length).toBe(catalog.courseCount);
      expect(catalog.courses[0].title).toBeTruthy();
      expect(catalog.courses[0].title).not.toBe('undefined');
      expect(catalog.courses[0].url).toContain('https://initialtide.github.io/Cognify/course/');
      expect(readPublicFile('llms.txt')).not.toContain(' undefined ');

      const mcp = JSON.parse(readPublicFile('.well-known/mcp.json'));
      expect(mcp.name).toBe('cognify-curriculum');
      expect(Array.isArray(mcp.tools)).toBe(true);
      expect(mcp.tools.length).toBeGreaterThanOrEqual(4);
    });
  });

  describe('6 & 7. Agent instructions (when-to-use) & XML Sitemap', () => {
    it('publishes llms.txt, llms-full.txt, and .well-known/agent-instructions.md with concrete when-to-use guidance', () => {
      const llms = readPublicFile('llms.txt');
      expect(llms).toContain('# Cognify');
      expect(llms).toContain('## When to use Cognify');
      expect(llms).toContain('## When NOT to use Cognify');
      expect(llms).toContain('## How agents should call Cognify');
      expect(llms).toContain('/api/v1/courses.json');
      expect(llms).toContain('https://github.com/initialtide');

      const instructions = readPublicFile('.well-known/agent-instructions.md');
      expect(instructions).toContain('## When to Use This Platform');
      expect(instructions).toContain('## When NOT to Use This Platform');

      const llmsFull = readPublicFile('llms-full.txt');
      expect(llmsFull.length).toBeGreaterThan(10_000);
    });

    it('publishes a valid XML sitemap with lastmod dates and all core URLs under 50MB', () => {
      const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
      const stat = fs.statSync(sitemapPath);
      expect(stat.size).toBeGreaterThan(500);
      expect(stat.size).toBeLessThan(50 * 1024 * 1024);

      const xml = fs.readFileSync(sitemapPath, 'utf8');
      expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
      expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
      expect(xml).toMatch(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
      for (const url of [
        'https://initialtide.github.io/Cognify/',
        'https://initialtide.github.io/Cognify/dashboard',
        'https://initialtide.github.io/Cognify/about',
        'https://initialtide.github.io/Cognify/contact',
        'https://initialtide.github.io/Cognify/privacy',
        'https://initialtide.github.io/Cognify/docs',
        'https://initialtide.github.io/Cognify/api',
        'https://initialtide.github.io/Cognify/mcp',
      ]) {
        expect(xml).toContain(`<loc>${url}</loc>`);
      }
    });
  });

  describe('8. Trust anchor pages (/about, /contact, /privacy) & SiteFooter', () => {
    it('renders About, Contact, and Privacy pages with >= 500 characters each and zero paywall text', () => {
      const pages = [
        { name: 'About', Component: AboutPage, heading: /About Cognify/i },
        { name: 'Contact', Component: ContactPage, heading: /Contact Cognify/i },
        { name: 'Privacy', Component: PrivacyPage, heading: /Cognify Privacy Policy/i },
      ];

      for (const { Component, heading } of pages) {
        const { container, unmount } = render(
          <MemoryRouter>
            <Component />
          </MemoryRouter>
        );
        expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
        const textLen = (container.textContent ?? '').replace(/\s+/g, ' ').trim().length;
        expect(textLen).toBeGreaterThanOrEqual(500);
        expect(screen.queryByText(/Upgrade to Pro/i)).not.toBeInTheDocument();
        unmount();
      }
    });

    it('lets visitors prepare a structured message on ContactPage and renders NotFoundPage & SiteFooter cleanly', () => {
      const contact = render(
        <MemoryRouter>
          <ContactPage />
        </MemoryRouter>
      );
      fireEvent.change(screen.getByPlaceholderText(/Include the course/i), {
        target: { value: 'Please add CIE 0620 past paper index.' },
      });
      fireEvent.click(screen.getByRole('button', { name: /Prepare Message/i }));
      expect(screen.getByRole('status')).toHaveTextContent(/Message prepared/i);
      contact.unmount();

      const notFound = render(
        <MemoryRouter initialEntries={['/__ora-404-probe-test']}>
          <NotFoundPage />
        </MemoryRouter>
      );
      expect(screen.getByRole('heading', { level: 1, name: /Page Not Found/i })).toBeInTheDocument();
      expect(screen.getByText('/__ora-404-probe-test')).toBeInTheDocument();
      notFound.unmount();

      const footer = render(
        <MemoryRouter>
          <SiteFooter />
        </MemoryRouter>
      );
      expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
      expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
      expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute('href', '/privacy');
      expect(screen.getByRole('link', { name: 'API Docs' })).toHaveAttribute('href', '/docs');
      expect(screen.getByRole('link', { name: 'MCP' })).toHaveAttribute('href', '/mcp');
      expect(screen.getByRole('link', { name: 'Initialtide' })).toHaveAttribute(
        'href',
        'https://github.com/initialtide'
      );
      footer.unmount();
    });
  });

  describe('5, 9, 10 & 11. Homepage metadata, brand terms, SoftwareApplication & Organization JSON-LD', () => {
    it('includes complete metadata, og-image.png asset, brand/product terms, and full Organization contactPoint + PostalAddress', () => {
      const html = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8');

      // Metadata completeness (all 4 required signals)
      expect(html).toMatch(/<html\s+lang="en">/i);
      expect(html).toContain('<link rel="canonical" href="https://initialtide.github.io/Cognify/" />');
      expect(html).toContain('<meta property="og:type" content="website" />');
      expect(html).toContain(
        '<meta property="og:image" content="https://initialtide.github.io/Cognify/og-image.png" />'
      );

      // Verify real PNG binary exists at public/og-image.png
      const pngBytes = fs.readFileSync(path.join(PUBLIC_DIR, 'og-image.png'));
      expect(pngBytes[0]).toBe(0x89);
      expect(pngBytes[1]).toBe(0x50);
      expect(pngBytes[2]).toBe(0x4e);
      expect(pngBytes[3]).toBe(0x47);

      // Brand & product discoverability terms in title, meta keywords, and visible fallback HTML
      expect(html).toContain(
        '<title>Cognify — Free GCSE, IGCSE &amp; A-Level Interactive Revision Platform</title>'
      );
      expect(html).toMatch(/name="keywords"[\s\S]*GCSE revision[\s\S]*IGCSE revision/i);
      expect(html).toContain('<h1>Cognify — Free GCSE, IGCSE &amp; A-Level Interactive Revision Platform</h1>');

      // Parse JSON-LD structured data
      const ldMatch = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/i.exec(html);
      expect(ldMatch).not.toBeNull();
      const ld = JSON.parse(ldMatch![1]);
      expect(ld['@context']).toBe('https://schema.org');
      const graph: Array<Record<string, unknown>> = ld['@graph'];
      expect(Array.isArray(graph)).toBe(true);

      const appNode = graph.find((n) => n['@type'] === 'SoftwareApplication');
      expect(appNode).toBeDefined();
      expect(appNode?.name).toBe('Cognify');
      expect(appNode?.url).toBe('https://initialtide.github.io/Cognify/');
      expect(appNode?.offers).toBeDefined();
      expect(appNode?.sameAs).toEqual(
        expect.arrayContaining(['https://github.com/initialtide/Cognify'])
      );
      expect(String(appNode?.keywords)).toContain('GCSE revision');

      const orgNode = graph.find((n) => n['@type'] === 'Organization') as
        | {
            contactPoint?: Array<{ contactType?: string; email?: string; telephone?: string }>;
            address?: {
              '@type'?: string;
              streetAddress?: string;
              addressLocality?: string;
              postalCode?: string;
              addressCountry?: string;
            };
            knowsAbout?: string[];
          }
        | undefined;
      expect(orgNode).toBeDefined();
      expect(orgNode?.knowsAbout).toEqual(expect.arrayContaining(['GCSE revision', 'Curriculum API']));
      expect(orgNode?.contactPoint?.[0]?.contactType).toBe('customer support');
      expect(orgNode?.contactPoint?.[0]?.email).toContain('@');
      expect(orgNode?.contactPoint?.[0]?.telephone).toBeTruthy();
      expect(orgNode?.address?.['@type']).toBe('PostalAddress');
      expect(orgNode?.address?.streetAddress).toBeTruthy();
      expect(orgNode?.address?.addressLocality).toBe('London');
      expect(orgNode?.address?.postalCode).toBeTruthy();
      expect(orgNode?.address?.addressCountry).toBe('GB');

      const siteNode = graph.find((n) => n['@type'] === 'WebSite');
      expect(siteNode).toBeDefined();
    });
  });
});
