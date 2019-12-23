const config = require('../');
const test = require('tape');

test('test basic properties of config', function (t) {
    t.ok(isString(config.parser));
    t.ok(isObject(config.extends));
    t.ok(isObject(config.env));
    t.ok(isObject(config.parserOptions));
    t.equal(Object.keys(config).length, 4);
    t.end()
});

const defaultPlugins = [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
];

test('Should extend default plugns', function (t) {
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



function isString(str) {
    return typeof str === 'string'
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}
