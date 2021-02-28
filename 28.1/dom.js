const hero = {
  health: 5,
  power: 68,
  getStrength: function(){
    if (this.health <= 5){
    return this.power - 10;
    } 
    else return this.power;
  }
}

function whoIsStronger(getStrength){ //58
  const myStrength = 82;
  if (getStrength() < myStrength){
    return "I am stronger";
  } 
  else return "You are stronger";
}
//console.log(whoIsStronger(hero.getStrength));

// let c = hero.getStrength.bind(hero)
// console.log(whoIsStronger(c))

console.log(whoIsStronger(hero.getStrength.bind(hero)))