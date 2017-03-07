"use strict";

function searchAndReplace(str, current, replacement) {

  if (current.charAt(0) === current.charAt(0).toUpperCase()) {
    let revisedStr = replacement.split('')[0].toUpperCase() + replacement.slice(1);

    return str.replace(current, revisedStr);
  } else {
    return str.replace(current, replacement);
  }

}

searchAndReplace("Let us go to the store", "store", "mall");
