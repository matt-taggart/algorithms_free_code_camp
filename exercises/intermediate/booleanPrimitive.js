"use strict";

function booleanPrimitive(bool) {
  return (typeof bool === 'boolean') ? true : false;
}

booleanPrimitive({ "a": 1 });
