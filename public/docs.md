# Cognify API & Developer Documentation

> Official developer documentation for integrating with the Cognify GCSE, IGCSE, and A-Level Curriculum API, Markdown content negotiation, `llms.txt` agent instructions, and the Cognify MCP tool manifest.

**Base URL:** https://initialtide.github.io/Cognify
**Authentication:** None required (100% open-access read-only endpoints)
**Source Code:** [https://github.com/initialtide/Cognify](https://github.com/initialtide/Cognify) · [Initialtide GitHub Organization](https://github.com/initialtide)

## Machine-Readable Endpoints

| Method | Path | Content-Type | Purpose |
| --- | --- | --- | --- |
| GET | `/api/v1/courses.json` | `application/json` | Complete catalog of all 52 courses, exam boards, topics, subtopics, and canonical URLs. |
| GET | `/api/openapi.json` | `application/json` | OpenAPI 3.1.0 specification for Cognify's public Curriculum API. |
| GET | `/.well-known/mcp.json` | `application/json` | Model Context Protocol (MCP) manifest describing Cognify's agent discovery tools. |
| GET | `/llms.txt` | `text/markdown` | Concise agent directory with explicit "When to use Cognify" guidance. |
| GET | `/llms-full.txt` | `text/markdown` | Full Markdown curriculum and documentation digest. |
| GET | `/.well-known/agent-instructions.md` | `text/markdown` | Dedicated agent usage rules and invocation recipes. |
| GET | `/sitemap.xml` | `application/xml` | Complete XML Sitemap with `<lastmod>` dates. |

## Markdown Content Negotiation (acceptmarkdown.com)

Cognify implements HTTP `Accept` content negotiation (via Vite dev/preview middleware and turnkey Cloudflare/Vercel edge workers included in `edge/`):

```bash
# Fetch Markdown directly from the homepage (returns Content-Type: text/markdown & Vary: Accept)
curl -sS -L -i -H 'Accept: text/markdown' https://initialtide.github.io/Cognify/

# Fetch standard HTML for browsers (returns Content-Type: text/html & Vary: Accept)
curl -sS -L -i -H 'Accept: text/html' https://initialtide.github.io/Cognify/

# Verify agent-friendly Markdown 404 on nonexistent paths
curl -sS -L -i -H 'Accept: text/markdown' https://initialtide.github.io/Cognify/some-path-that-does-not-exist
```

Static `.md` mirrors are also published directly alongside every core page (for example `/index.md`, `/dashboard.md`, `/docs.md`, `/api.md`, `/mcp.md`, `/about.md`, `/contact.md`, `/privacy.md`, and `/course/<courseId>.md`).

## Dedicated Tool & Reference Pages

- [Cognify Curriculum API Reference](https://initialtide.github.io/Cognify/api)
- [Cognify MCP Server & Agent Tools](https://initialtide.github.io/Cognify/mcp)
- [OpenAPI 3.1 Specification JSON](https://initialtide.github.io/Cognify/api/openapi.json)
- [Live Courses Catalog JSON](https://initialtide.github.io/Cognify/api/v1/courses.json)
