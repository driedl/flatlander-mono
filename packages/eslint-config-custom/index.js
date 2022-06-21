module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    // project: "./packages/tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // "react/jsx-key": "off",
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": [
      1,
      // .jsx files are allowed to have .tsx extensions
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
  },
};
