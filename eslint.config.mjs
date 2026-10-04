import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    // Existing two-slot video buffering needs a separate behavioral review.
    // Keep this finding visible without refactoring playback during lint setup.
    files: ["components/sections/HomeGifCarousel.tsx"],
    rules: { "react-hooks/set-state-in-effect": "warn" },
  },
  globalIgnores([".next/**", "out/**", "dist/**", "next-env.d.ts"]),
]);
