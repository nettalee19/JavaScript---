const ba = document.querySelector('#ba');
let passwordInput, btn;
start();

function start() {
    for (let i = 0; i < 10  ; i++) {
        ba.innerHTML += `<input type="text" id="pass" maxLength="1"/>`
    }

    ba.innerHTML += '<input id="click" type="button" value="click">'
    btn = document.querySelector('#click')
    passwordInput = document.querySelectorAll('#pass');//list
    passwordInput.forEach((el, index) => {
        el.classList.add("password")
        el.addEventListener('keyup', (e) => {

            if(checkIfAllFull()){
                btn.click();
            }
            // console.log(e) //talk about it
            el.nextElementSibling.focus();
            el.before()
        })
    })
}

const checkIfAllFull = () => {
    for (let i = 0; i < passwordInput.length; i++) {
        if (passwordInput[i].value.length === 0) {
            return false;
        }
    }
    return true;
}

btn.addEventListener('focus', (e) => {
    console.log('btn is focus')
    btn.click();
    // passwordInput[2].
})

btn.addEventListener('click', () => {
    console.log('click')
})


document.getElementById('test').addEventListener("change",(e)=>{
   console.log( e.target.value)
})

document.getElementById('test').addEventListener("keydown",(e)=>{
   console.log('click')
})
console.log('ba  :', ba);
console.log('passwordInput  :', passwordInput);
console.log('click :', click)