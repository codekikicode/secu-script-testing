import { test, expect } from '@playwright/test';

test('End-to-end login workflow', async ({ page }) => {
  // Open the login page
  await page.goto('https://www.w3schools.com/howto/howto_css_login_form.asp');

  // Attempt login
  await page.getByPlaceholder('Enter Username').fill('admin');
  await page.getByPlaceholder('Enter Password').fill('password123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Validate that the user is still on the same page.
  await expect(page).toHaveURL(/howto_css_login_form/);

  // Retrieve page title to indicate success
  const title = await page.title();
  console.log('Page title after login flow:', title);

  await expect(title).toMatch(/Login/i);
});
