
let count = 0; 
let avgArray = [];
let avg =0 ;

const avgJumper = (scores) => {

  // for(i = 0; i < scores.length ; i+3){

    for(i = 0; i < i+3 ; i++){

      avg += scores[i] ;
      count += 1;
    }

    avgArray[i] = (avg/count);
    // avg = 0;
    // count = 0;
  // }
  console.log(avgArray);
  // return avgArray;
  
}



let scores = [5,5,8];
// avgJumper(scores)
let avgPlayers = console.log(avgJumper(scores));








const avgJumper = (scores) => {
  for(i = 0 ; i < scores.length; i++){
    

      avg += scores[i] ;
      count += 1;
      
      
    }
    let j = 0;
    avgArray[j] = (avg/count);
  }
    

  return (avgArray);

}