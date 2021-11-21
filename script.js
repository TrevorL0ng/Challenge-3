// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declaring main values we want from the user
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var symbols = '!@#$%^&*()-_+=?';
// Begin user input
var userInput;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSymbols;


// Write password to the #password input
function writePassword() {
  window.alert("Let's generate a password! I have a few questions for you...");
  userInput = parseInt(prompt("How many characters would you like this password to be? Please choose a number netween 8 and 128"));

  var password = generatePassword();
 
 
  var generatePassword = function (){

    

  }
   var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
