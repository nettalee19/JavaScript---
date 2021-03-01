// fetch("https://swapi.dev/api/people/2")
// .then(res => res.json())
// .then(data => console.log(data))


// let table = document.createElement('table');
// table.classList.add('table');

const people = fetch("https://swapi.dev/api/people/")
const planets = fetch("https://swapi.dev/api/planets/")

people.then(res => res.json).then(data => console.log(data)).catch((err) => console.log(err))