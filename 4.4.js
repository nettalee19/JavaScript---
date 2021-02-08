function sevenBoomAll(num){
  for(let i=1; i<num; i++){
      console.log(i);
  }
}

function sevenBoom(num){
  for(let i=1; i<num; i++){
      
      if((i % 7 === 0) || (i % 10 === 7) || (((i/10) - (Math.floor(i/10))) === 7) ){
          console.log("BOOM");
      }
      else{
          console.log(i); 
      }
  }
}





sevenBoom(40);