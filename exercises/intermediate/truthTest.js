"use strict";

function truthTest(arr, func) {

  for (let i = 0, len = arr.length; i < len; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }

}

truthTest([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0);
