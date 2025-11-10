import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest", 
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off"
    },
  },
]);
