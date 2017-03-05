"use strict";

const assert = require('assert');

function mutations(x) {
  let arr = x.map(v => v.toLowerCase());
  for (let i = 0, len = arr[1].length; i < len; i++) {
    if (arr[0].indexOf(arr[1][i]) === -1) {
      return false;
    }
  }

  return true;
}

 assert.notEqual(mutations(["hello", "hey"]), true);
 assert.equal(mutations(["Mary", "Army"]), true);
