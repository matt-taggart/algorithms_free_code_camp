"use strict";

const assert = require('assert');

function titleCase(str) {
  let words = str.toLowerCase().split(' ');

  return words.map(x => x[0].toUpperCase().concat(x.slice(1))).join(' ');
}

assert.equal(titleCase("i'm a little teapot"), "I'm A Little Teapot");
assert.equal(titleCase("sHoRt AnD sToUt"), "Short And Stout");
assert.equal(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"), "Here Is My Handle Here Is My Spout");
