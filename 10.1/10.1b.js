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

  // const idName = () => {
  //   let movies = [];
  //   newReleases.forEach(movie => {
  //     movies.push({id: movie.id, name:movie.title})
  //   })
  //   return movies 
  // }
  // console.log(idName(newReleases))

  // const idName = () =>{
  //   newReleases.map(movie => {
  //     return ({id:movie.id, name:movie.title})
  //   })
  // }

  // console.log(idName(newReleases))


  // const idName =(array) => {
  //   let movieArr =[]
  //   newReleases.forEach(movie => {
  //     movieArr.push({id: movie.id, name: movie.title})
  //   })
  //   return movieArr
  // }

  // console.log(idName(newReleases))

  const idName =(array) => {
    array.map(movie => {return (id: movie.id, name: movie.title)
    })
  }

  console.log(idName(newReleases))