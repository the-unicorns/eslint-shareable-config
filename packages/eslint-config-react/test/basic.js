const config = require('../');
const test = require('tape');

test('test basic properties of config', function (t) {
    t.ok(isString(config.parser));
    t.ok(isObject(config.extends));
    t.ok(isObject(config.env));
    t.ok(isObject(config.parserOptions));
    t.ok(isObject(config.settings));
    t.equal(config.plugins.length, 2);
    t.equal(Object.keys(config.rules).length, 6);
    t.equal(Object.keys(config).length, 7);
    t.end()
});

test('Should use default parser', function (t) {
    t.equal(config.parser, "@typescript-eslint/parser", "Default parser loaded");
    t.end()
});

test('Should use default settings', function (t) {
    t.equal(config.settings.react.version, "detect", "Using default version");
    t.end()
});

test('Should use default parser options', function (t) {
    t.equal(config.parserOptions.ecmaVersion, 2018, "Using default ecma version");
    t.equal(config.parserOptions.sourceType, "module", "Using default source type");
    t.ok(config.parserOptions.ecmaFeatures.jsx, "Using JSX feature");
    t.end()
});

const defaultPlugins = [
    "react",
    "jest"
];

test('Should use default plugins', function (t) {
    defaultPlugins.forEach((item) => {
        t.ok(config.plugins.includes(item), `Plugin ${item} loaded`);
    });
    t.end()
});

const rules = [
    {name: "@typescript-eslint/explicit-function-return-type", value: "off"},
    {name: "@typescript-eslint/interface-name-prefix", value: "off"},
    {name: "@typescript-eslint/explicit-member-accessibility", value: "off"},
    {name: "@typescript-eslint/no-non-null-assertion", value: "off"},
    {name: "no-console", value: "error"},
    {name: "react/no-children-prop", value: "warn"}
];

test('Should use default rules', function (t) {
    rules.forEach((item) => {
        t.equal(config.rules[item.name], item.value, `Rule ${item.name} has the correct value: ${item.value}`);
    });
    t.end()
});

const defaultExtends = [
    "@the-unicorns/eslint-config-base",
    "plugin:react/recommended",
    "plugin:jest/recommended",
];

test('Should extend default plugns', function (t) {
    t.equal(config.extends.length, 3, "Default plugins loaded");
    config.extends.forEach((item) => {
        t.ok(defaultExtends.includes(item), `Plugin ${item} added`);
    });
    t.end()
});

function isString(str) {
    return str !== null && typeof str === 'string'
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
