# HW-3-PasswordGenerator

# Objective

Use starter code to create a password generator that creates a password based on length and character settings input by a user

# Approach

First, a series of variables were declared to store user input and the sequences of characters composing a character type (Lowercase, Uppercase, Numeric, Symbols) are assigned to variables as a string

- generatePassword(): This function is where a majority of the code lives for collecting information and subsequently generating the password for the user.

The function begins by collecting character length specified by user and stores that response as a number followed by a series of questions and confirmations storing boolean values regarding what characters they would like to include.

The character choices are then confirmed to be desired, otherwise the generatePassword() function is executed again

If a given character selection is evaluated as "true", the entirety of that character type string is added to the string of available characters to chose from in generating the password

The for loop at the bottom creates a random index number to chose from the string of possible characters using:

Math.floor(Math.random() \* charPossible.length);

And stores each character in the varible passStore which is then output as the function return value and printed to the HTML
