let letter = "abcdefghijklmnopqrstuvwxyz"
let chosenLetter = letter[Math.floor(Math.random()*letter.length)]; 
let message = document.querySelector(".message")


let input = document.querySelector(".user-answer")

//console.log(input.value)

input.addEventListener("keyup", ()=> {
  console.log(chosenLetter)
  if(input.value === chosenLetter){
    //console.log(chosenLetter)
    message.innerHTML = "Correct guess!"
    message.style.color = "green";
  }
  else if(input.value !== chosenLetter){
    message.innerHTML = "Wrong guess!"
    message.style.color = "red";
  }
  else{
    message.remove()
  }
})
