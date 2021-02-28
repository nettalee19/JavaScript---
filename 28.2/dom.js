let person = {
  name: 'gil',
  sayName: function (){
    console.log(`hello ${this.name}`)
  },
  umm: function(){
    setTimeout(console.log(`hello ${this.name}`), 1000)
  }
}

// let me = {
//   name:'netta'
// }

person.sayName();
person.umm();
//sayName.call(me)
//me.sayName()