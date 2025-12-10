import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",   // The tests folder

  use: {
    headless: true,
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "retain-on-failure",
  },

  reporter: [
    ["list"],
    ["json", { outputFile: "test-results/results.json" }],
    ["html", { open: "never" }]
  ],
});
