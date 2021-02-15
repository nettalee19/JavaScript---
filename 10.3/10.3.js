const data = [
  {
  name: "John",
  birthday: "1-1-1995",
  favoriteFoods: {
  meats: ["hamburgers", "sausages"],
  fish: ["salmon", "pike"],
     },
    },
  {
  name: "Mark",
  birthday: "10-5-1980",
  favoriteFoods: {
  meats: ["hamburgers", "steak", "lamb"],
  fish: ["tuna", "salmon", "barracuda"],
      },
    },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["ham", "chicken"],
  fish: ["pike"],
      },
    },
  {
  name: "Thomas",
  birthday: "1-10-1990",
  favoriteFoods: {
  meats: ["bird", "rooster"],
  fish: ["salmon"],
      },
    },
  {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
  meats: ["hamburgers", "lamb"],
  fish: ["anchovies", "tuna"],
    },
  },
  ];

  /*1*/
  const cPepole = data.map(function(person){
    console.log(person.name);
  })

  /*2*/
  const bPepole = data.filter(function(person){
   
    const birthday = new Date(person.birthday);
    
    if(birthday.getFullYear() < 1990){
      console.log(person.name, birthday.getFullYear())
    }
    
  })

   //console.log(person.birthday);
   // console.log(birthday);
    
    //console.log(birthday.getFullYear());

  /*3*/
  // const foodPepole = data.map(function(person){
    
    

  // }

  const foodPeople = (array) => {
    let result = {};
    let foods = [];
    array.forEach(element => element.favoriteFoods.meats.forEach(food => foods.push(food)))
    array.forEach(element => element.favoriteFoods.fish.forEach(food => foods.push(food)))

    console.log(foods);
    for(let food of foods){
      if(food in foods){
        if(food in result){
          result[food] += 1;
        }
        else{
          result[food] = 1;
        }
      }
    }
    return array;
  }

  