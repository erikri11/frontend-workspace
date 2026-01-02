import { defineConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import tsconfigPaths from "vite-tsconfig-paths";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

export default defineConfig({
  plugins: [
    tsconfigPaths({
      projects: ["./tsconfig.storybook.json"],
    }),
    storybookTest({
      storybookScript: "nx storybook frontend-workspace --port 6006",
      storybookUrl: "http://localhost:6006",
    }),
  ],
  test: {
    name: "storybook",
    setupFiles: [".storybook/vitest.setup.ts"],
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [{ browser: "chromium" }],
    },
    pool: "threads",
    watch: false,
  },
});
