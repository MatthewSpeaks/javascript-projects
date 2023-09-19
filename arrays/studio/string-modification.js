const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//Use a template literal to print the original and modified string in a descriptive phrase.
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

userInput = Number(input.question("How many characters to slice? "));

if (userInput >= str.length) {
    userInput = 3;
} 

let str2 = str.slice(0, userInput);
let str3 = str.slice(userInput);
let str4 = str3.concat(str2);

console.log(`The string ${str} can be sliced at index ${userInput}, resulting in the string, ${str4}.`);

