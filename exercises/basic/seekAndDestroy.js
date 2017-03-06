"use strict";

function destroyer(arr) {
  let args = Array.from(arguments).slice(1);

  return arr.filter(v => {
    return args.indexOf(v) === -1;
  });
}

destroyer([1, 2, 3, 4], 2, 3);
