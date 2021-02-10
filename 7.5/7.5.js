


function wordCounter(array){
  let object = {}; 

  for(i = 0 ; i < array.length ; i++){
    let correntWord[i] = Array.from(array);

    for(let j=0 ; j < correntWord.length; j++){
      obj[(correntWord[j]] = obj[(correntWord[j]].toLowerCase();
      
      if (correntWord[j] != obj || correntWord[j].toLowerCase() != obj || correntWord[j].toUpperCase()){
        
        object(correntWord[j]) = 1;
      }
      else{
        object.correntWord[j] += 1;
      }
    }
  }
  return object;
}
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

console.log(wordCounter(array));