import { test, expect } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = process.cwd();

const syntheticLogin =
  "file:///" +
  path.resolve(projectRoot, ".github/public/synthetic-login.html").replace(/\\/g, "/");

  test("Form validation test", async ({ page }) => {
  await page.goto(syntheticLogin);

  await page.locator("#navbar-login-btn").click();

  await expect(page.locator("#id01")).toBeVisible();

  await page.locator("#uname").fill("");
  await page.locator("#psw").fill("");

  await page.locator("#login-submit").click();

  await expect(page.locator("#login-error")).toBeVisible();
});
