const pwdStrong1 = (passwordLength) => {
  if (passwordLength > 7){
    console.log("Strong");
  }
  else {
    console.log("Weak");
  }
}
const pwdStrong2 = (passwordLength) => {
  let isStrength = passwordLength > 7 ? 1:-1;

  if(isStrength === 1){
    console.log("Strong");
  }
  else {
    console.log("Weak");
  }
}

const pwdStrong3 = (passwordLength) => {
  if (passwordLength > 7 && passwordLength <10){
    console.log("Strong");
  }
  else if(passwordLength <= 7 && passwordLength > 1){
    console.log("Weak");
  }
}

function hasUpperCase(str) {
  return (/[A-Z]/.test(str));
}

const pwdStrong4 = (password) => {
  
  let pwdLength = password.length;

  if( (pwdLength > 7) && (hasUpperCase(password) == true) ){
    console.log("Very Strong");
  }
  else if( (pwdLength > 7) ){
    console.log("Strong");
  }
  else if(pwdLength <= 7 && pwdLength > 1){
    console.log("Weak");
  }
}

let password = ('123467A8');
let passwordLength = password.length;

pwdStrong1(passwordLength);
pwdStrong2(passwordLength);
pwdStrong3(passwordLength);
pwdStrong4(password);