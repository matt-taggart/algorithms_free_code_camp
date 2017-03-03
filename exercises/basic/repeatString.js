"use strict";

const assert = require('assert');

function repeatString(str, num) {

  let words = [];

  if (num <= 0) {
    return '';
  }

  for (let i = 0; i < num; i++) {
    words.push(str);
  }

  return words.join(' ');
}

assert.equal(repeatString('hello', 5), 'hello hello hello hello hello');
assert.equal(repeatString('yo', 5), 'yo yo yo yo yo');
