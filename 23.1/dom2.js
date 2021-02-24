let clock= document.querySelector("#clock")

function sTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  hour = addZero(hour)
  minute = addZero(minute)
  second = addZero(second)

  clock.innerText = hour + ":" + minute + ":" + second;
  
  let time = setTimeout(function(){ sTime() }, 1000)
  return time;
} 

function addZero (i){
  if(i<10){
    return "0" + i;
  }
  else{
    return i
  }
}

sTime();