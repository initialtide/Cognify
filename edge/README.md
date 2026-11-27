# Cognify Edge Content Negotiation (Cloudflare Workers / Vercel)

GitHub Pages is a purely static file host: it serves every static HTML, XML, JSON, and Markdown
asset cleanly, but it cannot dynamically inspect HTTP `Accept: text/markdown` headers, add
`Vary: Accept`, or serve a `Content-Type: text/markdown` body on HTTP `404` responses.

This directory provides turnkey edge middleware that implements the exact same
`Accept: text/markdown` content negotiation and agent-friendly Markdown 404 protocol verified
in Cognify's local Vite dev/preview server (`src/server/agentNegotiation.ts`).

## Deploy to Cloudflare Workers (Recommended)

```bash
cd edge
npx wrangler login
npx wrangler deploy
```

Then attach your custom domain (for example `cognify.study`) in the Cloudflare dashboard or via
`routes` in `edge/wrangler.toml`.

## Verify Live Endpoints

```bash
# 1. Homepage Markdown negotiation (expect HTTP 200, Content-Type: text/markdown, Vary: Accept)
curl -sS -L -i -H 'Accept: text/markdown' https://your-domain.example/

# 2. Homepage HTML response (expect HTTP 200, Content-Type: text/html, Vary: Accept)
curl -sS -L -i -H 'Accept: text/html' https://your-domain.example/

# 3. Agent-friendly 404 (expect HTTP 404, Content-Type: text/markdown, Vary: Accept, links to /docs, /sitemap.xml, /llms.txt)
curl -sS -L -i -H 'Accept: text/markdown' https://your-domain.example/some-path-that-does-not-exist
```
