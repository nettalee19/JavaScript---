const gradeToLetter = grade => {
  if((grade <= 100) && (grade >= 90)){
    return ("A");
  }
  else if((grade < 90) && (grade >= 80)){
    return("B");
  }
  else if((grade < 80) && (grade >= 70)){
    return("C");;
  }
  else if((grade < 70) && (grade >= 65)){
    return("D");
  }
  else if((grade < 65) && (grade >= 0)){
    return("F");
  }
  else{
    return("Not a valid grade");
  }
}

console.log(gradeToLetter(99));
let gra = gradeToLetter(69);
console.log(gra);













// const gradeToLetter = grade => {
//   if((grade <= 100) && (grade >= 90)){
//     console.log("A");
//   }
//   else if((grade < 90) && (grade >= 80)){
//     console.log("B");
//   }
//   else if((grade < 80) && (grade >= 70)){
//     console.log("C");;
//   }
//   else if((grade < 70) && (grade >= 65)){
//     console.log("D");
//   }
//   else if((grade < 65) && (grade >= 0)){
//     console.log("F");
//   }
//   else{
//     console.log("Not a valid grade");
//   }
// }

// gradeToLetter(112);