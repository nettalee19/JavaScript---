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

//at the parent b=5 and only then the child is called, then returns 5 as the parents set. the closure with child function.

var a = 1;
function b2() {
  a = 10;
  return;
  function a() { }
}
b2();
console.log(a);

//it logs a as 1 becuse it's outside the function, global scope. b2() is not returning anything.


let i;
for (i = 0; i < 3; i++) {
  const log = () => {
  console.log(i);
  }
  setTimeout(log, 100);
}
//will log the array of 3. i is a global variable to this function. same outcome as: (var i=0; ...) 