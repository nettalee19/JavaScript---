const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const food3 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber"];
const food4 = ["Fries", "Pizza", "Olives", "Hamburgers"];


const arrayCompare = (array1, array2) => {
  let newArray = []

  for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
      if (array2[j].includes(array1[i])){
        newArray.push(array1[i])

      }
    }
  }
  if (newArray.length > 0){
    return newArray;
  }
  else{
    return "no match";
  }
  
}

console.log(arrayCompare(food1,food2));
console.log(arrayCompare(food3,food4));



// for(let i = 0; i < array1.length; i++){
//   for(let j = 0; j < array2.length; j++){
//     if (array2.includes(array1[i])){
//       newArray.push(array1[i])
//       break;
//     }
//   }
// }