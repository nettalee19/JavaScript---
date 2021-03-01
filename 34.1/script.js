
//TODO  fetch("https://swapi.dev/api/people/")
//TODO .then(res => res.json())
//TODO .then(data => console.log(data))


let people = fetch("https://swapi.dev/api/people/")
.then(res => res.json())
.then(data => console.log(data))

let tenPepole = []

for(let i= 0; i<10; i++){
  tenPepole.push(people.name, people.height, people.hair_color)
  console.log(tenPepole[i])
}












// let table = document.createElement('table');
// table.classList.add('table');

// const people = fetch("https://swapi.dev/api/people/")
// const planets = fetch("https://swapi.dev/api/planets/")

// people.then(res => res.json).then(data => console.log(data))//.catch((err) => console.log(err))