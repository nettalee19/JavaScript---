/*1*/
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

foods.sort();
console.log(foods);


foods.sort().reverse();
console.log(foods);


/*2*/

let foodsWithUpperCase = [
  "Falafel",
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

console.log( foodsWithUpperCase.sort(function (a, b) {
  if( a.toLowerCase() < b.toLowerCase() ) {
    return -1;

  } else if( a.toLowerCase() > b.toLowerCase() ) {
    return 1;

  } else {
    return 0;
  }
} ) );


console.log( foodsWithUpperCase.sort(function (a, b) {
  if( a.toLowerCase() > b.toLowerCase() ) {
    return -1;

  } else if( a.toLowerCase() > b.toLowerCase() ) {
    return 1;

  } else {
    return 0;
  }
} ) );





/*3*/
const array = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const asc = array.sort((a,b) => a.length - b.length);

console.log(asc);