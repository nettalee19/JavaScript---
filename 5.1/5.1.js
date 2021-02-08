// let country = 'Japan';

const countryToLiveIn = (language, isIsland, population, country) => {
  if ( (language == 'English') && (isIsland != true) && (population < 50) ){
    console.log("You should live in " + country);
  }
  else{
    console.log(country +" does not meet your criteria");
  }
}

chosenCountry = countryToLiveIn('English', true, 60, 'Japan');
chosenCountry = countryToLiveIn('English', false, 10, 'Japan');
chosenCountry = countryToLiveIn('Spanish', false, 20, 'Spain');
chosenCountry = countryToLiveIn('English', false, 20, 'Spain');
chosenCountry = countryToLiveIn('English', false, 9, 'Israel');
chosenCountry = countryToLiveIn('English', true, 9, 'Israel');





// const chosenCountry = countryToLiveIn('Spanish', true, 60, 'japan');


// if (chosenCountry === 1){
//   console.log("You should live in " + country);
// }
// else{
//   console.log(country +" does not meet your criteria");

// }




