// Assignment Code Global Variable
var validator1;
var validator2;
var validator3;
var validator4;
var charNum;
var lowerCase;
var upperCase;
var numeric;
var specialChar;
var charLowerCase = 'abcdefghijklmnopqrstuvwxyz';
var charUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charNumeric = '1234567890';
var charSpecial = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
var charPossible = '';

// Write password to the #password input
function generatePassword() {
  //Have user enter number for character length 
  var charNum = parseInt(
    prompt("8 or 128 password length?")
    );

    var passStore = [];

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

    //If our user selected true on a given prompt, that character type will concatenate with our string of selectable characters
    if (lowerCase === true) {
        charPossible = charPossible + charLowerCase;
    }
    if (upperCase === true) {
        charPossible = charPossible + charUpperCase;
    }
    if (numeric === true) {
        charPossible = charPossible + charNumeric;
    }
    if (specialChar === true) {
        charPossible = charPossible + charSpecial;
    }

    //Increments through the string of possible characters for password and adds a random character to the generated password
    for (i = 0; i < charNum; i++) {
        var randomIndex = Math.floor(Math.random() * charPossible.length);
        var randomChar = charPossible[randomIndex];
        passStore = passStore + randomChar;
    }
    return passStore;
}
function writePassword() {
    var password = generatePassword();
    var passwordText = document.getElementById("password");
    passwordText.value = password;
}
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);