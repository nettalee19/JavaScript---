//let hello = document.querySelector(".hello")

///hello.addEventListener("click", ()=>{

  //it will console the window
  console.log(this)
  
  
  //
  const myObj = {
    name: "Timmy",
    greet: () => {
    console.log(`Hello ${this.name}`);
    },
  }; 
  myObj.greet();
  
  const myObj = {
    name: "Timmy",
    greet() {
      console.log(`Hello ${this.name}`);
      }
  }; 
  myObj.greet();
  //const greetPerson = new myObj('Timmy')
//})

//print the window because this is a function
const myFuncDec = function () {
  console.log(this);
};

//print the window because this is a function
const myFuncArrow = () => {
  console.log(this);
}; 
myFuncArrow();

//
document.querySelector(".element").addEventListener(() => {
  console.log(this);
});

document.querySelector(".element").addEventListener(() => {
  console.log(this);
});