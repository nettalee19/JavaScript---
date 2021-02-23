const btn = document.querySelector(".btn")
let name = document.querySelector('[name="name"]')
let age = document.querySelector('[name="age"]')
let email = document.querySelector('[name="email"]')

let form = document.querySelector('form')
let p = document.createElement('p')


btn.addEventListener("click", () =>{
  
  const shouldSubmit = confirm(
    `The info you entered is: name: ${name.value}, age: ${age.value}, email: ${email.value}.  Do you confirm?`
    )
  if(shouldSubmit){
    //alert("Congratulations! You successfully sent this form")
    form.remove()
    p.textContent = "Congratulations! You successfully sent this form"
    document.body.appendChild(p)
  }
  
})







// signUpForm = document.querySelector('[name="signup"]')

// signUpForm.addEventListener("submit", (event) =>{
  
//   const shouldSubmit = confirm(
//     "The info you entered: Do you confirm?"
//   )
 
  
// })
