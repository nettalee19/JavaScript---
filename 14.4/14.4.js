function calcAverage (arr){
  let sum=0;
  for ( let i = 0 ; i < arr.length; i++ ){
  sum += arr[i];
  } 
  return sum ;
}
console.error(calcAverage ([ 85 , 90 , 92 ]));

/*i and sum are local variable, so it should be let and not var. sum should be set to zero*/