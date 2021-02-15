let numbers = [1, 2, 3, 4]

const sum = numbers.reduce((accumulator, cuurentValue) => {
  return accumulator + cuurentValue;
})
console.log(sum);

arrayMax=[1,5,7,99];

function minMax(arrayMax) {
  return arrayMax.reduce((acc, val) => {
      acc[0] = ( acc[0] === undefined || val < acc[0] ) ? val : acc[0]
      acc[1] = ( acc[1] === undefined || val > acc[1] ) ? val : acc[1]
      return acc;
  }, []);
}
console.log(minMax);

/*2*/
let array1 = [1, 2, 6, 7],
  sumEven = array1.reduce(function (sum, value) {
    
      return sum + value
    
    
    
  }, 0) 
  console.log(sumEven);

/*3*/
let array = [1, 3, 5, 7],
  average = array.reduce(function (sum, value) {
    return sum + value
  },) / array.length;

console.log(average);