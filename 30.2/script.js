

function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    let noString = arr.flter((str)=>{
      return typeof str !== "string"
    })
    if(noString.length){
      reject('at least one element is not a string')
    } 
    else{
      resolve(arr.map((str)=> {
        return str.toUpperCase()
      }))
    }
  })
}

makeAllCaps(arr).then((result) => {
  console.log(result)
})





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