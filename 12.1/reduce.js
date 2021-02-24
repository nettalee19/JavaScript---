
const func = (array) => {
  return array.reduce((a,b) => (a+b))
}

const max = (array) => {
  return array.reduce((a,b) => {
    return Math.max(a,b)
  })
}

const evenSum = (array) => {
  return array.reduce((a,b) => {
    if (b%2 ===0){
      return (a+b)
    }
    else {
      return a
    }
  },0)
}


const avg = (array) => {
  return array.reduce((a,b) => {
    return (a+b)
  })/(array.length)
}


console.log(func([1,2,3,4]))
console.log(max([1,2,3,4]))
console.log(evenSum([1,2,3,4]))
console.log(avg([1,2,3,4]))