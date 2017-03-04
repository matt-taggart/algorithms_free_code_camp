"use strict";

const assert = require('assert');

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

assert.deepEqual(slasher([1, 2, 3], 2), [3]);
assert.deepEqual(slasher([ "burgers", "fries", "shake" ], 1), [ "fries", "shake" ]);
