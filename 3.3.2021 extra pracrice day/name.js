

const persons = [
  {name: "netta",
  age: 31
  },
  {name: "aya",
  age: 27
  },
  {name: "tracy",
  age: 5
  },
]

function getName(arr){
  return new Promise ((resolve, reject) =>{
    let names = arr.map((elemnt)=>{
    return elemnt.name
    })
    resolve( names)
    
    // let names = []
    
    //   arr.forEach(element => {
    //     names.push(element.name)
    //   })
    //   resolve(names)
    
  })
}

// getName(persons).then((result)=>{
//   console.log(result)
// })

async function namePerson (){
  let data = await getName(persons)
  console.log(data)
}

namePerson()













// function getEven (arr){
//   return new Promise((resolve, reject)=>{
//    if(arr.length !== 0){
     
//      resolve( arr.filter((el) =>{
//        return el%2 === 0
//      }))
//    }
//    else{
//      reject('no elements')
//    }
    
//   })

// }

// // async function umm(){

// // }

// getEven([2,"hello",5,8])
// .then((mes) => {
//   console.log(mes)
// }).catch((mes) => {
//   console.log(mes)
// })

