const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (numbers) {
  if (numbers.length === 0) return 0;

  return numbers.reduce((acc, val) => acc + val);
};

const multiply = function (numbers) {
  return numbers.reduce((acc, val) => acc * val);
};

const power = function (num, pow) {
  return num ** pow;
};

const factorial = function (n) {
  let result = 1
  if (n === 1 || n === 0) return result;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
