// const greeting = (result) =>{
//   return `Good evening ${result}`
// }

// const quoatation = (name, callback) => {
//   let result = `"${name}"`
//   //return result
//   if(typeof(callback) === "function"){
//     return callback(result)
//   }
//   else{
//     return result
//   }
// }

// console.log(quoatation("Netta", greeting))

const decimal = (sum, num) => {
  return newSum = sum.toFixed(num)
}


const avg = (sum, arr,callback) =>{
  let avg = (sum/arr.length)

  if(typeof(callback) === "function"){
    return callback(sum, num)
  }
  else{
    return avg
  }
}


function addNumbers(arr,callback){
  let sum = 0;
  arr.map(element =>sum += element)
  //return sum
  if(typeof(callback) === "function"){
    return callback(sum, arr,callback)
  }
  else{
    return sum
  }

}


const numbers = [1, 100, 67, -5, 6784, 356, 200];
console.log(addNumbers(numbers))