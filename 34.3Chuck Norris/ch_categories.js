const joke = document.querySelector("#joke")
const categories = document.querySelector("#categories")
const btn = document.querySelector(".btn")

const randomJoke = 'https://api.chucknorris.io/jokes/random'
const catApi = 'https://api.chucknorris.io/jokes/categories' 
const jokeByCat = 'https://api.chucknorris.io/jokes/random?category='

async function getJoke(){
  let jokeChosen = await (await fetch(jokeByCat + categories.value)).json();
  joke.innerHTML = jokeChosen.value
}
async function createDropDown(){
  let allCat = await(await fetch(catApi)).json()
  let allOptions = allCat.map((cat)=>{
    return `<option value="${cat}">${cat}</option>`
  })
  categories.innerHTML = '<option>all</option>'+allOptions;
}
const getRandomJoke = async() =>{
  return await (await fetch(randomJoke)).json();
}

btn.addEventListener("click", getJoke)