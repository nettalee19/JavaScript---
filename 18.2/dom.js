
// document.body.onload = addElement;

// function addElement () {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Welcome to my Website!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.querySelector("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }


let paragraph = document.createElement("p")
let h1 = document.createElement("h1")
let h3 = document.createElement("h3")

let node = document.createTextNode("be prepared")
paragraph.appendChild(node)

let hnode = document.createTextNode("Welcome to my website!")
h1.appendChild(hnode)
h1.style.color = "darkblue"

let mnode = document.createTextNode("It's a bit plain, but it's only JS!")
h3.appendChild(mnode)
h3.style.color = "purple"

let body = document.getElementsByTagName("body")[0]
body.style.backgroundColor = "lightblue"

body.appendChild(paragraph)
body.appendChild(h1)
body.appendChild(h3)