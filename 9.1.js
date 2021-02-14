
/*1*/
// const isString = (string, ) => {
//   if( typeof(string) == 'string'){
//     consoleLog(string);
//   }

//   else{
//     console.log("This is not a string");
//   } 
// }

// const consoleLog = (string) => {
//   console.log(string);
// }


// isString("netta");
// isString("he123");
// isString(123);


/*2*/
const firstWordUpperCase = (string, ) => {
  
  let newString = upperMaker(string);

  let newString2 = newString.split('').join('-');
  return(newString2);
}

const upperMaker = (string) => {
  return( string.charAt(0).toUpperCase() + string.slice(1) );
}

firstWordUpperCase("netta");
firstWordUpperCase("hello");



/*3*/
const printUpper = (string) => {
  console.log(firstWordUpperCase(string));
}

printUpper("good");

/*4*/

const helloUser =(string) => {
  let sString = toUpper(string);
  console.log(`Hello to ${sString}`);
}


const toUpper = (string) => {
  let newString = string.toUpperCase();
  return newString;
}

helloUser("morning");