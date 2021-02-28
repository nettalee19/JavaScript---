let person = {
  name: 'gil',
  sayName: function (){
    console.log(`hello ${this.name}`)
  },
  umm: function(){
    setTimeout(function(){
      console.log(`hello ${this.name}`)
    }.bind(this), 1000)
  }
}

person.sayName();
person.umm();