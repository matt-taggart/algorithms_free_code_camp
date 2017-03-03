"use strict";

const assert = require('assert');

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

assert.ok(confirmEnding('yoohoo', 'hoo'));
assert.ok(confirmEnding('mountain dew', 'ew'));
assert.ok(confirmEnding('huh?', '?'));
