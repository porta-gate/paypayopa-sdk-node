import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default tseslint.config(
    {
        ignores: [
            'node_modules',
            'dist',
            '.github',
        ]
    },
    {files: ["**/*.{js,mjs,cjs,ts}"]},
    {languageOptions: {globals: {...globals.browser, ...globals.node}}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 0,
            '@typescript-eslint/no-unused-vars': 0
        }
    }
);
