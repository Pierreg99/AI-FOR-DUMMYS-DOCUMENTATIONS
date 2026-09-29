import { readFileSync } from 'node:fs';
import { Marked } from 'marked';

export const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ],
  );
export const slugify = (value) =>
  value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-|-$/g, '');
export function safeHref(href) {
  if (/^[\s]*[a-z][a-z\d+.-]*:/i.test(href) && !/^https?:\/\//i.test(href))
    throw new Error(`Unsupported link scheme: ${href}`);
  if (/[\\\u0000-\u001f]/.test(href) || href.startsWith('//'))
    throw new Error(`Unsafe link: ${href}`);
  return href;
}
export function parseDocument(source) {
  const match = source.trim().match(/^# ([^\n]+)\n\n([^\n]+)\n+([\s\S]*)$/);
  if (!match)
    throw new Error('Documents need an H1, one-paragraph summary, and body.');
  return {
    title: match[1],
    description: match[2],
    body: match[3],
    source,
    minutes: Math.max(1, Math.ceil(source.split(/\s+/).length / 180)),
  };
}
export function renderMarkdown(markdown) {
  const toc = [],
    used = new Map();
  const parser = new Marked({
    gfm: true,
    renderer: {
      html({ text }) {
        return escapeHtml(text);
      },
      image() {
        throw new Error(
          'Use reviewed local assets in site templates rather than Markdown images.',
        );
      },
      link({ href, title, tokens }) {
        safeHref(href);
        const url = href.replace(/\.md(?=$|[?#])/g, '.html');
        return `<a href="${escapeHtml(url)}"${title ? ` title="${escapeHtml(title)}"` : ''}>${this.parser.parseInline(tokens)}</a>`;
      },
      heading({ tokens, depth, text }) {
        const base = slugify(text),
          count = used.get(base) || 0;
        used.set(base, count + 1);
        const id = `${base}${count ? `-${count}` : ''}`;
        if (depth === 2) toc.push({ id, text: text.replace(/[*`]/g, '') });
        return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}</h${depth}>\n`;
      },
      table({ header, rows }) {
        const cell = (c, tag) =>
          `<${tag}${tag === 'th' ? ' scope="col"' : ''}>${this.parser.parseInline(c.tokens)}</${tag}>`;
        return `<div class="table-scroll" role="region" tabindex="0" aria-label="Table"><table><thead><tr>${header.map((c) => cell(c, 'th')).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((c) => cell(c, 'td')).join('')}</tr>`).join('')}</tbody></table></div>`;
      },
    },
  });
  let html = parser.parse(markdown);
  html = html.replace(
    /<h2 id="((?:losung-und-selbstkontrolle|answer-and-self-check))">([^<]+)<\/h2>([\s\S]*?)(?=<h2|$)/g,
    '<details class="answer" id="$1"><summary>$2</summary>$3</details>',
  );
  return { html, toc };
}
export function loadCatalog(root) {
  const chapters = JSON.parse(
    readFileSync(`${root}/data/chapters.json`, 'utf8'),
  );
  for (const chapter of chapters) {
    chapter.locales = Object.fromEntries(
      ['de', 'en'].map((lang) => [
        lang,
        parseDocument(
          readFileSync(`${root}/docs/${lang}/${chapter.slug}.md`, 'utf8'),
        ),
      ]),
    );
  }
  return chapters;
}
