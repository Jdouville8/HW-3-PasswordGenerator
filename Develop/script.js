// Assignment Code
var generateBtn = document.querySelector("#generate");

var validator1;
var validator2;
var validator3;
var validator4;
var charNum;
var lowerCase;
var upperCase;
var numeric;
var specialChar;


// Write password to the #password input
function writePassword() {
  alert("Create a password!");

  //tell user to choose a character length
  charNum = window.prompt("Choose a number of characters from 8 - 128");
  //confirm input
  while (charNum < 8 || charNum > 128) {
  alert("Please give valid input");
  charNum = window.prompt("Choose a number of characters from 8 - 128");
  }

  //Asks if user would like to use a variety of characters through a series of confirms (Both variable and validator stored as boolean)
function charChoice() {
  var lowerCaseVal = function () {
      lowerCase = confirm("Would you like to use lowercase characters?");
      validator1 = confirm("are you sure?");
      }
      lowerCaseVal();
      while (validator1 === false) {
      lowerCaseVal();
      }

  var upperCaseVal = function () {
      upperCase = confirm("Would you like to use Uppercase characters?");
      validator2 = confirm("are you sure?");
      }
      upperCaseVal();
      while (validator2 === false) {
        upperCaseVal();
      }
  
  var numericVal = function () {
      numeric = confirm("Would you like to use numeric characters?");
      validator3 = confirm("are you sure?");
      }  
      numericVal();
      while (validator3 === false) {
        numericVal();
      }
        
  var specialVal = function () {
      specialChar = confirm("Would you like to use special characters?");
      validator4 = confirm("are you sure?");
      }      
      specialVal();
      while (validator4 === false) {
      specialVal();
      }
  }

  charChoice();

  //Validation that at least one character type was chosen
  if (lowerCase === true || upperCase === true || numeric === true || specialChar === true) {
    alert("Let's get you your password!");
  } else {
    alert("Sorry, you have to choose at least one character type. Let's try this again");
    charChoice();
  }

  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
