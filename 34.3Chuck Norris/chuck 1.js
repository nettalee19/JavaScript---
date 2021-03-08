async function jokePub(category) {
  console.log(category);
  const jokeSource = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const getJoke = await fetch(jokeSource);
  let jokeObj = await getJoke.json();
  let joke = jokeObj.value;
  console.log(getJoke);
  console.log(joke);
  return joke;
}


async function jokeToHtml(category) {
  console.log(category);
  let jokeFromApi = await jokePub(category);
  let container = document.querySelector(`.container`);
  let joke = document.createElement(`p`);
  container.innerHTML = ``;
  container.appendChild(joke);
  joke.innerHTML = `${jokeFromApi}`
}


async function run() {
  const categorySrc = `https://api.chucknorris.io/jokes/categories`;
  const getCategory = await fetch(categorySrc);
  const categoiesData = await getCategory.json();
  console.log(categoiesData);

  let button = document.querySelector(`.getJoke`);
  let categories = document.querySelector(`#category`);

  categoiesData.forEach(ele => {
    categories.innerHTML += `<option value="${ele}">${ele}</option>`;
  });


  // button.addEventListener("click", jokeToHtml(chosenCat));
  button.addEventListener("click", async () => {
    let chosenCat = categories.value;
    console.log(chosenCat);
    await jokeToHtml(chosenCat);
  });
}

run();