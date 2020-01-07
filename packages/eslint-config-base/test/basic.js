const config = require('../');
const test = require('tape');

test('test basic properties of config', function (t) {
    t.ok(isString(config.parser));
    t.ok(isObject(config.extends));
    t.ok(isObject(config.env));
    t.ok(isObject(config.parserOptions));
    t.ok(isObject(config.rules));
    t.equal(Object.keys(config.rules).length, 7);
    t.equal(Object.keys(config).length, 5);
    t.end()
});

const defaultPlugins = [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
];

test('Should extend default plugins', function (t) {
    t.equal(config.extends.length, 4, "Default plugins loaded");
    config.extends.forEach((item) => {
        t.ok(defaultPlugins.includes(item), `Plugin ${item} added`);
    });
    t.end()
});

test('Should use default parser', function (t) {
    t.equal(config.parser, "@typescript-eslint/parser", "Default parser loaded");
    t.end()
});

test('Should use default parser options', function (t) {
    t.equal(config.parserOptions.ecmaVersion, 2018, "Using default ecma version");
    t.equal(config.parserOptions.sourceType, "module", "Using default source type");
    t.end()
});

const defaultEnv = [
    "browser",
    "node",
    "es6"
];

test('Should correct environment', function (t) {
    defaultEnv.forEach((item) => {
        t.ok(config.env[item], `Env ${item} enabled`);
    });
    t.end()
});

const rules = [
    {name: "@typescript-eslint/explicit-function-return-type", value: "off"},
    {name: "@typescript-eslint/interface-name-prefix", value: "off"},
    {name: "@typescript-eslint/explicit-member-accessibility", value: "off"},
    {name: "@typescript-eslint/no-non-null-assertion", value: "off"},
    {name: "@typescript-eslint/no-unused-vars", value: ["warn", {"argsIgnorePattern": "^_"}]},
    {name: "no-unused-vars", value: ["warn", {"argsIgnorePattern": "^_"}]},
    {name: "no-console", value: "error"},
];

test('Should use default rules', function (t) {
    rules.forEach((item) => {
        t.deepEqual(config.rules[item.name], item.value, `Rule ${item.name} has the correct value: ${item.value}`);
    });
    t.end()
});

function isString(str) {
    return typeof str === 'string'
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}
