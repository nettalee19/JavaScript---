let first = document.querySelector(".start-here")


first.textContent = "Main Title"

let fourLi = document.createElement('li')
fourLi.textContent = "sub title 4"
first.nextElementSibling.firstElementChild.appendChild(fourLi)

first.nextElementSibling.nextElementSibling.remove()

first.previousElementSibling.textContent = "Master of the Dom"

first.parentElement.nextElementSibling.textContent = "Good Morning, Netta"

