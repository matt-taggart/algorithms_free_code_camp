"use strict";

const assert = require('assert');

function truncateString(str, num) {

  if (num <= 3 && str.length > num) {
    return str.slice(0, num).concat('...');
  } else if (str.length > num) {
    return str.slice(0, num - 3).concat('...');
  }

}

assert.equal(truncateString('superdupercool', 3), 'sup...');
assert.equal(truncateString('A-', 1), 'A...');
