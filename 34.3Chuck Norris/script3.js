//async 

  const dog = 'https://dog.ceo/api/breeds/image/random';
  const showDog = document.querySelector(".showDog");
  const btn3 = document.querySelector(".btn3");




const getDog = async () => {
  let photo = await fetch(dog)
  let data = await photo.json();
  console.log(data.message)
  showDog.innerHTML = `<img src="${data.message}" alt="" class="pic">` 
}
btn3.addEventListener("click", getDog)

//getDog();

