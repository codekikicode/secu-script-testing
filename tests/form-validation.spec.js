import { test, expect } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const syntheticLogin = "file://" + path.join(__dirname, "..", "..", "public", "synthetic-login.html");

test("Form validation test", async ({ page }) => {
  await page.goto(syntheticLogin);

  // Open modal with login button
  await page.locator("#navbar-login-btn").click();
  await expect(page.locator("#id01")).toBeVisible();

  await page.locator("#uname").fill("");
  await page.locator("#psw").fill("");
  await page.locator("#login-submit").click();

  await expect(page.locator("#login-error")).toBeVisible();
});
