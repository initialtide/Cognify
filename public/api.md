# Cognify Curriculum API Reference

> OpenAPI 3.1.0 read-only JSON and Markdown API for Cognify's 51 GCSE, IGCSE, and A-Level courses across AQA, Edexcel, OCR A, OCR B, CCEA, WJEC, SQA National 5, CIE, Edexcel International, Oxford AQA.

**Base URL:** https://initialtide.github.io/Cognify
**OpenAPI Spec:** [https://initialtide.github.io/Cognify/api/openapi.json](https://initialtide.github.io/Cognify/api/openapi.json)
**Catalog Endpoint:** [https://initialtide.github.io/Cognify/api/v1/courses.json](https://initialtide.github.io/Cognify/api/v1/courses.json)

## Endpoints

### `GET /api/v1/courses.json`
Returns the full structured list of courses, qualifications, exam boards, tiers, topic titles, subtopic IDs, past paper counts, canonical HTML URLs, and Markdown URLs.

### `GET /api/openapi.json`
Returns the complete OpenAPI 3.1.0 document describing Cognify's public read-only API schemas.

### `GET /.well-known/mcp.json`
Returns the Model Context Protocol (MCP) tool & resource discovery manifest.

### `GET /llms.txt` and `GET /llms-full.txt`
Returns LLM-optimised Markdown instructions and full curriculum context.

## Related Resources

- [Cognify API & Developer Documentation](https://initialtide.github.io/Cognify/docs)
- [Cognify MCP Server & Agent Tools](https://initialtide.github.io/Cognify/mcp)
- [GitHub Repository](https://github.com/initialtide/Cognify)
