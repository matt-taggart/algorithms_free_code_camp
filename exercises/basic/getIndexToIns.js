"use strict";

function getIndexToIns(arr, num) {
  let sortedArr = arr.sort((a, b) => a > b);

  for (let i = 0, len = sortedArr.length; i < len; i++) {
    if (sortedArr[i - 1] <= num && num <= sortedArr[i]) {
      return arr.indexOf(sortedArr[i - 1]);
    }
  }
}

getIndexToIns([10, 5, 3, 25, 100], 28);
