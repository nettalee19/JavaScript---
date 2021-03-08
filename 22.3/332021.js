const message = document.querySelector(".message")
const guess = document.querySelector(".guess")
const allLetters = document.querySelector("#allLetters")

const letters = ("abcdefghijklmnopqrstuvwxyz")
const chosen = letters[Math.floor(Math.random()*letters.length)]

guess.addEventListener("keyup", (el)=>{
  console.log(chosen)

  if(el.key === chosen){
    message.innerHTML = "good job!"
    message.style.color = "green";
  }

  else{ //setting to zero
    message.innerHTML = "Wrong!"
    message.style.color = "red";
    guess.value = "";
  }
  allLetters.innerHTML += el.key+','; //adding the wrong letter guess
})
