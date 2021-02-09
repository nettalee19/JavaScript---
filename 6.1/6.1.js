
let sumLength = 0;
let sumArray = 0;
let multi = 1;

const arrayLength = (arr) => {
  for(let i = 0; i <arr.length  ; i++){
    sumLength += 1;
  }
  return sumLength;
}

const arraySum = (arr) => {
  for(let i = 0; i < arr.length  ; i++){
    sumArray += arr[i];
  }
  return sumArray;
}

const arrayMulti = (arr_2) => {
  
  for(let i = 0; i < arr_2.length  ; i++){
    multi *= arr_2[i];
  }
  return multi;
}



const arr = [1,7,3,0,-5,7,3,9];
const arr_2 = [1,2,-3,4];




for(let i = 0; i <arr.length  ; i++){
  console.log(arr[i]);
}

let arrLength = console.log(`Array length is: ${arrayLength(arr)}`);
let arrSum = console.log(`Array sum is: ${arraySum(arr)}`);
let arr2multi = console.log(`Array2 multi sum is: ${arrayMulti(arr_2)}`);