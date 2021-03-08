class Cars {
  constructor(brand, speed){
    this.brand = brand;
    this.speed = speed;
  }

  getBrand(){
    return this.brand
  }

  getSpeed(){
    return this.speed
  }

  setSpeed(){
    return this.getSpeed() = newSpeed;
  }

  print(){
    console.log(`brand: ${this.getBrand()}, speed: ${this.getSpeed()}`)
  }

}

let car1 = new Cars('toyota', 120)
let newSpeed = 160
car1.print()




let carArray = [new Cars('mazda', 130), new Cars('bmw', 240), new Cars('lincolen', 520), new Cars('volvo', 400)]

let maxSpeed = carArray.reduce((max,val) =>{
  return max.speed > val.speed ? max : val;
})
console.log(maxSpeed.getBrand())


//let sortSpeed = 
//carArray.sort((a,b) => a.speed - b.speed)
//console.log((carArray.sort((a,b) => a.speed - b.speed)).getBrand())

function sortArr(arr){
  return arr.sort((a,b) => {
    return b.speed - a.speed
  })
} 
console.log(sortArr(carArray))