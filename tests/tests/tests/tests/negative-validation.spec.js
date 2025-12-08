import { test, expect } from '@playwright/test';

test('Negative login shows no redirect', async ({ page }) => {
  await page.goto('https://www.w3schools.com/howto/howto_css_login_form.asp');

  // Open the modal
  await page.locator('#myBtn').click();

  await page.locator('#uname').fill('notAUser');
  await page.locator('#psw').fill('wrongpass');
  await page.locator("button.w3-button.w3-green").click();

  await expect(page).toHaveURL(/howto_css_login_form/);
});
