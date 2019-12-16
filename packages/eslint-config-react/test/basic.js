var config = require('../')
var test = require('tape')

test('test basic properties of config', function (t) {
  t.ok(isString(config.parser))
  t.ok(isObject(config.extends))
  t.ok(isObject(config.env))
  t.ok(isObject(config.parserOptions))
  t.end()
})

function isString (str) {
    return typeof str === 'string' && str !== null
}

function isObject (obj) {
    return typeof obj === 'object' && obj !== null
}