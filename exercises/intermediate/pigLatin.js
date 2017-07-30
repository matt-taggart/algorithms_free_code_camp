"use strict";

function translatePigLatin(word) {
  const vowels = [ 'a', 'e', 'i', 'o', 'u' ];

  if (~vowels.indexOf(word[0])) return `${word}way`;

  for (var i = 1, len = word.length; i < len; i++) {
    if (~vowels.indexOf(word[i])) return `${word.slice(i)}${word[0]}ay`;
  }

}

translatePigLatin('eight');
