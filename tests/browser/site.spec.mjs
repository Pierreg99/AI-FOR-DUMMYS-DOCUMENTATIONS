import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const first = 'docs/de/01-ai-fundamentals.html';
test('bilingual home, full text search, filters and safe empty state', async ({
  page,
}) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('de/index.html');
  await expect(page.locator('.chapter-card:visible')).toHaveCount(36);
  await page.locator('#search').fill('Idempotenzkennung');
  await expect(page.locator('.chapter-card:visible')).toHaveCount(1);
  await expect(page.locator('.chapter-card:visible')).toHaveAttribute(
    'data-id',
    '17',
  );
  await page.locator('#search').fill('<img src=x onerror=alert(1)>');
  await expect(page.locator('#empty-state')).toBeVisible();
  await page.locator('#empty-state [data-clear-filters]').click();
  await page.locator('[data-filter="5"]').click();
  await expect(page.locator('.chapter-card:visible')).toHaveCount(6);
  await page.locator('.languages a[lang=en]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('.chapter-card:visible')).toHaveCount(6);
  expect(errors).toEqual([]);
});
test('learning paths, bookmark filtering and language-independent persistence', async ({
  page,
}) => {
  await page.goto('de/index.html');
  await page.locator('[data-path="1"]').click();
  await expect(page.locator('.chapter-card:visible')).toHaveCount(10);
  await page.locator('.chapter-card[data-id="7"] [data-bookmark]').click();
  await page.locator('#bookmarks-only').check();
  await expect(page.locator('.chapter-card:visible')).toHaveCount(1);
  await page.reload();
  await expect(page.locator('.chapter-card:visible')).toHaveCount(1);
  await page.goto('en/index.html?bookmarks=1');
  await expect(page.locator('.chapter-card:visible')).toHaveCount(1);
  await expect(page.locator('[data-bookmark="7"]')).toHaveAttribute(
    'aria-pressed',
    'true',
  );
});
test('deep reader links, translations, exercise answers and progress', async ({
  page,
}) => {
  await page.goto(first);
  await expect(page.locator('h1')).toHaveText('KI-Grundlagen');
  await page.locator('[data-complete]').click();
  await expect(page.locator('[data-complete]')).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.locator('.languages a[lang=en]').click();
  await expect(page).toHaveURL(/docs\/en\/01-ai-fundamentals\.html/);
  await expect(page.locator('[data-complete]')).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.locator('details.answer summary').click();
  await expect(page.locator('details.answer')).toHaveAttribute('open', '');
  await page.reload();
  await expect(page.locator('[data-complete]')).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.locator('.chapter-pagination a').last().click();
  await expect(page.locator('h1')).toHaveText(
    'Machine learning and deep learning',
  );
});
test('theme persistence, responsive layout and mobile menu', async ({
  page,
  isMobile,
}) => {
  await page.goto('de/index.html');
  const before = await page.locator('html').getAttribute('data-theme');
  await page.locator('[data-theme-toggle]').click();
  await page.reload();
  expect(await page.locator('html').getAttribute('data-theme')).not.toBe(
    before,
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  if (isMobile) {
    await page.locator('[data-menu]').click();
    await expect(page.locator('#sidebar')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.locator('[data-menu]')).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    await expect(page.locator('#sidebar')).not.toBeVisible();
  }
  await page.goto('docs/en/36-ai-product-engineering.html');
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
test('architecture explorer and calculators validate inputs', async ({
  page,
}) => {
  await page.goto('en/index.html');
  await page.locator('#lab-tab-1').click();
  await page.locator('.lab-step').nth(1).click();
  await expect(page.locator('#lab-detail')).toContainText(
    'Enforce permissions',
  );
  await page.locator('#lab-tab-1').focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#lab-tab-2')).toHaveAttribute(
    'aria-selected',
    'true',
  );
  await expect(page.locator('#cost-result')).toHaveText('0.008');
  await expect(page.locator('#reliability-result')).toHaveText('59.9%');
  await page.locator('#input-tokens').fill('-1');
  await expect(page.locator('#cost-result')).toContainText('valid values');
  await page.locator('#input-tokens').fill('0');
  await page.locator('#output-tokens').fill('0');
  await expect(page.locator('#cost-result')).toHaveText('0');
  await page.locator('#probability').fill('100');
  await expect(page.locator('#reliability-result')).toHaveText('100%');
  await page.locator('#steps').fill('0');
  await expect(page.locator('#reliability-result')).toContainText(
    'valid values',
  );
});
test('blocked and malformed storage do not break reading or interactions', async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new DOMException('Blocked', 'SecurityError');
      },
    });
  });
  await page.goto(first);
  await page.locator('[data-complete]').click();
  await expect(page.locator('[data-complete]')).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await expect(page.locator('h1')).toBeVisible();
  await page.goto('de/index.html');
  await page.locator('#search').fill('RAG');
  await expect(page.locator('#result-count')).not.toHaveText(
    '0 Kapitel gefunden',
  );
});
test('core content and chapter navigation work without JavaScript', async ({
  browser,
  baseURL,
  isMobile,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: isMobile ? 390 : 1440, height: 1000 },
  });
  const page = await context.newPage();
  await page.goto(new URL('en/index.html', baseURL).href);
  await expect(page.locator('.chapter-card:visible')).toHaveCount(36);
  await page.locator('.chapter-card[data-id="1"] h3 a').click();
  await expect(page.locator('h1')).toHaveText('AI fundamentals');
  await expect(page.locator('.prose')).toContainText('Worked example');
  await page.locator('.languages a[lang=de]').click();
  await expect(page.locator('h1')).toHaveText('KI-Grundlagen');
  await context.close();
});
test('home and reader meet automated WCAG accessibility checks in both themes', async ({
  page,
}) => {
  for (const route of ['de/index.html', 'docs/en/16-formulas.html']) {
    await page.goto(route);
    for (const theme of ['light', 'dark']) {
      await page.evaluate(
        (theme) => (document.documentElement.dataset.theme = theme),
        theme,
      );
      const scan = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();
      expect(
        scan.violations.map((v) => ({
          id: v.id,
          description: v.description,
          nodes: v.nodes.map((n) => n.target),
        })),
      ).toEqual([]);
    }
  }
});

test('backup import merges valid progress and rejects malformed files', async ({
  page,
  isMobile,
}) => {
  await page.goto('en/index.html');
  await page.locator('[data-bookmark="1"]').click();
  const backup = JSON.stringify({
    app: 'ai-for-everyone',
    version: 1,
    progress: { version: 2, completed: [2], bookmarks: [3], last: 2 },
  });
  await page.locator('#progress-import').setInputFiles({
    name: 'progress.json',
    mimeType: 'application/json',
    buffer: Buffer.from(backup),
  });
  await expect(page.locator('[data-bookmark="1"]')).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await expect(page.locator('[data-bookmark="3"]')).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.locator('#progress-import').setInputFiles({
    name: 'invalid.json',
    mimeType: 'application/json',
    buffer: Buffer.from('{}'),
  });
  await page.reload();
  await expect(page.locator('[data-bookmark="3"]')).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  if (isMobile) await page.locator('[data-menu]').click();
  await page.locator('.progress-card details summary').click();
  const download = page.waitForEvent('download');
  await page.locator('[data-export-progress]').click();
  expect((await download).suggestedFilename()).toBe(
    'ai-for-everyone-progress.json',
  );
});
test('reading focus and shared filter URLs work in both languages', async ({
  page,
}) => {
  await page.goto('de/index.html?track=5');
  await page.locator('.languages a[lang=en]').click();
  await expect(page.locator('.chapter-card:visible')).toHaveCount(6);
  await page.goto(first);
  await page.locator('[data-focus]').click();
  await expect(page.locator('body')).toHaveClass(/reading-focus/);
  await expect(page.locator('[data-focus]')).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.keyboard.press('f');
  await expect(page.locator('[data-focus]')).toHaveAttribute(
    'aria-pressed',
    'false',
  );
  await page.setViewportSize({ width: 320, height: 700 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
