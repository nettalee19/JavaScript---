
let array2 = [];

const countElement =(array) => {
  for(let i = 0; i < array.length ; i++){
    array2[i] = array[i].length;
    
  }
  return array2;
}


let array = ["boo", "doooo", "hoo","ro", "hellonetta"];

let arrayElemetSize = console.log(countElement(array));