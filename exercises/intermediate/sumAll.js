"use strict";

const assert = require('assert');

function sumAll(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let count = min;
  let sum = 0;

  while (count <= max) {
    sum += count;

    count++;
  }

  return sum;
}

assert.equal(sumAll([1, 4]), 10);
assert.equal(sumAll([-3, 1]), -5);
