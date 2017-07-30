"use strict";

function sortedUnion(...args) {
  let result = new Set([]);

  args.forEach(arg => {
    arg.forEach(v => {
      result.add(v);
    });
  });

  return Array.from(result);
}

sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1]);
