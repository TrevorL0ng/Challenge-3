// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var symbols = '!@#$%^&*()-_+=?';

// Write password to the #password input
function writePassword() {
  window.alert("Let's generate a password! I have a few questions for you...");

  var password = generatePassword();
 
 
  var generatePassword = function (){

    

  }
   var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
