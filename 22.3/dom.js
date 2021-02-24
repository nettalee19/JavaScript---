let letter = "abcdefghijklmnopqrstuvwxyz"
let chosenLetter = letter[Math.floor(Math.random()*letter.length)]; 
let message = document.querySelector(".message")


let input = document.querySelector(".user-answer")
let playerGuesses = []
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
    console.log(playerGuesses)
    if(playerGuesses.includes(input.value)){
      message.innerHTML = "You already guesses that letter"
      message.style.color = "red";
    }
    else{
      playerGuesses.push(input.value)
    }
  }
  else{
    message.remove()
  }
})
