import { test, expect } from '@playwright/test';

test('Page health check', async ({ page }) => {
  await page.goto('https://www.w3schools.com/howto/howto_css_login_form.asp');

  // Validate core UI components exist
  await expect(page.getByText('Login Form')).toBeVisible();
  await expect(page.getByPlaceholder('Enter Username')).toBeEditable();
  await expect(page.getByPlaceholder('Enter Password')).toBeEditable();

  // CI-style "artifact check": Verify that page loaded content
  const bodyContent = await page.locator('body').innerText();
  expect(bodyContent.length).toBeGreaterThan(50); // Final check
});
