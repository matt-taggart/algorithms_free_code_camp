"use strict";

function convertHtmlEntities(txt) {

  function replaceText(str) {
    switch (str) {
      case "&":
        return str.replace(str, '&amp;');
      case "<":
        return str.replace(str, '&lt;');
      case ">":
        return str.replace(str, '&gt;');
      case "\"":
        return str.replace(str, '&quot;');
      case "\'":
        return str.replace(str, '&apos;');
      default:
        return str;
    }
  }

  return txt.split('').map(replaceText).join('');
}

convertHtmlEntities("Dolce & Gabbana");
