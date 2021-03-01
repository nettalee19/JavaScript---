let avi = {name: 'avi', age: 100, city: 'beersheva'}

let obj = {
    age: 100,
    name: 'itay',
    print: function () {
        console.log(`${this.name} age : ${this.age} `)
    }
};

obj.print.bind(avi)()

// function print() {
//     console.log(`${this.name}  age : ${this.age}`);
// }

// let p1 =  print.bind(obj);
// console.log(p1())
// print.bind(obj)()
// let p2 = print.bind(avi)
// p2();
// print.bind(obj)();  option 2
