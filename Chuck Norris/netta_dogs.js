const source = 'https://dog.ceo/api/breeds/image/random';
const btn = document.querySelector(".btn")
const dog = document.querySelector(".dog")
const num = document.querySelector("#numImg")

async function getDog() {
  let result = await fetch(`${source}/${num.value}`);
  let data = await result.json();
  //let data = await (await fetch(source)).json();
  console.log(data)
  //dog.innerHTML = `<img src="${data.message}" alt="" class="pic">` 

  const images = data.message.map((img) => {
    return img
  })

  //dog.innerHTML ="";
  data.message.forEach((img) => {
    dog.innerHTML += `<img id="img" width="100" height="100" src="${img}"/>`
    //`<img src="${img}" alt="" class="pic">`
  });
}


btn.addEventListener("click", getDog)