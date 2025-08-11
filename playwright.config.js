// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  timeout: 30 * 1000,
  retries: 1,
  use: {
    headless: true,
    baseURL: 'https://www.eventbookings.com',
    actionTimeout: 10 * 1000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'mobile', use: { ...devices['Pixel 5'] } },
  ],
};