function makeAllCaps(arr) {
  return new Promise((resolve, reject) =>{
    let noString = arr.filter((str) =>{
      return typeof str !== "string"
    })
    if(noString.length !== 0){
      reject('at least one item not a string')
    }
    else{
      resolve(arr.map((str) => {
        return str.toUpperCase()
      }))
    }
  })
}

function sortWords(arr){
  return new Promise((resolve, reject) =>{
    if(arr.length > 0){
      resolve(arr.sort())
    }
    else {
      reject('array is empty')
    }
  })


}

//console.log(makeAllCaps())
console.log(makeAllCaps(["netta", "avidan"])) ;
console.log(sortWords(["netta", "avidan"])) ;




// function sortWords() {
//   array.sort((a,b) => a.length - b.length)
// }

// function makeAllCaps(array, callback){
//   let p = new Promise((resolve, reject)=>{
//     array.map(element => {
//       if (typeof(element) !== "string")
//       reject("error")
//       else{
//         resolve (array.map(element => element[0] = elemnt[0].toUpperCase()))
//         callback(array)
//       }
//     })
    
//   })
// }

// makeAllCaps(["helo","user"])