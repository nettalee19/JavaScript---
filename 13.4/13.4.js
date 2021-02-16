
// shapePyramid = (num) =>{

//   for(let i =0; i<num ; i++){

//     for(let j = 0; j <= i ; j++){
//       (console.log('#')) ;
//     }

//     for(let j = i; j < num ; j++){
//       (console.log('-')) ;
//     }
//   }
 
// }

// console.log(shapePyramid(3))


generatePyramid = (num) => {
  
  let output = '';
  for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= i; j++) {
          output += '#' + '  ';
      }
      console.log(output);
      output = '';
  }
}

generatePyramid(5);



//console.log(shapePyramid(3))





