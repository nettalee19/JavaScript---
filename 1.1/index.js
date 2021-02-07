(function(){
  'use strict';
  
  // var readlineSync = require('readline-sync');

  let string = 'hello';
  let num = 4;
  let person = {
    firstName: "Netta",
    lastName: "Avidan",
    age: 30
  };
  
  let isTrue = true;

  const num2 = null;
  let undi = undefined;
  let symb = Symbol('!');

  console.log(typeof(string)); 
  console.log(typeof(num));
  // console.log(person.firstName, person.lastName, person.age);
  console.log(typeof(person));
  console.log(typeof(isTrue));
  console.log(typeof(num2));
  console.log(typeof(undi));
  console.log(typeof(symb));

 
})();