"use strict";

const assert = require('assert');

function factorialize(num) {
  let temp = num;
  let sum = 1;

  while (temp > 0) {
    sum *= temp;
    temp--;
  }

  return sum;
}

assert.equal(factorialize(4), 24);
assert.equal(factorialize(7), 5040);
