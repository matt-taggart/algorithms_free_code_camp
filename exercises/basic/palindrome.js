"use strict";

const assert = require('assert');

//example 1
function palindrome(str) {
  const reverseStr = str.replace(/\W/g, '').split('').reverse().join('');

  return (str.replace(/\W/g, '').toLowerCase() === reverseStr.toLowerCase());
}

assert.ok(palindrome('racecar'));
assert.ok(palindrome('#racecar&&&'));
assert.ok(palindrome('mom'));
assert.ok(palindrome('_mom_'));
assert.notEqual(palindrome('yolo'));

//example 2
function palindrome2(str) {
  const parsedStr = str.replace(/\W/g, '');

  for (let i = 0, len = parsedStr.length; i < len; i++) {
    if (parsedStr[i] !== parsedStr[len - 1 - i]) {
      return false;
    }
    return true;
  }

}

assert.ok(palindrome2('racecar'));
assert.ok(palindrome2('#racecar&&&'));
assert.ok(palindrome2('mom'));
assert.ok(palindrome2('_mom_'));
assert.notEqual(palindrome2('yolo'));
