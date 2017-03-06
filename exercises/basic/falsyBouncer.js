"use strict";

function falsyBouncer(arr) {
  return arr.filter(v => v);
}

falsyBouncer([ '', null, NaN, undefined, false, 0, 'hello', 'goodbye']);
