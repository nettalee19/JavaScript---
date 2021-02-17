var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

//

var a = 1;
function b2() {
  a = 10;
  return;
  function a() { }
}
b2();
console.log(a);

//it logs a as 1 becuse it's outside the function. 


let i;
for (i = 0; i < 3; i++) {
  const log = () => {
  console.log(i);
  }
  setTimeout(log, 100);
}
//will log the array of 3. i is a global variable to this function. same outcome as: (var i=0; ...) 