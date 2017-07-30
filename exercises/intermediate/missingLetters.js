"use strict";

function missingLetters(str) {
  let temp = str.charCodeAt(1);

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i + 1) === temp) {
      temp += 1;
    } else if (!str[i + 1]) {
      return;
    } else {
      return String.fromCharCode(temp);
    }
  }

}

missingLetters("abcdefghjklmno");
