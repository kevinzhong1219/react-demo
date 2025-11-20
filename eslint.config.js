// ESLint Flat Config for React + Prettier + Jest + Cypress
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";

export default [
    // Include ESLint's recommended rules
    js.configs.recommended,

    // ============================
    // Base React + Prettier Rules
    // ============================
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },

        plugins: {
            react,
            "react-hooks": reactHooks,
            prettier,
        },

        rules: {
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            // Prettier integration
            "prettier/prettier": "error",

            // Disable old React 16 rule
            "react/react-in-jsx-scope": "off",

            // Optional
            "react/prop-types": "off",
            "no-unused-vars": "warn",
        },

        settings: {
            react: {
                version: "detect",
            },
        },
    },

    // ============================
    // Jest Test Files
    // ============================
    {
        files: ["**/*.test.{js,jsx}"],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },

    // ============================
    // Cypress Test Files
    // ============================
    {
        files: ["cypress/**/*.{js,jsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.mocha,
                cy: true,   // Cypress global
            },
        },
    },
];
