
name1 ={
  name: "Ali",
}

name2 ={
  name: "Bili",
}

name3 ={
  name: "Cici",
}

const nameMap = new Map();

nameMap.set(name1, '123456');
nameMap.set(name2, '345678');
nameMap.set(name3, '456789');


for(const name of nameMap){
  console.log( name[0]);
}

for(const id of nameMap){
  console.log( id[1]);
}

