import { test, expect } from '@playwright/test';

test('Form validation test', async ({ page }) => {
  // Navigate
  await page.goto('https://www.w3schools.com/howto/howto_css_login_form.asp');

  // Open the modal login form
  await page.locator('#myBtn').click();

  // Fill username + password inside modal
  const username = page.locator('#uname');
  const password = page.locator('#psw');

  await expect(username).toBeVisible();
  await expect(password).toBeVisible();

  await username.fill('wronguser');
  await password.fill('wrongpass');

  // Click login inside modal
  await page.locator("button.w3-button.w3-green").click();

  // Validate: login does NOT redirect
  await expect(page).toHaveURL(/howto_css_login_form/);
});
