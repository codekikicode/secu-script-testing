import { test, expect } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url"; 

const projectRoot = process.cwd();

const syntheticLogin =
  "file:///" +
  path.resolve(projectRoot, ".github/public/synthetic-login.html").replace(/\\/g, "/");

  test("End-to-end login workflow", async ({ page }) => {
  await page.goto(syntheticLogin);

  await page.locator("#navbar-login-btn").click();
  await expect(page.locator("#id01")).toBeVisible();

  await page.locator("#uname").fill("correctuser");
  await page.locator("#psw").fill("correctpass");

  await expect(page.locator("#login-submit")).toBeEnabled({ timeout: 10000 }); 

  await page.locator("#login-submit").click(); 

});