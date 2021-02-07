(function(){
  'use strict';
  
  var readlineSync = require('readline-sync');

  let population; 
  let Capitol;

  function tellFortune(jobTitle, location, partnerName, numberOfChildren){
    
    console.log("You will be a " + jobTitle + " in " + location + " and married to " + partnerName + " with " +numberOfChildren+ " children.");

    
  }

  // let jobTitle = readlineSync.question("Please enter your job: ");
  // let location = readlineSync.question("Please enter your job: ");
  // let partnerName = readlineSync.question("Please enter your job: ");
  // let numberOfChildren = readlineSync.question("Please enter your job: ");
  
  // tellFortune(jobTitle, location, partnerName, numberOfChildren);
  tellFortune('engineer', 'tel aviv', 'roy', '15');
  
  
  
  


  // let chosenCountry = readlineSync.question("Please choose a country (out of the options : Japan, Israel, USA  : ");
  
  // describeCountry(chosenCountry);

  // describeCountry('Japan');
  // describeCountry('Israel');
  // describeCountry('USA');


  // let country = readlineSync.question("Please choose a country: ");
  // let population = readlineSync.question("Please enter populaation: ");
  // let capital = readlineSync.question("Please choose a country: ");
  
})();