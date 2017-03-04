"use strict";

const assert = require('assert');

function chunk(arr, size) {
  let result = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (i % size === 0) {
      result.push(arr.slice(arr.indexOf(arr[i]), i + size));
    }
  }

  return result;

}

assert.deepEqual(chunk([1, 2, 3, 4, 5, 6, 7, 8], 2), [[1, 2], [3, 4], [5, 6], [7, 8]]);
assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
assert.deepEqual(chunk([1, 2, 3, 4, 5, 6], 3), [[1, 2, 3], [4, 5, 6]]);
assert.deepEqual(chunk([1, 2, 3, 4, 5, 6, 7], 3), [[1, 2, 3], [4, 5, 6], [7]]);
