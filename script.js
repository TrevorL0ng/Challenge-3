// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
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

          confirmLowerCase = window.confirm("Would you like to use lower case letters?");

          confirmUpperCase = window.confirm("How about some upper case letters?");

          confirmNumbers = window.confirm("Want to throw some numbers in there?");

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

    else if (confirmUpperCase && confirmNumbers && confirmSymbols) {
      userInput = upperCase.concat(numbers, symbols);
    }

    // Combinations of two chosen password criteria 

      else if (confirmLowerCase && confirmUpperCase) {
        userInput = lowerCase.concat(upperCase);
      }

      else if (confirmLowerCase && confirmNumbers) {
        userInput = lowerCase.concat(numbers);
      }

      else if (confirmLowerCase && confirmSymbols) {
        userInput = lowerCase.concat(symbols);
      }

      else if (confirmUpperCase && confirmNumbers) {
        userInput = upperCase.concat(numbers);
      }

      else if (confirmUpperCase && confirmSymbols) {
        userInput = upperCase.concat(symbols);
      }

      else if (confirmNumbers && confirmSymbols) {
        userInput = numbers.concat(symbols);
      }

    // Only one chosen input 

        else if (confirmLowerCase) {
          userInput = lowerCase;
        }

        else if (confirmUpperCase) {
          userInput = upperCase;
        }

        else if (confirmNumbers) {
          userInput = numbers;
        }

        else if (confirmSymbols) {
          userInput = symbols;
        }
      
    // Now for the random generation 

    // Variable named final will be used to hold the collective string as it is generated 

    var final = [];

    // For loop will be used to generate each character of the generation. 
    // The push function will be used to store each item to the end of the string as it is generated
     
    for (var x = 0; x < pwLength; x++) {
      var finalUserInput = userInput[Math.floor(Math.random() * userInput.length)];
      final.push(finalUserInput);
    }

    // Using the join function to convert the array to a string.

    var password = final.join("");

    // And there you have it.

   var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}