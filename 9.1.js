const isString = (string, ) => {
  if( typeof(string) == 'string'){
    consoleLog(string);
  }

  else{
    console.log("This is not a string");
  } 
}

const consoleLog = (string) => {
  console.log(string);
}


isString("netta");
isString("he123");
isString(123);



const firstWordUpperCase = (string, ) => {
  
  let newString = upperMaker(string);

  let newString2 = newString.split('').join('-');
  console.log(newString2);
}

const upperMaker = (string) => {
  return( string.charAt(0).toUpperCase() + string.slice(1) );
}

firstWordUpperCase("netta");
firstWordUpperCase("hello");




// const insertLol = (string, ) => {
  
//   let newString = firstWordUpperCase(string);

//   let newString2 = newString.concat(lol);
//   console.log(newString2);
// }

// insertLol("netta");


const helloWorld = (string, ) => {
  
  let newString = upperMaker(string);

  let newString2 = newString.split('').join('-');
  console.log(newString2);
}

const upperMaker = (string) => {
  return(`Hello world to ${string}`);
}

helloWorld("netta");
helloWorld("hello");


