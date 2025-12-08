import { test, expect } from '@playwright/test';

test('Negative test - incorrect login shows no redirect', async ({ page }) => {
  await page.goto('https://www.w3schools.com/howto/howto_css_login_form.asp');

  // Wrong credentials
  await page.getByPlaceholder('Enter Username').fill('notAUser');
  await page.getByPlaceholder('Enter Password').fill('wrongpass');
  await page.getByRole('button', { name: 'Login' }).click();

  // Expect to remain on the same URL (form validation fails)
  await expect(page).toHaveURL(/howto_css_login_form/);

  // Check button still visible (meaning login didn’t redirect)
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
