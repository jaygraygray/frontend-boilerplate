// eslint-disable-next-line no-unused-vars
const WARN = 1;
const ERROR = 2;
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/style",
    "plugin:sonarjs/recommended",
    "plugin:react-hooks/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "formatjs",
    "regexp",
    "jest",
    "sonarjs"
  ],
  rules: {
    eqeqeq: [ERROR, "smart"],
    indent: "off",
    "jsx-quotes": [ERROR, "prefer-double"],
    semi: [ERROR, "always"],
    "block-scoped-var": ERROR,
    // "max-len": [ERROR, {
    //   code: 100,
    //   ignoreUrls: true,
    // }],
    "no-self-compare": ERROR,
    "formatjs/no-offset": "error",
    "react/no-array-index-key": ERROR,
    "react/no-adjacent-inline-elements": ERROR,
    "key-spacing": [ERROR, { mode: "strict" }]
  },
  ignorePatterns: ["config", "scripts", "build", "node_modules"]
};
