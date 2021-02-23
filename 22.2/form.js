let check = document.querySelector("#check")
let img = document.querySelector(".img")


check.addEventListener("click", ()=>{
  if (check.checked == true){
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
})