/**
 * @file eslint.config.js
 * @description
 * ESLint Flat Config setup for:
 *  - React (JSX)
 *  - React Hooks rules
 *  - Prettier formatting
 *  - Jest unit tests
 *  - Cypress E2E tests
 *
 * This configuration enforces consistent coding style,
 * catches common React issues, and ensures Prettier formatting
 * is treated as an ESLint error for unified code quality.
 */

// Core ESLint JS rules (modern replacement for "eslint:recommended")
import js from "@eslint/js";

// Predefined global variables (browser, node, jest, mocha, etc.)
import globals from "globals";

// React & React Hooks linting rules
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

// Prettier plugin to show formatting issues inside ESLint
import prettier from "eslint-plugin-prettier";

// -------------------------------------------------------------
// Export Flat Config (array of rule blocks)
// -------------------------------------------------------------
export default [
  // ============================================================
  // 1. ESLint Recommended Base Rules
  // ============================================================
  // Provides basic JS linting: no unused vars, no redeclared vars,
  // consistent equality checks, etc.
  js.configs.recommended,

  // ============================================================
  // 2. Base Rules for React + JSX + Prettier
  // ============================================================
  {
    // Include all JS + JSX files in src
    files: ["**/*.{js,jsx}"],

    // Project-level language options
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      // Predefined browser + node globals
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },

    // Load external ESLint plugins
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier,
    },

    // Merge plugin rule sets and add custom rules
    rules: {
      // React recommended rules (JSX validation, etc.)
      ...react.configs.recommended.rules,

      // React Hooks rules: exhaustive deps, rules of hooks
      ...reactHooks.configs.recommended.rules,

      // Prettier: treat formatting issues as ESLint errors
      "prettier/prettier": "error",

      // Not needed in React 17+ due to automatic JSX runtime
      "react/react-in-jsx-scope": "off",

      // Optional rules
      "react/prop-types": "off", // Disable PropTypes (common in TS or simple apps)
      "no-unused-vars": "warn", // Warn instead of error for unused variables
    },

    // Automatically detect installed React version
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // ============================================================
  // 3. Jest Unit Test Files
  // ============================================================
  {
    // Apply only to unit test files
    files: ["**/*.test.{js,jsx}"],

    languageOptions: {
      globals: {
        ...globals.jest, // Provide Jest-specific globals (describe, it, expect)
      },
    },
  },

  // ============================================================
  // 4. Cypress E2E Test Files
  // ============================================================
  {
    // Match files inside /cypress/
    files: ["cypress/**/*.{js,jsx}"],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha, // Cypress is built on Mocha test syntax
        cy: true, // Cypress global command "cy"
      },
    },
  },
];
