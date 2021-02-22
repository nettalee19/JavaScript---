let text = document.querySelector("#text")
let btn = document.querySelector("#btn")
let smiley = document.querySelector("#smiley")




btn.addEventListener('click', () =>{
  let hasImg = document.querySelectorAll("IMG")
  if(hasImg){
    hasImg.forEach(img => {
      img.remove()
    })
  }

  let num = document.querySelector('#text').value
 
  if (num === 0 ){
    smily.innerHTML = "No such thing as 0 smilies"
  }
  else{
    for(let i=0; i <num ; i++){
      console.log("hello")
  
      let x = document.createElement("IMG");
      x.setAttribute("src", "tenor.gif");
      x.setAttribute("width", "100");
      x.setAttribute("height", "100");
      x.setAttribute("alt", "The Pulpit Rock");
      document.body.appendChild(x);
  
      
    }
  }
  
    
})
