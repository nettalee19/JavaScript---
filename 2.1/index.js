(function(){
  'use strict';
  
  var readlineSync = require('readline-sync');

  let population; 
  let Capitol;

  function describeCountry(chosenCountry){
    
    switch(chosenCountry) {
      case 'Japan':
        population = 126.3;
        Capitol = 'Tokyo';
        break;
      case 'Israel':
        population = 9;
        Capitol = 'Tel Aviv';
      case 'USA':
        population = 328.2;
        Capitol = 'Washington DC';
        break;
        
    }
    console.log(chosenCountry + " Has population of " + population + " million people and its capital city is " + Capitol);

    // if (chosenCountry === 'Japan'){
    //   population: 126.3;
    //   Capitol: 'Tokyo';
    // }
    // if (chosenCountry === 'Israel'){
    //   population: 9;
    //   Capitol: 'Tel Aviv';
    // }
    // if (chosenCountry === 'USA'){
    //   population: 328.2;
    //   Capitol: 'Washington DC';
    // }

    
    
  }


  let chosenCountry = readlineSync.question("Please choose a country (out of the options : Japan, Israel, USA  : ");
  
  describeCountry(chosenCountry);

  describeCountry('Japan');
  describeCountry('Israel');
  describeCountry('USA');
  
})();