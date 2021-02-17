function funcA() {
  
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();
//will not return 1 because var a is below. 


var fullName = 'John Doe';
var obj = {
  fullName: 'Colin Ihrig',
  prop: {
  fullName: 'Aurelio De Rosa',

  getFullName: function () {
    return this.fullName;
  }
  }
};
console.log(obj.prop.getFullName());

var test = obj.prop.getFullName;
console.log(test());

//console log the fullName from the line: console.log(obj.prop.getFullName());

function funcB() {
  let a = b = 0;
  a++;
  return a;
}
  funcB();
  console.log(typeof a);
  console.log(typeof b);

  //it will return a when the function is called but will not console log a, b since they are local va.

  function funcC() {
    console.log("1");
  }
  funcC();
    function funcC() {
      console.log("2");
    }
  funcC();

  //it will console 2

  function funcD1() {
    d = 1;
  }
  funcD1();
  console.log(d);
    
  function funcD2() {
    e = 5; //var
  }
  funcD2();
  console.log(e);

  //will not console log e it is set as var in the local scope.\
  
  function funcE() {
    console.log("Value of f in local scope: ", f);
  }
  console.log("Value of f in global scope: ", f);
  var f = 1;
  funcE();

  //it will log the f from the console log but not from the function. not for the function. since f comes later.