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

async function umm(){
  try{
    const data = await getEven([1,3,5,9]);
    console.log(data)
  }
  catch(err){
    console.log('error ',err)
  }
}

umm()

//getEven([2,3,6,8,10])
// .then((mes) => {
//   console.log(mes)
// }).catch((mes) => {
//   console.log(mes)
// })

