function sumFibonacci(n) {
  let numbersToSum = [ 1 ];
  let sum = 0;

  let a = 0, b = 1, temp = 1;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;

    if (temp % 2 !== 0) {
      numbersToSum.push(temp);
    }
  }

  for (let key of numbersToSum) {
    sum += key;
  }

  return sum;
}

let result = sumFibonacci(6);
console.log(result);
