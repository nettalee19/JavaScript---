
/*1*/
array1 = [1, 2, 3, 4];

const doubleValues = (array1) => {
  let doubleArray = [];
  array1.map(i => {
    doubleArray.push(array1[i-1] * 2);
  });
  return doubleArray;
}

console.log(doubleValues(array1));

/*2*/
array2 = [1, 2, 3, 4, 5, 6, 7];

const onlyEvenValues = (array2) => {
  let evenArray = [];

  array2.map(num =>{
    if(num%2 === 0){
      evenArray.push(num);
    }
  })
  return evenArray;
}

console.log(onlyEvenValues(array2));

/*3*/
array3 = [1, 2, "hello", 4, "bye", 6, "good"];

const showFirstAndLast = (array3) => {
  let stringArray = [];

  array3.map(e => {
    if(typeof(e) == 'string'){
      stringArray.push(e);
    }
    
  })
  return (stringArray[0], stringArray.pop());
}

// const showFirstAndLast = (array3) => {
//   let stringArray = [];

//   array3.filter(e => {
//    return typeof e === "string";
    
//   })
//   return (stringArray[0], stringArray.pop());
// }


console.log(showFirstAndLast(array3));

/*4*/
const vowelCount = (string) => {
  let stringArray = string.split('');
  let vowel = {a:0, e:0, i:0, o:0, u:0}

  stringArray.forEach(ch => {
    if(ch === "a"|| ch === "e"|| ch === "i"|| ch === "o"|| ch === "u"){
      vowel[ch]++
    }
  });
  console.log(vowel)
}

vowelCount("nettaavidan")

/*5*/

// const capitalize = (str) => {
  
//   for(let i=0; i<str.length ; i++){
//     console.log(str[i] = (str.charAt(i)+32))
//   }
// }

// capitalize("helloworld")