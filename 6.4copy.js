
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







const avgJumper = (scores) => {
  for(i = 0 ; i < scores.length ; i + 1){
    // console.log(i);
    let count = 0; 
    let avgArray = [];
    let avg =0 ;

    for(let j = i; j < i + 3 ; j++){
      // console.log(j);
      if(scores[j] != -1){
        avg += scores[j] ;
        count += 1;
      }  
      
    avgArray.push(avg/count);  
  }
  return (avgArray);
}

//for(i= 0 ; i < (scores.length +1)/3 ; i++)

let scores = [5,5,8,1,2,3];
// avgJumper(scores);
let avgPla = console.log(avgJumper(scores));