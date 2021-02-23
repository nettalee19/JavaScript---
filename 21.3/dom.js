let list = document.querySelector(".list")

const users = [
  {
  id: 167464,
  firstName: "Jimmy",
  lastName: "Arnold",
  email: "jimmya@gmail.com",
  },
  {
  id: 578447,
  firstName: "Martha",
  lastName: "Goldman",
  email: "gold@hotmail.com",
  },
  {
  id: 864578,
  firstName: "Tim",
  lastName: "Burton",
  email: "timmy.hotmail.com",
  },
  ];


  let newUl = document.createElement('ul')
  list.appendChild(newUl)
  
  let newLi = document.createElement('li')
  
  users.forEach(person =>{
    newLi.appendChild.textContent(person.firstName, person.lastName)
    console.log(person.firstName, person.lastName)
  })