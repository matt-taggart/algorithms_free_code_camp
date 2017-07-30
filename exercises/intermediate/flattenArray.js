"use strict";

function flattenArray(arr) {
  let result = [];

  function getPrimitiveValues(a) {
    a.forEach(v => {
      if (!Array.isArray(v)) {
        result.push(v);
      } else {
        getPrimitiveValues(v);
      }
    });
  }

  getPrimitiveValues(arr);

  return result;
}

flattenArray([1, [2], [3, [[4]]]]);
