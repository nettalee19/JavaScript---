


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