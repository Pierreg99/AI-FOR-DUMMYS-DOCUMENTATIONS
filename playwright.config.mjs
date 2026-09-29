import { defineConfig, devices } from '@playwright/test';
const base = process.env.TEST_BASE_PATH || '';
export default defineConfig({
  testDir: 'tests/browser',
  timeout: 30000,
  fullyParallel: true,
  workers: process.env.CI ? 2 : 3,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: `http://127.0.0.1:4173${base}/`,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: process.env.CHROMIUM_EXECUTABLE
      ? {
          executablePath: process.env.CHROMIUM_EXECUTABLE,
          args: ['--no-sandbox', '--disable-dev-shm-usage'],
        }
      : {},
  },
  projects: [
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 1000 },
      },
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 7'], defaultBrowserType: 'chromium' },
    },
  ],
  webServer: {
    command: 'node scripts/serve.mjs',
    url: `http://127.0.0.1:4173${base}/`,
    reuseExistingServer: !process.env.CI,
    env: { BASE_PATH: base },
    timeout: 10000,
  },
});
