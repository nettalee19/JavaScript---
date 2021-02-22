/*1.1*/
// const consoleLog =(array) => {
//   //let newArray =[]

//   array.forEach(element => {
//     console.log(element)
//   });
  
// }

// const words = ["one", "two", "three", "four", "five"];

// consoleLog(words)

/*2*/
// const toNumber = (array) => {
//   let newArray =[]
//   array.forEach((element,index) => {
//     newArray.push(index+1)
//   });
//   return newArray
// }

// console.log(toNumber(["one", "two", "three"]))

/*3*/



const fruitEating =(array) => {
  array.forEach(element => {
    if(element === "apple"){
      return 'I am eating an Apple';
    }
    return `I am eating a ${element}`
  })
}

//const fruits = ["mango", "papaya", "pineapple", "apple"];
console.log(fruitEating(["mango", "papaya", "pineapple", "apple"]))