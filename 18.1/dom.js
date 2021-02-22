let text = document.querySelector("#text")
let btn = document.querySelector("#btn")
let smiley = document.querySelector("#smiley")

// let img = document.createElement("img");
//     img.src = ;


btn.addEventListener('click', () =>{
  let num = document.querySelector('#text').value
  //console.log(num)
  //for(let i=0; i <num ; i++){
    //console.log("hello")
    smiley.innerHTML = "&#128525".repeat(num)
  //}
    
})