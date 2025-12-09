import { test, expect } from '@playwright/test';

test('Page health check', async ({ page }) => {
  await page.goto('https://www.w3schools.com/howto/howto_css_login_form.asp');
  
  await expect(page.locator('h1')).toContainText('Login Form');
  await page.getByRole('button', { name: 'Login' }).first().click(); //modal trigger

});

