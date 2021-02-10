
let myCountry = {
  country: "China",
  capital: "Beijing",
  language: "Chinese",
  population: 1000,
  neighbours: ["Russia", "Laos", "Vietnam"],
  // describe : function() {
  //   return (`${this.country} has ${this.population} million people, their mother tounge is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
  // }

  checkIsland : function(){
    let isIsland = (this.neighbours.length === 0) ? true : false;
    if(isIsland == true){
      return (`${this.country} is an island`);
    }
    else{
      return (`${this.country} is not an island`);
    }
  }
};

// myCountry.describe();
// let whatCountry = console.log(myCountry.describe());

let whatIsland = console.log(myCountry.checkIsland());