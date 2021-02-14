const numbers = [1, -5, 666, 2, 400, 11];

// numbers.sort();
// console.log(numbers);


// numbers.sort().reverse();
// console.log(numbers);


numbers.sort(function (a, b) {
  if (b > a) {
      return -1;
  }
  else if (a > b) {
      return 1;
  }
  return 0;
});
console.log(numbers);

numbers.sort(function (a, b) {
  if (a > b) {
      return -1;
  }
  else if (b > a) {
      return 1;
  }
  return 0;
});
console.log(numbers);