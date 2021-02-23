const btn = document.querySelector(".btn")
let name = document.querySelector('[name="name"]')
let age = document.querySelector('[name="age"]')
let email = document.querySelector('[name="email"]')



btn.addEventListener("click", () =>{
  
  const shouldSubmit = confirm(
    `The info you entered is: name: ${name.value}, age: ${age.value}, email: ${email.value}.  Do you confirm?`
    )
  if(shouldSubmit){
    alert("Congratulations! You successfully sent this form")
  }
  
})







// signUpForm = document.querySelector('[name="signup"]')

// signUpForm.addEventListener("submit", (event) =>{
  
//   const shouldSubmit = confirm(
//     "The info you entered: Do you confirm?"
//   )
 
  
// })
