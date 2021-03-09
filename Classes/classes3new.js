class SortNumber{
  constructor(){
    this.numList = []
  }

  removeNum(num){
    let index = this.numList.indexOf(num)
    if(index > -1){
      this.numList.splice(index,1);
      return true
    }
    return false;
  }

  addNum(num){
    if(this.isPrime(num) && !this.numList.includes(num)){
      this.insertByVal(num)
      return true;
    }
    return false;
  }

  share(sortNumber){
    let count = 0;
    for(let i=0; i<this.numList.length; i++){
      for(let k=0; k<sortNumber.numList.length; k++){
        if(this.numList[i] === sortNumber.numList[k]){
          count++
        }
      }
    }
    return count;
  }

  union(sortNumber){
    let newArray = [...this.numList];

    for(let i=0; i< sortNumber.numList.length; i++){
      if(!newArray.includes)
    }
  }

  insertByVal(num){
    if(this.numList.length === 0){//if it is empty
      this.numList.push(num)
    }
    else{
      let add = false;
      for(let i = 0 ; i < this.numList.length && !add ; i++){
          if(num < this.numList[i]){
            this.numList.splice(i,0,num);
            add = true;
        }
      }
      if(!add){
        this.numList.push(num)
      }
    }
  }  

  isPrime(num){
    if(num === 0 || num === 1){
      return false;
    }

    for(let i=2; i<num/2; i++){
      if(num % i === 0){
        return false;
      }
    }
    return true;
  }

  print(num){
    for(let i=0; i<num; i++){
      console.log(this.numList[i])
    }
  }


}

let sortNumbers1 = new SortNumber();
let sortNumbers2 = new SortNumber();

//console.log(sortNumbers1.isPrime(5)) //true
//console.log(sortNumbers2.isPrime(8)) //false

(sortNumbers1.addNum(11)) //true
(sortNumbers1.addNum(11)) //true
console.log(sortNumbers1.addNum(11)) //true
console.log(sortNumbers1.addNum(13)) //true