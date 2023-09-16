let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
num = String(num);
console.log(num.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num2 = 123.45;
num2 = String(num2);
num2 = num2 = num2.slice(0, 3) + num2.slice(4);
console.log(num2.length);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

let num3 = 111.2355;
num3 = String(num3);
let hasDecimal = false;
let i = 0;

console.log(num3.length);

if (num3.indexOf(".") > 0) {
    i = num3.indexOf(".");
    num3 = num3.slice(0, i) + num3.slice(i + 1);
    console.log(`length of ${num3} if true = ` + num3.length);
} else {
    console.log(`length of ${num3} if false = ` + num3.length);
}

console.log("value of i = " + i);

// Want to take a variable num3. Then check if that variable contains a decimal. If it does, remove the decimal. Then return the string length. 
// if the variambe num3 does not coinain decimal, then return string length. 