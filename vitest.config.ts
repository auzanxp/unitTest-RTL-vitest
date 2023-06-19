/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./__test__/setup.ts",
    css: true,
    coverage: {
      reporter: ["text", "html"],
      exclude: ["node_modules/", "__test__"],
    },
  },
});
