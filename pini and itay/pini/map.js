/*2.1*/

// const toNum = (array) => {
//   array.map(el =>{
//     return parseInt(el)
//   })
// }
// const numbers = ["2", "5", "100"];

// console.log(toNum(numbers))




// const toFloat = (array) => {
//   array.map(el =>{
//     return parseFloat(el)
//   })
// }

// const floatNumbers = ["2.5", "5.9", "100.33"];
// console.log(toFloat(floatNumbers))


const newReleases = [
  {
  id: 70111470,
  title: "Die Hard",
  boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
  uri: "http://api.netflix.com/catalog/titles/movies/70111470",
  rating: [4.0],
  bookmark: [],
  },
  {
  id: 654356453,
  title: "Bad Boys",
  boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
  uri: "http://api.netflix.com/catalog/titles/movies/70111470",
  rating: [5.0],
  bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
  id: 65432445,
  title: "The Chamber",
  boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
  uri: "http://api.netflix.com/catalog/titles/movies/70111470",
  rating: [4.0],
  bookmark: [],
  },
  {
  id: 675465,
  title: "Fracture",
  boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
  uri: "http://api.netflix.com/catalog/titles/movies/70111470",
  rating: [5.0],
  bookmark: [{ id: 432534, time: 65876586 }],
  },
];

const movieNames = () =>{
  newReleases.map(movie =>{
    return ({id:movie.id, name:movie.title})
  })
}
console.log(movieNames())