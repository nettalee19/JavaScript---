// const toNumber = (element) =>{
//   element = 
// }



// const myForEach = (array,callback) => {
//   array.map((element,index) =>{
//     return callback(element)
//   })
// }


// console.log(myForEach(["one", "two", "three", "four", "five"], toNumber)) ;

// const words = ["one", "two", "three", "four", "five"];
// const consoleLog = (el, i) => {
//   console.log(el, i);
// };
// const myForEach = (arr, callback) => {
//   if (typeof callback === "function") {
//     for (let i = 0; i < arr.length; i++) {
//       callback(arr[i], i);
//     }
//   } else return;
// };

// const x = myForEach(words, consoleLog);
// console.log(x);



const words = ["one", "two", "three", "four", "five"];
const consoleLog = (el, i) => {
  console.log(el, i);
};
const myForEach = (arr, callback) => {
  if (typeof callback === "function") {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
  } else return;
};

const x = myForEach(words, consoleLog);
console.log(x);
