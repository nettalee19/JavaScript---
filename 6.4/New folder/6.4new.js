

const avgJumper = (scores) => {
  let newAvg = [];
  let border= scores.length;
  let count = 0;
 

  for(let i = 0; i < border ; i++ ){
    console.log(scores[i]);
    let avg =0;
    // count += 1;
    
    // if(i > 0){
    //   avg = avg + i; 
    // }
    // else{
      
    // }

    // if(count == 3){
    //   count = 0; 
    // }

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






let scores = [5,5,8,1,2,3];
console.log(scores.length)
let avgScores = console.log(avgJumper(scores));