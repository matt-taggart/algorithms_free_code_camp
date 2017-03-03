"use strict";

const assert = require('assert');

function longestWord(str) {
  const words = str.split(' ');

  return words.reduce((prev, curr) => {
    return (curr.length > prev) ? curr.length : prev;
  }, 0);
}

assert.equal(longestWord('The quick brown fox jumped over the lazy dog'), 6);
assert.equal(longestWord('May the force be with you'), 5);
assert.equal(longestWord('"What is the average airspeed velocity of an unladen swallow'), 8);
