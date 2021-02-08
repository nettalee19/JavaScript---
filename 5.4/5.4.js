const colorPicker = (color) => {
  let colorSet = color.toLowerCase();
  
  switch(colorSet){
    
    case 'yellow':
    case 'pink':
    case 'orange':
      console.log("light color");
      break;
      // return 1;

    case 'blue': 
    case 'brown':
    case 'purple':
      console.log("dark color");
      break;
      // return -1;

    default:
      console.log('Unknown color');
      // return 0;
      
  }
}

let colorOne= colorPicker('YeLLow');
let colorTwo= colorPicker('brown');
let colorThree= colorPicker('green');



// if(colorOne === 1){
//   console.log('light color');
// }

// else if(colorOne === -1){
//   console.log('dark color');
// }

// else{
//   console.log('Unknown color');
// }