# Website architecture

`index.html` is the HTML template. `scripts/build.mjs` reads the ordered chapter manifest in `data/chapters.json`, both canonical Markdown editions in `docs/de/` and `docs/en/`, plus four reference pages and the language indexes. It writes static HTML into ignored `dist/`, copies source Markdown and local assets, and generates a sitemap, `robots.txt`, `.nojekyll`, and a 404 page. No runtime content API is used.

The English and German landing pages live at `dist/en/index.html` and `dist/de/index.html`. `dist/index.html` also renders the German home for the repository root. The article paths are `dist/docs/{de,en}/{slug}.html`; deep links, translated counterparts, Markdown source links, prev/next, and prerequisites are generated at build time. The source chapter slugs remain in the manifest for stable URLs.

`assets/style.css` provides responsive light/dark styling and print layout. `assets/app.js`, `core.js`, and `lab-data.js` add local search, filters, progress, bookmarks, the architecture explorer, and illustrative cost/reliability calculators. State is stored in `localStorage` under a versioned key, with a session-only fallback if browser storage is unavailable. No personal data is sent by the site.

## Build and validation

```sh
npm ci
npm run check
npx playwright install chromium
npm run test:e2e
```

`npm run check` builds and verifies language coverage, source links, generated routes, anchors, renderer safety, calculations, and runnable examples. Browser tests cover mobile and desktop navigation, language switching, persistence, no-JavaScript reading, calculations, and automated accessibility checks. Run `npm run dev` for a local preview on `127.0.0.1:4173`.

The Pages workflow builds on `main` and uploads **only `dist/`**. It requires GitHub Pages to be configured for **GitHub Actions** as the deployment source. The repository Pages URL is `https://pierreg99.github.io/AI-FOR-Everyone-Learn-Docs/`. A separate CI workflow validates pull requests and commits.
