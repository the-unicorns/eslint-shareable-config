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

function isString(str) {
    return str !== null && typeof str === 'string'
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
