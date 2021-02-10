

const avgJumper = (scores) => {
  

  for(let i = 0; i < scores.length ; i + 3){
    console.log(i);
    let avg =0;
    let count = 0;
    let newAvg = [];
    
    for(let j = i; j < i + 3 ; j++){
      if(scores[j] != -1){
        avg += scores[j];
        count += 1 ;
      }
        
    }
    let scoreNew = (avg/count);
    newAvg.push(scoreNew);
  }
  return (newAvg);
}






let scores = [5,5,8];

let avgScores = console.log(avgJumper(scores));