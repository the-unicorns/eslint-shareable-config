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

function isString(str) {
    return str !== null && typeof str === 'string'
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null
}
