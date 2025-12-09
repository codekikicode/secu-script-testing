import { test, expect } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const syntheticLogin = "file://" + path.join(__dirname, "..", "..", "public", "synthetic-login.html");

test("UI interaction test", async ({ page }) => {
  await page.goto(syntheticLogin);

  await page.locator("#navbar-login-btn").click();
  await expect(page.locator("#id01")).toBeVisible();

  // Interaction checks
  await page.locator("#uname").fill("interactionUser");
  await page.locator("#psw").fill("interactionPass");

  await expect(page.locator("#uname")).toHaveValue("interactionUser");
  await expect(page.locator("#psw")).toHaveValue("interactionPass");
});
