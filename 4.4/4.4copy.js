const boomSeven = (num) => {
  for(let i = 1; i < num; i++){
    if(i%7 === 0)
    console.log("Boom");

    if(numNum(i){
      console.log("boom")
    })
  }
}


const numNum = (num) => {
  for(let i = 0 ; i < num ; i++){
    if(num%10 === 7){
      return true;
    }
    num = parseInt(num/10);
  }
  return false;
}



let num = '12345';

boomSeven(num);