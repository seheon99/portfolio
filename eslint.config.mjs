import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import importLint from "eslint-plugin-import";
import tailwind from "eslint-plugin-tailwindcss";
import { configs as tseslintConfig } from "typescript-eslint";

export default defineConfig([
  // JavaScript
  eslint.configs.recommended,

  // Typescript
  ...tseslintConfig.recommended,

  // eslint-plugin-tailwindcss
  ...tailwind.configs["flat/recommended"],

  // eslint-plugin-import
  importLint.flatConfigs.recommended,
  importLint.flatConfigs.typescript,
  {
    rules: {
      "import/order": [
        "error",
        {
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            ["object", "type", "unknown"],
          ],
          pathGroups: [
            { pattern: "react", group: "builtin", position: "after" },
            { pattern: "{next,next/*}", group: "external", position: "before" },
            { pattern: "@/assets/**", group: "object", position: "before" },
            { pattern: "@/**", group: "internal", position: "before" },
          ],
        },
      ],
    },
    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
]);
