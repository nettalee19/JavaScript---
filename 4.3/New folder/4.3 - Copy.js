

let john_1 = 189;
let john_2 = 120;
let john_3 = 103;

let mike_1 = 189;
let mike_2 = 120;
let mike_3 = 103;

let johnAverage;
let mikeAverage;

function johnAverageGames(john_1,john_2,john_3) {
  johnAverage = ((john_1 + john_2 + john_3)/3);
  johnAverage = johnAverage.toFixed(2);

  return johnAverage;
}

function mikeAverageGames (mike_1,mike_2,mike_3) {
  mikeAverage = ((mike_1 + mike_2 + mike_3)/3);
  mikeAverage = mikeAverage.toFixed(2)

  return mikeAverage;
}


function winner(johnAverage, mikeAverage){
  if(johnAverage > mikeAverage){
    console.log("The winner is John!");
    return johnAverage;
  }
  else if(johnAverage < mikeAverage){
    console.log("The winner is Mike!");
    return mikeAverage;
  }
  // else{
  //   console.log("There is a tie!");
  // }
}



// johnAverageGames(john_1,john_2,john_3);
let john = console.log("John's team average score is: "+ johnAverageGames(john_1,john_2,john_3));

// mikeAverageGames(mike_1,mike_2,mike_3);
let mike = console.log("Mike's team average score is: "+ mikeAverageGames(mike_1,mike_2,mike_3));

if (johnAverage === mikeAverage){
  console.log("There is a tie!");
}
//(johnAverage != mikeAverage)
else {
  let winWinner= console.log("His team average score is : "+ winner(johnAverage, mikeAverage));
}








// const johnAverageGames = john_1,john_2,john_3 => {
//   let johnAverage = (john_1 + john_2 + john_3)/3;

//   return johnAverage;
// }

// const mikeAverageGames = mike_1,mike_2,mike_3 => {
//   let mikeAverage = (mike_1 + mike_2 + mike_3)/3;

//   return mikeAverage;
// }