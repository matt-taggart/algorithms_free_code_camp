"use strict";

const assert = require('assert');

function largestNumbersInArrays(arr) {
  return arr.map(v => {
    return Math.max(...v);
  });
}

assert.deepEqual(largestNumbersInArrays([[1, 250, 4], [8, 17, 32]]), [250, 32]);
assert.deepEqual(largestNumbersInArrays([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [5, 27, 39, 1001]);
