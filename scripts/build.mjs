import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  rmSync,
  cpSync,
  existsSync,
} from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import {
  loadCatalog,
  parseDocument,
  renderMarkdown,
  escapeHtml as e,
} from './content.mjs';
import { copy, languages, learningPaths, referencePages } from './i18n.mjs';
import {
  header,
  sidebar,
  footer,
  homeBody,
  readerBody,
  site,
} from './components.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = readFileSync(path.join(root, 'index.html'), 'utf8');
const chapters = loadCatalog(root);
rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
const urls = [];
function write(name, value) {
  const file = path.join(dist, name);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, value);
}
function frame(lang, prefix, body, options) {
  const { title, description, pagePath, alternatePaths, page, chapter } =
    options;
  const alternates = Object.fromEntries(
    languages.map((l) => [l, `${prefix}${alternatePaths[l]}`]),
  );
  const data = {
    lang,
    root: prefix,
    labels: copy[lang],
    paths: learningPaths,
    chapters: chapters.map((c) => ({
      id: c.id,
      slug: c.slug,
      track: c.track,
      title: c.locales[lang].title,
      ...(page === 'home' ? { search: c.locales[lang].source } : {}),
    })),
  };
  const values = {
    lang,
    root: prefix,
    body,
    page,
    chapter: chapter?.id || '',
    title: e(title),
    description: e(description),
    canonical: site + pagePath,
    skip: copy[lang].skip,
    alternates: languages
      .map(
        (l) =>
          `<link rel="alternate" hreflang="${l}" href="${site}${alternatePaths[l]}">`,
      )
      .join('\n  '),
    header: header(lang, prefix, alternates),
    sidebar: sidebar(lang, prefix, chapter),
    footer: footer(lang, prefix),
    data: JSON.stringify(data)
      .replace(/</g, '\\u003c')
      .replace(/>/g, '\\u003e')
      .replace(/&/g, '\\u0026'),
  };
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    if (!(key in values)) throw new Error(`Missing template key ${key}`);
    return values[key];
  });
}
for (const lang of languages) {
  const name = `${lang}/index.html`;
  write(
    name,
    frame(lang, '../', homeBody(lang, '../', chapters), {
      title: `AI for Everyone — ${lang === 'de' ? 'KI verstehen und anwenden' : 'Understand and build AI'}`,
      description: copy[lang].intro,
      pagePath: name,
      alternatePaths: { de: 'de/index.html', en: 'en/index.html' },
      page: 'home',
    }),
  );
  urls.push(name);
  for (const c of chapters) {
    const doc = c.locales[lang],
      rendered = renderMarkdown(doc.body),
      name = `docs/${lang}/${c.slug}.html`;
    write(
      name,
      frame(
        lang,
        '../../',
        readerBody(doc, lang, '../../', rendered, c, chapters, c.slug),
        {
          title: `${doc.title} · AI for Everyone`,
          description: doc.description,
          pagePath: name,
          alternatePaths: {
            de: `docs/de/${c.slug}.html`,
            en: `docs/en/${c.slug}.html`,
          },
          page: 'chapter',
          chapter: c,
        },
      ),
    );
    urls.push(name);
  }
  for (const slug of [...referencePages, 'README']) {
    const doc = parseDocument(
      readFileSync(path.join(root, 'docs', lang, `${slug}.md`), 'utf8'),
    );
    const name = `docs/${lang}/${slug}.html`;
    write(
      name,
      frame(
        lang,
        '../../',
        readerBody(
          doc,
          lang,
          '../../',
          renderMarkdown(doc.body),
          null,
          chapters,
          slug,
        ),
        {
          title: `${doc.title} · AI for Everyone`,
          description: doc.description,
          pagePath: name,
          alternatePaths: {
            de: `docs/de/${slug}.html`,
            en: `docs/en/${slug}.html`,
          },
          page: 'reference',
        },
      ),
    );
    urls.push(name);
  }
}
write(
  'index.html',
  frame('de', '', homeBody('de', '', chapters), {
    title: 'AI for Everyone — KI verstehen und anwenden',
    description: copy.de.intro,
    pagePath: 'de/index.html',
    alternatePaths: { de: 'de/index.html', en: 'en/index.html' },
    page: 'home',
  }),
);
write(
  '404.html',
  `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found · AI for Everyone</title><link rel="stylesheet" href="${site}assets/style.css"><body><main class="not-found"><p class="eyebrow">AI FOR EVERYONE · 404</p><h1>Page not found.<br>Seite nicht gefunden.</h1><p>Choose your learning space. Wähle deinen Lernbereich.</p><a class="button primary" href="${site}de/index.html">Deutsch →</a> <a class="button" href="${site}en/index.html">English →</a></main></body></html>`,
);
cpSync(path.join(root, 'assets'), path.join(dist, 'assets'), {
  recursive: true,
});
cpSync(path.join(root, 'docs'), path.join(dist, 'docs'), { recursive: true });
cpSync(path.join(root, 'examples'), path.join(dist, 'examples'), {
  recursive: true,
});
for (const file of [
  'README.md',
  'README.de.md',
  'CONTRIBUTING.md',
  'CONTRIBUTING.de.md',
  'ROADMAP.md',
  'WEBSITE.md',
])
  if (existsSync(path.join(root, file)))
    cpSync(path.join(root, file), path.join(dist, file));
write('.nojekyll', '');
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${site}${url}</loc></url>`).join('')}</urlset>\n`,
);
write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${site}sitemap.xml\n`);
console.log(
  `Built ${chapters.length} chapters × ${languages.length} languages, ${referencePages.length + 1} reference pages per language, and both homepages in dist/.`,
);
