"use strict";

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
