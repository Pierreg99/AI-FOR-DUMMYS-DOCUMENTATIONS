# Language architecture

Every numbered chapter has its canonical German Markdown source at `docs/de/{slug}.md` and its canonical English source at `docs/en/{slug}.md`. The ordered metadata lives in `data/chapters.json`. Both editions share chapter numbers, technical coverage, examples, exercises, limits, and references. Localized titles and summaries are read directly from the Markdown. German and English index, quick-start, glossary, sources, and projects pages follow the same directory structure.

Legacy root Markdown files and the original first 24 chapters in `docs/` point to the canonical locations; these links are deliberately preserved. The V1.2 index files point to the current full indexes. New links should target the canonical editions.

The build outputs HTML in `dist/docs/de/` and `dist/docs/en/`, with stable translation links between matched chapters. The site has no runtime translation service. A content check verifies all pairs, structural sections, and local links.
