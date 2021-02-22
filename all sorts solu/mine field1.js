// const printTen = () => {
//   for (let i=1; i< 10; i++){
//     console.log(i)
//   }
// }

// printTen();


// const printTenUp = () => {
//   for (let i=10; i>0; i--){
//     console.log(i)
//   }
// }

// printTenUp();


// const printRev = (arr) => {
//   for (let i=arr.length-1; i>=0; i--){
//     console.log(arr[i])
//   }
// }

// printRev([1,2,3,4,5]);

// const arrSum = (arr) => {
//   let sum =0;
//   for (let i=0; i<arr.length; i++){
//     sum += arr[i];
//   }
//   return sum
// }

// console.log(arrSum([1,2,3,4,5]));

//const arrSort = (arr) => {
  // let temp =0;
  // for(let i =0; i<arr.length-1; i++){
  //   for(let j =0; i<arr.length; j++){
  //     if(a[j] > a[j+1]){
  //       temp= a[j+1]
  //       a[j+1]= a[j]
  //       a[j]= temp

  //     }
  //   }
  // }
  // return arr;

//   return arr.sort(a,b) => a-b
// }

// console.log(arrSort([1,5,4,2,3]));

// const arrSort = (arr) => {
//   return arr.sort(a,b) => b-a
// }
// console.log(arrSort([1,5,4,2,3]));


// const printWithMap= (arr) => {
//   console.log(arr.map) 
// }
// printWithMap([1,5,4,2,3]);

// const  multiTenToAll= (arr) => {
//   for(let i=0; i<arr.length-1; i++){
//     return(10*arr[i])
//   }

// console.log(multiTenToAll([1,5,4,2,3]));

// const  removeNegative= (arr) => {
//   let newArr=[]
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] > 0)
//     newArr.push(arr[i])
//   }
//   return newArr
// }
// console.log(removeNegative([1,-5,4,2,3]));


// const  removePositive= (arr) => {
//   let newArr=[]
//   for(let i=0; i<arr.length; i++){
//     if(arr[i] < 0)
//     newArr.push(arr[i])
//   }
//   return newArr
// }
// console.log(removePositive([1,-5,4,2,3]));

// const  removePositive= (arr) => {
//   let newArr= arr.filter(x => x<0)

//   return newArr
// }
// console.log(removePositive([1,-5,4,-2,3]));

// const  removePositive= (arr) => {
//   return arr.filter(x=> {return x<0}).map(x => {return x/2
//   })

  
// }
// console.log(removePositive([1,-5,4,-2,3]));

const  positive= (arr) => {
  return arr.filter(x=> {return x>0}).sort((a,b) => (a-b))

  
}
console.log(positive([1,-5,4,-2,3]));

// const  max= (arr) => {
//   let max = arr[0]

//   for(let i=1; i<arr.length-1; i++){
//     if(arr[i] > max){
//       max = arr[i]
//     }
//   }
//   return max;

// }
// console.log(max([1,-5,4,-2,3]));