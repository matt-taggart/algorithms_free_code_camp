"use strict";

function dropArguments(arr, func) {
  let result = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (func(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

let result = dropArguments([1, 2, 3, 7, 4], (n) => n > 3);
