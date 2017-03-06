"use strict";

function rot13(str) {
  let parsedStr = '';

  for (let i = 0, len = str.length; i < len; i++) {
    if ((/\w/g).test(str[i])) {
      let index = str.charCodeAt(i) - 13;

      (index < 65) ? (index += 26) : index;

      parsedStr += String.fromCharCode(index);
    } else {
      parsedStr += str[i];
    }
  }

  return parsedStr;
}

rot13("SERR PBQR PNZC");
