const chuck = ('https://api.chucknorris.io/jokes/random')
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

