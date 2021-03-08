const chuckCategories = ('https://api.chucknorris.io/jokes/categories')
//const select = document.createElement("select")
const select = document.querySelector("#select")

for(let i=0; i<select.length; i++){
  
}







const showJoke = document.querySelector(".showJoke")
const btn = document.querySelector(".btn")
//console.log(chuck)


const getJoke = async () => {
  let joke = await fetch(chuck)
  let data = await joke.json();
  showJoke.innerHTML = data.value
  //console.log(data)
}
btn.addEventListener("click", getJoke)

