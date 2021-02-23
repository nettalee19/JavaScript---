

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

  const uDiv = document.querySelector(".users")
  const orderList = document.createElement("ol")

  users.forEach((person) => {
    const liElement = document.createElement("li")
    liElement.textContent = person.firstName + ' ' + person.lastName
    liElement.setAttribute('data-id',person.id)
    orderList.append(liElement)
  })

  orderList.style.listStyleType = 'none';
  uDiv.append(orderList)



  // const usersDiv = document.querySelector('.users'); //get the div from html

  // const orderList = document.createElement("ol"); //creating ol

  // users.forEach((user)=>{
  //     const test  = document.createElement("li")
  //     test.textContent = user.firstName + ' ' +user.lastName;
  //     test.setAttribute('data-id',user.id)
  //     orderList.append(test)
  // })

  // orderList.style.listStyleType = 'none';

  // usersDiv.append(orderList)