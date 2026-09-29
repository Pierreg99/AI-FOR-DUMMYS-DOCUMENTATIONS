import { readFileSync } from 'node:fs';
const { version } = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
);
const base =
  process.env.SITE_URL ||
  'https://pierreg99.github.io/AI-FOR-Everyone-Learn-Docs/';
const targets = [
  ['', 'de'],
  ['de/', 'de'],
  ['en/', 'en'],
  ['docs/de/01-ai-fundamentals.html', 'de'],
  ['docs/en/01-ai-fundamentals.html', 'en'],
];
for (let attempt = 1; attempt <= 6; attempt++) {
  try {
    for (const [route, lang] of targets) {
      const response = await fetch(new URL(route, base), {
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok)
        throw new Error(`${route || '/'}: HTTP ${response.status}`);
      const html = await response.text();
      if (
        !html.includes(`<html lang="${lang}">`) ||
        !html.includes(`<meta name="afe-version" content="${version}"`) ||
        !html.includes('id="site-data"')
      )
        throw new Error(
          `${route || '/'} is not the generated ${lang} site for ${version}. Check Settings → Pages → Source: GitHub Actions.`,
        );
    }
    for (const asset of ['assets/style.css', 'assets/app.js']) {
      const response = await fetch(new URL(asset, base), {
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok || (await response.text()).length < 100)
        throw new Error(`Missing asset: ${asset}`);
    }
    console.log(
      `Verified release ${version}: both languages, root, chapter routes and assets.`,
    );
    process.exit(0);
  } catch (error) {
    console.error(`Attempt ${attempt}/6: ${error.message}`);
    if (attempt === 6) process.exit(1);
    await new Promise((resolve) => setTimeout(resolve, 10000));
  }
}
