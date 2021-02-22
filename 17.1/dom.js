const p = document.querySelector('p')
const plus = document.querySelector(".plus") //this is related to the + btn
const minus = document.querySelector(".minus")//this is related to the - btn
//console.log("hello")

plus.addEventListener('click', ()=>{
  //console.log("user")
  let fontSize = parseInt(window.getComputedStyle(p).fontSize);
  fontSize += 10;
  if(fontSize < 100){
    p.style.fontSize = `${fontSize}px`
  }
})

minus.addEventListener('click', ()=>{
  console.log("useit")
  let fontSize = parseInt(window.getComputedStyle(p).fontSize);
  fontSize -= 10;
  if(fontSize > 6){
    p.style.fontSize = `${fontSize}px`
  }
})