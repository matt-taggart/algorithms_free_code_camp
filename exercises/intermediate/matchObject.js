"use strict";

function matchObject(collection, source) {
  let arr = [];

  for (let value of collection) {
    let matches = false;

    for (let prop of Object.keys(source)) {
      if (value[prop] === source[prop]) {
        matches = true;
      } else {
        matches = false;
      }
    }

    if (matches) arr.push(value);
  }


  return arr;
}

matchObject([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { first: "Tybalt" })
