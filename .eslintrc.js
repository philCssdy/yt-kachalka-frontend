module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.app.json",
      tsconfigRootDir: __dirname,
      ecmaVersion: 2022,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    plugins: ["@typescript-eslint", "react", "react-hooks", "import", "prettier"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:import/errors",
      "plugin:import/warnings",
      "plugin:import/typescript",
      "prettier"
    ],
    env: {
      browser: true,
      es2022: true,
      node: true
    },
    rules: {
      
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "import/order": ["warn", { "groups": ["builtin", "external", "internal", "parent", "sibling", "index"] }],
      "prettier/prettier": "warn"
    }
  };