module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "@the-unicorns/eslint-config-base",
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
            "version": "16.8" // first version with hooks
        },
        jest: {
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
        "react/no-children-prop": "warn",
        "react/prop-types": 0 // using typescript to manage types
    }
};
