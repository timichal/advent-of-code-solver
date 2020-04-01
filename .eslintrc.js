module.exports = {
  extends: ["airbnb-typescript/base"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
  },
  rules: {
    "linebreak-style": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "max-len": "off",
  },
};
