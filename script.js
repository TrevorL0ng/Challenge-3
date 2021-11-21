// Assignment Code
var generateBtn = document.querySelector("#generate");
// Declaring main values we want from the user
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '1234567890';
var symbols = '!@#$%^&*()-_+=?';
// Begin user input variables
var pwLength;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmSymbols;
// Variable to store user input choices
var userInput;


// Write password to the #password input
function writePassword() {
  window.alert("Let's generate a password! I have a few questions for you...");

  // First user input. Requesting desired password length.

  pwLength = parseInt(prompt("How many characters would you like this password to be? Please choose a number netween 8 and 128"));

    if (!pwLength){
      window.alert("Please enter a value.");
      
    }

    else if (pwLength < 8 || pwLength > 128){
      window.alert("Please try again with a valid number");
    }

    // Now requesting the specifics of what characters the user would like to be included.

    else {
      window.alert ("Great! Now let's decide what you want to be in your password!");
// -----------------------------------------------------------------------------------------------
      confirmLowerCase = window.confirm("Would you like to use lower case letters?");
// -----------------------------------------------------------------------------------------------
      confirmUpperCase = window.confirm("How about some upper case letters?");
// -----------------------------------------------------------------------------------------------
      confirmNumbers = window.confirm("Want to throw some numbers in there?");
// -----------------------------------------------------------------------------------------------
      confirmSymbols = window.confirm("And finally, do you want to use some symbols?");
    }

    // Main argument to take user input and convert to the information we want

    // If all choices are picked.
    if (confirmLowerCase && confirmUpperCase && confirmNumbers && confirmSymbols) {
      userInput = lowerCase.concat(upperCase, numbers, symbols);
    }

    // If all choices are denied
    else if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSymbols) {
      window.alert("Please try again with at least one criteria selected.");
    }
    
    // Combinations of three chosen password criteria
    else if (confirmLowerCase && confirmUpperCase && confirmNumbers) {
      userInput = lowerCase.concat(upperCase, numbers);
    }

    else if (confirmLowerCase && confirmUpperCase && confirmSymbols) {
      userInput = lowerCase.concat(upperCase, symbols);
    }

    else if (confirmLowerCase && confirmNumbers && confirmSymbols) {
      userInput = lowerCase.concat(numbers, symbols);
    }
    console.log(userInput);




    // var password = writePassword();

  }
  //  var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
