


const people = ["Greg", "Mary", "Devon", "James"];

/*1 */
for(let i = 0 ; i < people.length ; i++){
  console.log(people[i]);
}

/*2 */
 people.shift();
for(let i = 0 ; i < people.length ; i++){
  console.log(people[i]);
}

/*3 */
 people.pop();
for(let i = 0 ; i < people.length ; i++){
  console.log(people[i]);
}

/*4 */
 people.unshift("Matt");
for(let i = 0 ; i < people.length ; i++){
  console.log(people[i]);
}

/*5 */
 people.push("Netta");
for(let i = 0 ; i < people.length ; i++){
  console.log(people[i]);
}

/*6 */

const peopletr = ["Greg", "Mary", "Devon", "James"];


for(let i = 0 ; peopletr[i] !== "Devon" ; i++){
  console.log(peopletr[i]);
}

/*7 */
let select = people.slice(2,4);
console.log(select);

/*8*/
let maryLoc = console.log(people.indexOf("Mary"));

/*9*/
let fooLoc = console.log(people.indexOf("foo"));



/*10*/
const people2 = ["Greg", "Mary", "Devon", "James"];

let change = people2.splice(2, 1, "Elizabeth");
let change2 = people2.splice(3, 0, "Artie");

for(let i = 0; i < people2.length; i++){
  console.log(people2[i]);
}

/*11 */
let bob = "Bob";
let withBob = people2.concat(bob);

console.log(withBob);
