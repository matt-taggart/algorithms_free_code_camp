"use strict";


//method 1
function diffArray(arr1, arr2) {
  let newArr = [];

  for (let i = 0, len1 = arr1.length; i < len1; i++) {

    let diffA = arr2.indexOf(arr1[i]);
    let diffB = arr1.indexOf(arr2[i]);

    if (diffA === -1) {
      newArr.push(arr1[i]);
    } else if (diffB === -1) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}

//method 2
function diffArray2(arr1, arr2) {
  const diffA =  arr1.filter(v => {
    return arr2.indexOf(v) < 0;
  });

  const diffB = arr2.filter(v => {
    return arr1.indexOf(v) < 0;
  });

  return diffA.concat(diffB);
}
