function findSmallest(a, b, c){
  if (a > b > c){
    return c;
  } 
  else if (a > c > b) {
    return a;
  } 
  else {
    return b;
  }

}
console.log(findSmallest(52,66, 2));

/*1. findSmalest is not defined*/
/*2. */
/*3. there was a mix with the name so it was not reffered to the function*/

