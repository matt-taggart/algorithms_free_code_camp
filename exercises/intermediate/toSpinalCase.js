"use strict";

function toSpinalCase(str) {
  const characters = str.match(/[A-Z\W\s]/g);

  let result;

  for (let key of characters) {

    if (!result) {
      let splitWord = str.split(key);

      if ((/[A-Z]/g).test(key)) {
        let temp = [].concat(splitWord[0], key.toLowerCase().concat(splitWord[1]));

        result = temp.join('_');
      } else {
        result = splitWord.join('_');
      }

    } else {
      let splitWord = result.split(key);

      if ((/[A-Z]/g).test(key)) {
        let temp = [].concat(splitWord[0], key.toLowerCase().concat(splitWord[1]));

        result = temp.join('_');
      } else {
        result = splitWord.join('_');
      }

    }


  }

  return result;

}

const result = toSpinalCase('teletubbiesEeyoEeyo');
console.log(result);
