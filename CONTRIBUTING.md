# Contributing to AI for Everyone

Thank you for improving the guide. Please keep German and English editions synchronized in chapter number, technical scope, examples, exercises, limitations, and sources. Natural phrasing can differ.

## Edit a chapter

1. Locate the pair `docs/de/{slug}.md` and `docs/en/{slug}.md`. Edit both together. The first heading is its title; the next standalone paragraph is the summary displayed in the library.
2. Keep a learning goal, an explained concept, a worked example, limits or failure modes, an exercise with an answer, primary sources, and the next/previous navigation. Distinguish observed engineering behavior from assumptions or research speculation.
3. For a new chapter, add its number, slug, track (0–5), and valid prerequisite IDs to `data/chapters.json`. Update both index files, learning paths if appropriate, and the source Markdown navigation. Existing slugs are stable links.
4. Run `npm ci && npm run check` and, when Chromium is available, `npx playwright install chromium && npm run test:e2e`. Check both languages on a narrow screen.

If a source or standard can change, link to the official documentation or original paper and avoid unqualified version-specific claims. Prices in exercises must be labeled assumptions, not vendor quotes. Do not include API keys, customer data, or unnecessary personal information in examples. Preserve the reading experience without JavaScript.

The website is generated into `dist/`, which is deliberately excluded from Git. Submit source files, not the generated output. Describe the reader-facing change and any test results in a pull request.
