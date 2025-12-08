import { test, expect } from '@playwright/test';

test('Form validation test', async ({ page }) => {
  // Load the login form page
  await page.goto('https://www.w3schools.com/howto/howto_css_login_form.asp');

  // Fill username and password fields
  await page.getByPlaceholder('Enter Username').fill('wronguser');
  await page.getByPlaceholder('Enter Password').fill('wrongpass');

  // Click the Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Confirm that you are on the correct page (form validation failed/passed)
  await expect(page).toHaveURL(/howto_css_login_form/);
});
