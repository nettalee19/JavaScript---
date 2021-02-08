
function siblings(numSiblings){
  if(numSiblings === 1){
    alert("1 sibling!");
    // return numSiblings;
  }
  else if(numSiblings > 1){
    console.log("More than 1 sibling");
  }
  else {
    console.log("No siblings");
  }
}



let numSiblings = prompt("How many siblings do you have? ");

siblings(numSiblings);

document.getElementById('siblings').innerHTML = siblings(numSiblings); /*textContent*/ 

