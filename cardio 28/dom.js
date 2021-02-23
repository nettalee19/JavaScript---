const div = document.createElement('div')

div.classList.add('wrapper')

document.body.appendChild(div)

const ul = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`

div.innerHTML = ul;
console.log(div)

const img = document.createElement('img')
img.src = ''
img.Width = 250
img.classList.add('cute')
img.alt = 'Cute Puppy'
div.appendChild(img)

const myHTML = `
<div class="myDiv">
<p> par one </p>
<p> par two </p>
<p> par three </p>
</div>
`
const ulElement = div.querySelector('ul') ;
console.log(ulElement) 

ulElement.insertAdjacentElement('beforebegin', myHTML)
//ulElement.insertAdjacentElement('beforebegin', myHTML)
const myDiv = div.querySelector('.myDiv')
//const myDiv = div.firstElementChild;
console.log(myDiv.children)
myDiv.children[1].classList.add("warning")
//myDiv.children

myDiv.firstElementChild.remove()


function generatePlayerCard(name, age, height){
  const html = `
  <div class='playercard'>
    <h2>${name} - ${age}</h2>
    <p>bla bla ${height}</p>
    <button class="delete" type="button">&times; Delete
    <\button>
  </div>
  `;
  return html
}

const cards = document.createElement('div')
cards.classList.add('cards')

const cardsHTML = generatePlayerCard('netta'31, 160)
console.log(cardsHTML)
cardsHTML = cardsHTML + generatePlayerCard('tracy', 5, 20)
cardsHTML = cardsHTML + generatePlayerCard('aya', 27, 160)
console.log(cardsHTML)
//cards.insertAdjacentHTML('afterbegin',

cards.innerHTML = cardsHTML

div.insertAdjacentElement('beforebegin',cards)

const buttons = document.querySelectorAll('.delete')
//console.log(buttons)

function deleteCard(event){
  const buttonThatGotClicked = event.currentTarget
  buttonThatGotClicked.parentElemnt.remove()
  //buttonThatGotClicked.parentElemnt.closest('.playerCard').remove()
  //console.log(event.currentTarget)
  //console.log('DELETE CARD!')
}

buttons.forEach(button.addEventListener('click',deleteCard))
