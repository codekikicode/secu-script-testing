import { test, expect } from '@playwright/test';

test('UI interaction test', async ({ page }) => {
  await page.goto('https://www.w3schools.com/howto/howto_css_login_form.asp');

  // Open modal
  await page.locator('#myBtn').click();

  const username = page.locator('#uname');
  const password = page.locator('#psw');

  // Interactions
  await username.click();
  await username.fill('interactionUser');

  await password.click();
  await password.fill('interactionPass');

  // Click Login
  await page.locator("button.w3-button.w3-green").click();

  // Expect modal still present (no redirect)
  await expect(page.locator('#id01')).toBeVisible();
});

