function getEven (arr){
  return new Promise((resolve, reject)=>{
   if(arr.length !== 0){
     
     resolve( arr.filter((el) =>{
       return el%2 === 0
     }))
   }
   else{
     reject('no elements')
   }
    
  })

}

// async function umm(){

// }

getEven([2,"hello",5,8])
.then((mes) => {
  console.log(mes)
}).catch((mes) => {
  console.log(mes)
})

