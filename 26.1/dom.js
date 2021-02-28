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

const myFuncDec = function () {
  console.log(this);
};