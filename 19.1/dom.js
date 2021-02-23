let toMain = document.querySelector(".start-here")
let ul = document.querySelector("#inner-list");
let lastItem = document.querySelector(".last-item");
let mainTitle = document.querySelector("#main-title");
let p = document.querySelector("p");


function changeTitle (){
  toMain.innerHTML = "main title"
  console.log("netta")
}

changeTitle(toMain)




function addSubTitle(){
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("sub title 4"));
  ul.appendChild(li);
  
}
addSubTitle(toMain)




function reMove (){
  lastItem.remove()
}
reMove(lastItem)





function changeMainTitle (){
  mainTitle.innerHTML = "Master Of The Dom"
}

changeMainTitle(mainTitle)


function changeP (){
  p.innerHTML = "Good Morning to everybody"
}

changeP(p)