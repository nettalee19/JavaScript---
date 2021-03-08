class Animal {
  constructor(name, sound){
    this.name = name;
    this.sound = sound;
  };

  getName() {
    return this.name;
  }

  getSound(){
    return this.sound;
  }

  print(){
    console.log(`name: ${this.getName()}, age: ${this.getSound()}`)
  }
}

let a1 = new Animal('dog', 'haw');
let a2 = new Animal('cat', 'maw');
let a3 = new Animal('sheep', 'meeh');