const AVG = (score1, score2, score3) => {
  return Math.round((score1 + score2 + score3)/3);
}

const winTeam = (teamA, teamB) => {
  if(teamA > teamB){
    return 1;
  }
  else if(teamA < teamB){
    return -1;
  }
  else{
    return 0;
  }
}

const John = AVG(89,120,103);
const Mike = AVG(189,120,103);

const winner = winTeam(John, Mike);



let john = console.log("John's team average score is: "+ John);


let mike = console.log("Mike's team average score is: "+ Mike);

if (winner === 1){
  console.log("John's team won with a score of: " + John);
}
else if (winner === -1){
  console.log("Mike's team won with a score of: " + Mike);
}
else {
  console.log("It's a tie!");
}










// const johnAverageGames = john_1,john_2,john_3 => {
//   let johnAverage = (john_1 + john_2 + john_3)/3;

//   return johnAverage;
// }

// const mikeAverageGames = mike_1,mike_2,mike_3 => {
//   let mikeAverage = (mike_1 + mike_2 + mike_3)/3;

//   return mikeAverage;
// }


// function winner(johnAverage, mikeAverage){
//   if(johnAverage > mikeAverage){
//     console.log("The winner is John!");
//     return johnAverage;
//   }
//   else if(johnAverage < mikeAverage){
//     console.log("The winner is Mike!");
//     return mikeAverage;
//   }
  // else{
  //   console.log("There is a tie!");
  // }
/*}*/