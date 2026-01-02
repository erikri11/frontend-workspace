import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths({
      projects: ["./tsconfig.json"],
    }),
  ],
  test: {
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{ts,tsx,js,jsx}"],
    exclude: [
      "**/*.stories.*",
      "**/.storybook/**",
      "**/storybook-static/**",
      "**/dist/**",
      "**/node_modules/**",
    ],
  },
});
