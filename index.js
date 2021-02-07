(function(){
  'use strict';
  
  const readlineSync = require('readline-sync');

  function describeCountry(chosenCountry){
    let Japan = {
      population: 126.3,
      Capital: Tokyo
    };
    let Israel = {
      population: 9,
      Capital: Tel_Aviv
    };
    let USA = {
      population: 328.2,
      Capital: Washington_DC
    };

    console.log(chosenCountry + " Has population of " + chosenCountry.population + " million people and its capital city is " + " chosenCountry.Capital");
  }


  let chosenCountry = readlineSync.question("Please choose a country (out of the options : Japan, Israel, USA  :");
 
})();