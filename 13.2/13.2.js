
let array2 = [];

const countElement =(array) => {
  let i = 0;
  let result = [];
 
  while(i < array.length){
    result.push(array[i].length);
    i += 1;
  }
  return result
}


let array = ["boo", "doooo", "hoo","ro", "hellonetta"];

let arrayElemetSize = console.log(countElement(array));

/*the for loop is better. it's shorter.*/

 