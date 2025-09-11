import { test, expect } from '@playwright/test';

test('HN loads', async ({ page }) => {
  await page.goto('https://news.ycombinator.com/newest');
  await expect(page).toHaveTitle(/Hacker News/i);
});
