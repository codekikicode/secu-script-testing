import { test, expect } from "@playwright/test";

test("End-to-end login workflow", async ({ page }) => {
  await page.goto("public/synthetic-login.html");
  
  await page.locator("#navbar-login-btn").click();
  await expect(page.locator("#id01")).toBeVisible();

  // Valid credentials (synthetic)
  await page.locator("#uname").fill("admin");
  await page.locator("#psw").fill("password123");
  await page.locator("#login-submit").click();

  await expect(page.locator("#login-error")).toContainText("successful");
});

