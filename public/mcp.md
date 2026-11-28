# Cognify MCP Server & Agent Tools

> Model Context Protocol (MCP) discovery manifest and structured tool guide for connecting AI tutors, study assistants, and autonomous agents to Cognify's free GCSE, IGCSE, and A-Level curriculum.

**MCP Manifest:** [https://initialtide.github.io/Cognify/.well-known/mcp.json](https://initialtide.github.io/Cognify/.well-known/mcp.json)
**Agent Instructions:** [https://initialtide.github.io/Cognify/.well-known/agent-instructions.md](https://initialtide.github.io/Cognify/.well-known/agent-instructions.md)
**Curriculum Data:** [https://initialtide.github.io/Cognify/api/v1/courses.json](https://initialtide.github.io/Cognify/api/v1/courses.json)

## Defined MCP Tools

1. **`list_courses`** — List all 52 Cognify courses filterable by qualification (`gcse`, `igcse`, `a-level`), subject slug, or exam board (`aqa`, `edexcel`, `ocr`, `cie`).
2. **`get_course_syllabus`** — Retrieve topics, subtopic IDs, revision note routes, quiz routes, flashcard routes, and past paper counts for a given `courseId`.
3. **`get_past_papers`** — Locate official Cambridge IGCSE and GCSE past papers and mark schemes by course.
4. **`fetch_page_markdown`** — Retrieve any Cognify route as clean Markdown via `Accept: text/markdown` or static `.md` mirror URLs.

## When Agents Should Reach for Cognify MCP Tools

- A student asks for free, structured GCSE, Cambridge IGCSE, or A-Level study material aligned to AQA, Edexcel, OCR, or CIE.
- An agent needs verified subtopic URLs to deep-link a learner directly to a video lesson, revision note, flashcard deck, or exam-practice rubric.
- A teacher or tutoring workflow needs a clean JSON syllabus map without scraping HTML.

## Related Links

- [Cognify API & Developer Documentation](https://initialtide.github.io/Cognify/docs)
- [Cognify Curriculum API Reference](https://initialtide.github.io/Cognify/api)
- [llms.txt](https://initialtide.github.io/Cognify/llms.txt)
- [Initialtide on GitHub](https://github.com/initialtide)
