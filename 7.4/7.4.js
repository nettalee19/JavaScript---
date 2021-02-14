let candyStore = {
  candies: [ ///first object
  {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
  },

  {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
  },
  ],

  cashRegister: 200, //second object

  
  
}


function getCandy (candyStore, id){

    for(let i =0; i < candyStore.candies.length; i++){
      if(candyStore.candies[i].id == id ){
        return candyStore.candies[i];
      }
    }
    
}

const candy = getCandy(candyStore, '5hd7y');
console.log(candy.name)
console.log(candy.price)

function getPrice (candyStore, id){

    for(let i =0; i < candyStore.candies.length; i++){
      if(candyStore.candies[i].id == id ){
        return candyStore.candies[i].price;
      }
    }
    
}


function addCandy(candyStore, id, name, price, amount = 1){
    // let amount = 1;
    candyStore.candies.push({name, id, price, amount});
}



function buy(candyStore, id){

  let candy =getCandy(candyStore,id);
  
  candyStore.amount -= 1;
  candyStore.cashRegister += candyStore.prive;
}


// console.log(getCandy(candyStore, '5hd7y'));
// console.log(getCandy(candyStore, 'as12f'));

// console.log(getPrice(candyStore, '5hd7y'));
// console.log(getPrice(candyStore, 'as12f'));

addCandy(candyStore, 'nl19', 'Mekupelet', 6);
console.log(getCandy(candyStore, 'nl19' ))