module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "no-console": "error",
        "no-unused-vars": ["warn", {"argsIgnorePattern": "^_"}],
        "@typescript-eslint/no-unused-vars": ["warn", {"argsIgnorePattern": "^_"}]
    }
};
