"use strict";

function sumAllPrimes(num) {
  let numbersToSum = [];
  let current = num;
  let sum = 0;

  while (current > 0) {
    if (isPrime(current)) {
      numbersToSum.push(current);
    }
    current--;
  }

  for (let key of numbersToSum) {
    sum += key;
  }

  return sum;
}

function isPrime(n) {
  let count = n;

  if (Math.sqrt(n) % 1 === 0) {
    return false;
  }

  while (count > 1) {
    if (n % count === 0 && n !== count) {
      return false;
    }

    count--;
  }

  return true;
}

sumAllPrimes(11);
