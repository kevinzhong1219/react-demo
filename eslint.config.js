// ESLint Flat Config for React + Prettier
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";

export default [
  // Include ESLint's recommended rules
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
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

      // Optional rules
      "react/prop-types": "off",
      "no-unused-vars": "warn",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
