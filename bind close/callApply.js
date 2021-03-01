let p1 = {firstName: 'itay', lastName: 'Turgeman', age: 30}
let p2 = {firstName: 'avi', lastName: 'Cohen', age: 42}

function hello(bless,end) {
    console.log(`${bless} ${this.firstName} ${this.lastName} ${end}`)
}

hello.call(p1,'Hello','bye')
hello.call(p2,'Hello','bye')

hello.apply(p2,['Hello','bye'])
