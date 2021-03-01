//let p = new Promise();

function compTen(num){
  //return new Promise((resolve, reject) => {
  let p = new Promise((resolve, reject) => {
    if(num > 10){
      resolve("resolve")
    }
    else{
      reject("reject")
    }
  })

  p.then((message)=> {
    console.log(`${num} is greater then 10, ${message}d`) 
  }).catch((message) => {
    console.log(`${num} is less then 10, ${message}d`) 

  })
}

//(compTen(12))
(compTen(7))