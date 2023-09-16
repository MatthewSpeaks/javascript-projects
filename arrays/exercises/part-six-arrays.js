//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1, element2, element26);
console.log(table);


//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[0]);
console.log(table[0][0]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(
    `mass of element1 = ${table[0][3]}
    name for element2 = ${table[1][0]}
    symbol for element26 = ${table[2][1]}`
    )
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.


let nate = ["defensive back", "6'1", 180, "Junior"];
let matt = ["defensive end", "6'3", 205, "Junior"];
let ryan = ["strong safety", "5,10", 190, "junior"];
let teamStats = ["225 tackles", "9 sacks", "4 interceptions", "2 forced fumbles"];
let oneRepBench = ["nate benched 265", "matt benched 300", "ryan benched 300"];
let oneRepSquat = ["nate squatted 400", "matt squatted 400", "ryan squatted 375"];
let liftingWeights = [oneRepBench, oneRepSquat];
let playerName = [nate, matt, ryan];
let footballTeam = [playerName, teamStats, liftingWeights];

console.log(footballTeam);
console.log(`Matt is a ${footballTeam[0][1][0]} and ${footballTeam[2][0][1]}.`);
