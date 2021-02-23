let text = document.querySelector("#text")
let btn = document.querySelector("#btn")
let note = document.querySelector(".note")



btn.addEventListener("click", ()=>{
  let age = document.querySelector('#text').value

  if(age < 18){
    console.log(age)
    note.innerHTML = "you’re too young"
  }
  else{
    console.log(age)
    note.innerHTML = "you can drink"
  }
})