
function wordCounter(array){
  let library = {};
  array = array.join("");
  array = array.toLowerCase();
  // array = array.toLowerCase();
  for(let i = 0; i < array.length; i++){
    if(array[i] in library){
      let temp = array[i];
      library[temp] += 1;
    }
    else{
      temp = array[i];
      library[temp] = 1;
    }
  }
}
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

console.log(wordCounter(array));