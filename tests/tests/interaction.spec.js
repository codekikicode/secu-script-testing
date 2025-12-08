import { test, expect } from '@playwright/test';

test('UI interaction test', async ({ page }) => {
  await page.goto('https://www.w3schools.com/howto/howto_css_login_form.asp');

  // Hover over the login button (visual interaction)
  await page.getByRole('button', { name: 'Login' }).hover();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

  // Click to open the modal login box
  await page.getByRole('button', { name: 'Login' }).click();

  // Fill fields with text
  await page.getByPlaceholder('Enter Username').fill('blueUser');
  await page.getByPlaceholder('Enter Password').fill('bluePass123');

  // Clear + retype to simulate user error then correction
  await page.getByPlaceholder('Enter Username').clear();
  await page.getByPlaceholder('Enter Username').fill('correctUser');

  // Toggle show/hide password if the demo supports it
  // If the site lacks this, it's ignored — no crash.
  const passwordInput = page.getByPlaceholder('Enter Password');
  await expect(passwordInput).toBeEditable();

  // Final click
  await page.getByRole('button', { name: 'Login' }).click();
});
