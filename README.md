# AI for Everyone — learn, build, and question AI

**An open learning guide in English and German.** Explore 36 matched chapters, from machine learning and language models to RAG, agents, security, evaluation, and production engineering. Every chapter includes a worked example, a failure mode, an exercise with an answer, and links to primary reading.

[Open the English learning site](https://pierreg99.github.io/AI-FOR-Everyone-Learn-Docs/en/) · [Deutsch lesen](README.de.md) · [Deutsche Website öffnen](https://pierreg99.github.io/AI-FOR-Everyone-Learn-Docs/de/)

The website works as a static GitHub Pages site. It has no account, analytics service, external font dependency, or runtime API. Reading progress and bookmarks stay in the current browser. All chapters and navigation remain readable when JavaScript is disabled; search, interactive tools, and saved progress require JavaScript.

## Find your starting point

- **Understand AI:** chapters 1–6 cover models, learning, Transformers, language models, generative AI, and RAG.
- **Build agents:** chapters 7–9, 14–15, 17, 24, 27, and 29–30 connect tools, context, permissions, runtime design, and tests.
- **Operate systems:** chapters 19–23, 25–26, 31–32, and 34–36 address observability, data, serving, recovery, evaluation, privacy, and costs.

The other chapters deepen architectures and research boundaries. AGI and ASI are capability and hypothetical future concepts; they are not guaranteed engineering milestones.

[English chapter index](docs/en/README.md) · [German chapter index](docs/de/README.md) · [Quick start](docs/en/getting-started.md) · [Glossary](docs/en/glossary.md) · [Sources](docs/en/sources.md) · [Practice projects](docs/en/projects.md)

## Run the website locally

Node.js 22+ and npm are required for the build. Python 3.10+ is required only for the optional examples.

```sh
npm ci
npm run check
npm run dev
```

Open `http://127.0.0.1:4173/`. The `dist/` folder contains the complete deployable site; no Node.js process is needed on GitHub Pages. After editing a chapter, run `npm run build` again. Browser tests can be run with `npx playwright install chromium && npm run test:e2e` where browser downloads are available.

See [WEBSITE.md](WEBSITE.md) for the file layout and deployment, [CONTRIBUTING.md](CONTRIBUTING.md) for editing guidelines, and [ROADMAP.md](ROADMAP.md) for completed work and open opportunities. Previous V1.2 entry points and chapter URLs remain as pointers to the current editions.
