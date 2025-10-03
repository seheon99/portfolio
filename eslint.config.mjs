import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

import importLint from 'eslint-plugin-import'

export default [
    // JavaScript
    eslint.configs.recommended,

    // Typescript
    ...tseslint.configs.recommended,

    // eslint-plugin-import
    importLint.flatConfigs.recommended,
    {
        rules: {
            "import/order": [
                "error",
                {
                    alplabetize: { order: 'asc', caseInsensitive: true },
                    "newlines-between": "always",
                    groups: [
                        "builtin",
                        "external",
                        "interval",
                        ['parent', 'sibling', 'index'],
                        ['object', 'type', 'unknown']
                    ],
                    pathGroups: [
                        { pattern: "react", group: "builtin", position: "after" },
                        { pattern: "{next,next/*}", group: "external", position: "before" },
                        { pattern: "@/**", group: "internal", position: "before" }
                    ]
                }
            ]
        }
    }
]