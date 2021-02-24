let clock = document.querySelector("#clock")
let btnStart = document.querySelector("#btn-start")
let btnStop = document.querySelector("#btn-stop")

let start = 0;
btnStart.addEventListener('click', ()=>{
  setInterval(()=>{
    start +=1;
    clock.innerHTML =  `${Math.floor(start/60/60%1000)} : ${Math.floor(start/60%1000)} : ${Math.floor(start%100)}`
  },1)
})

// let start = 50;

// setInterval(()=>{
//     start +=1;
//     clock.innerHTML =  `${Math.floor(start/60%60)}  : ${start%60}`
// },1000)

