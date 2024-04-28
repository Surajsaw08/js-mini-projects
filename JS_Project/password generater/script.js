const passwordBox = document.getElementById("password");
const generateBtn = document.getElementById("genteatebtn");
const length =12;
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase ="abcdefghijklmnopqrstuvwxyz"
const number ="0123456789"
const symbole ="@#$%^&*()_+~|}{[]<>/-="

const allchar = upperCase+lowerCase+number+symbole;

function createpassword(){
  let password ="";
  password +=upperCase[Math.floor(Math.random()*upperCase.length)];
  password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
  password +=number[Math.floor(Math.random()*number.length)];
  password +=symbole[Math.floor(Math.random()*symbole.length)];
  while(length>password.length){
    password +=allchar[Math.floor(Math.random()*allchar.length)];
  }
  passwordBox.value=password;
}

function copypassword(){
  const passwordText = document.getElementById("password");
  passwordText.select();
  document.execCommand("copy");

}