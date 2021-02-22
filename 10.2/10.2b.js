
/*1*/
// const doubleValues = (array) => {
//   let doubleArray =[]
//   array.forEach(i =>{
//     doubleArray.push(i*2)
//   })
//   return doubleArray
// }

// console.log(doubleValues([1,2,3,4]))




// const doubleValues = (array) => {
//   return array.map(i => {return i*2})
// }

// console.log(doubleValues([1,2,3,4]))




/*2*/
// const onlyEvenValues = (array) => {
//   let evenArray =[]
//   array.forEach(i => {
//     if(i%2 == 0){
//       evenArray.push(i)
//     }
//   })
//   return evenArray
// }

// console.log(onlyEvenValues([1,2,3,5,7,88,22,11]))



// const onlyEvenValues = (array) => {
//   return array.filter((i) => {return i%2 === 0;

//   })
// }

// console.log(onlyEvenValues([1,2,3,5,7,88,22,11]))


//3
// const showFirstAndLast = (array) => {
//   let stringArray = []
//   let temp = []
//   array.forEach(e => {
//     if(typeof(e) == "string"){
//       temp.push(e)
//     }
//   })
//   stringArray.push(temp.shift());
//   stringArray.push(temp.pop());
//   return stringArray;
// }

// const showFirstAndLast = (array) => {
//   let stringArray = []
//   let temp = array.filter(element => {
//     return typeof element === "string";
//   });
//   stringArray.push(temp.shift());
//   stringArray.push(temp.pop());
//   return stringArray;
// }

//console.log(showFirstAndLast([1,2,"hello",3,"to",76,"you"]))

//4
// const vowelCount = (string) => {
//   let stringArray = string.split('');
//   let vowel ={a:0, i:0, e:0, o:0, u:0}

//   stringArray.forEach(ch => {
//     if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
//       vowel[ch]++
//     }
//   })
//   return vowel;
// }

// const vowelCount = (string) => {
//   let vowel ={a:0, i:0, e:0, o:0, u:0}
//   let stringArray = string.split('');

//   stringArray.map(ch =>{
//     if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
//       vowel[ch]++
//     }
//   })
//   return vowel;
  
// }

// console.log(vowelCount("nettaleeavidannavot"))

// const capitalize = (string) => {
//   let stringArray = string.split('');

//   stringArray.forEach(ch => {
//     toupp 
//   })
// }

// console.log(capitalize("nettaleeavidannavot"))