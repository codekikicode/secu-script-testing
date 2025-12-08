import { test, expect } from '@playwright/test';

test('End-to-end login workflow', async ({ page }) => {
  await page.goto('https://www.w3schools.com/howto/howto_css_login_form.asp');

  // 1. Open the modal first
  await page.locator('#myBtn').click();

  // 2. Locate modal inputs
  const username = page.locator('#uname');
  const password = page.locator('#psw');

  // 3. Ensure they're visible
  await expect(username).toBeVisible();
  await expect(password).toBeVisible();

  // 4. Enter credentials
  await username.fill('admin');
  await password.fill('password123');

  // 5. Click Login button inside modal
  await page.locator('button.w3-button.w3-green').click();

  // 6. Validate: W3Schools DOES NOT navigate on login
  await expect(page).toHaveURL(/howto_css_login_form/);
});
