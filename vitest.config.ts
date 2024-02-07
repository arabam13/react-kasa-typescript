/// <reference types="vitest" />
/// <reference types="vite/client" />
/* global __dirname */

import react from "@vitejs/plugin-react";
import path from "path";
import { configDefaults, defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [path.resolve(__dirname, "src/tests/vitest.setup.ts")],
    env: {
      IS_REACT_ACT_ENVIRONMENT: "true",
    },
    // setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    coverage: {
      provider: "istanbul", // or 'v8'
      reporter: ["html"],
      reportsDirectory: "./src/tests/unit/coverage",
      exclude: [
        ...configDefaults.exclude,
        "src/main.tsx",
        "src/App.tsx",
        "src/RootLayout.tsx",
        ".eslintrc.cjs",
        "src/tests",
        "src/utils",
        "src/pages/About.tsx",
        "src/pages/Error.tsx",
        "src/components/Header.tsx",
        "src/components/Footer.tsx",
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
