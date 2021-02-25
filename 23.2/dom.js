let clock = document.querySelector("#clock")
let btnStart = document.querySelector("#btn-start")
let btnStop = document.querySelector("#btn-stop")

let start = 15000;
btnStart.addEventListener('click', ()=>{
  setInterval(()=>{
    start +=1;
    clock.innerHTML =  `${Math.floor(start/60/100%60)} : ${Math.floor(start/100%60)} : ${Math.floor(start%100)}`
  },1)
})

// btnStop.addEventListener('click', ()=>{
  
//   function stop() {
//     if (start) {
//       clearInterval(setInterval);
//       interval = null;
//     }
//   }
// })


