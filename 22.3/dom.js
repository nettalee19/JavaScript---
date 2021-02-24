let letter = "abcdefghijklmnopqrstuvwxyz"
let chosenLetter = letter[Math.floor(Math.random()*letter.length)]; 


let message = document.querySelector(".message")
let input = document.querySelector(".user-answer")
let playerGuesses = []
let guessesArray = document.querySelector(".guesses-array")

//console.log(input.value)

input.addEventListener("keyup", ()=> {
  console.log(chosenLetter)

  if(input.value === chosenLetter){
      //console.log(chosenLetter)
      message.innerHTML = "Correct letter!"
      message.style.color = "green";
      guessesArray.remove()
  }
 
  else{  //(input.value !== chosenLetter){
    
    console.log(playerGuesses)

    if(!playerGuesses.includes(input.value)){
      message.innerHTML = "Wrong guess!"
      message.style.color = "red";
      playerGuesses.push(input.value)
      guessesArray.innerHTML = `${playerGuesses}`//[input.value]
    }
    else{
      message.innerHTML = "You already guessed that letter"
      message.style.color = "red";
    }
  }
  
})
