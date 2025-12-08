import { test, expect } from '@playwright/test';

test('Example.com navigation flow', async ({ page }) => {
  // Load homepage
  await page.goto('https://example.com/');
  await expect(page).toHaveTitle(/Example Domain/);

  // Click "More information" link
  await page.getByRole('link', { name: 'Learn more' }).click();
  await expect(page).toHaveURL('https://www.iana.org/help/example-domains');

  // Go back to homepage
  await page.goBack();
  await expect(page).toHaveURL('https://example.com/');

  // Refresh page
  await page.reload();
  await expect(page).toHaveTitle(/Example Domain/);
});
