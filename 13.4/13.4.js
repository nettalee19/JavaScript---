
shapePyramid = (num) =>{
  let pyrArray=[];

  for(let i =1; i<=num ; i++){
    for(let j =1; j<=i ; j++){
      (console.log('#')) ;
    }

    for(let j =1; j<num ; j++){
      (console.log('-')) ;
    }
  }

  
  
}

console.log(generatePyramid(3))

// function generatePyramid() {
//   var totalNumberofRows = 5;
//   var output = '*';
//   for (var i = 1; i <= totalNumberofRows; i++) {
//       for (var j = 1; j <= i; j++) {
//           output += j + '  ';
//       }
//       console.log(output);
//       output = '*';
//   }
// }




