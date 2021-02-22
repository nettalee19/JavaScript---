let text = document.querySelector("#text")
let btn = document.querySelector("#btn")
let note = document.querySelector("#note")

//note.remove()
//div.append(note)

btn.addEventListener('click', () =>{
  let len = text.value.length
  if(len < 100){
    //div.append(note)
    note.innerHTML = "Not enough letters!"
  }
  else {
    note.innerHTML = " ";
  }
    
})