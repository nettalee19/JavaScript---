function Pokeman(pokemonName, pokemonType, pokemonAttackList){
  this.name = pokemonName;
  this.type = pokemonType;
  this.attack = pokemonAttackList;
}


const charmander = new Pokeman('charmander', "fire", (['attack 1','attack 2']));
const balbazor = new Pokeman('balbazor', "grass", ['attack 3','attack 4']);
const squirtle = new Pokeman('squirtle', "water", ['attack 5','attack 6']);

Pokeman.prototype.callPokemon = function(){
  console.log(`I choose you ${this.name}`)
}
Pokeman.prototype.callAttack = function(){
  console.log(`${this.name} used ${this.attack}`)
}

charmander.callPokemon()
balbazor.callPokemon()
squirtle.callPokemon()

charmander.callAttack(0)
balbazor.callAttack(0)
squirtle.callAttack(0)