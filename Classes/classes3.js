class sortNumber {
  constructor(){
    this.numList = [];
  }

  addNum(num){
    for(let i=0; ;i++){
      numList[i] += num
    }

    if(numList){
      return true;
    }
    return false;
  }

  removeNum(num){
    for(let i=0; ;i++){
      if(numList[i].includes(num)){
        numList.slice(i,i+1)
        return true;
      }
      return false;
    }
  }

  getAll(){
    return this.numList;
  }

  print(){
    for(let i=0; i<this.numList.length;i++){
      console.log(this.numList[i])
    }
  }

}