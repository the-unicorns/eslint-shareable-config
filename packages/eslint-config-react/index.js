module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "@vizexplorer/eslint-config-base",
        "plugin:react/recommended",
        "plugin:jest/recommended",
    ],
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest/globals": true,
        "jest": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react",
        "jest"
    ],
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "no-console": "error",
        "react/no-children-prop": "warn"
    }
};
