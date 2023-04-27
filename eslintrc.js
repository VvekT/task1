module.exports = {
    root: true,
    extends: [
      "react-app", // Create React App base settings
      "eslint:recommended", // recommended ESLint rules
      "plugin:@typescript-eslint/recommended", // recommended rules from @typescript-eslint/eslint-plugin
      "prettier",
      "plugin:prettier/recommended",
    ],
    rules: {
      "linebreak-style": [
        "error",
        process.platform === "win32" ? "windows" : "unix",
      ], // https://stackoverflow.com/q/39114446/2771889
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  };
  