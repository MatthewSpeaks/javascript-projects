let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 3,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};

let superChimpTwo = {
   name: "brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 6,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};

let doggo = {
   name: "leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 9,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};

let gross = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 10,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};

let takenID = [1, 3, 6, 9, 10];

function checkIfTaken (newID) {
   for (i = 0; i < takenID.length; i++) {
      if (takenID[i] === newID) {
         return true;
      }
   }
   return false;
}
function getAstronautID (animal) {
   let newID = Math.round(Math.random()) * 10;
     while (true === checkIfTaken(newID)) {
      newID = Math.round(Math.random()) * 10;
     }
     takenID.push(newID);
     return animal['astronautID'] = newID;
};

function printObject (object) {
   for (item in object) {
      console.log(item + ": " + object[item]);
}
return;
};

let crew = [superChimpOne, superChimpTwo, doggo, salamander, gross];

function crewReports (crewMember) {
   console.log(`${crewMember.name} is a ${crewMember.species}. They are ${crewMember.age} years old and ${crewMember.mass} kilograms. Their ID is ${crewMember.astronautID}.`);
   return;
};

function printCrewReport (crew) {
 for (let i = 0; i < crew.length; i++) {
   crewReports(crew[i]);
 }
 return;
};

function fitnessTest (crewMember1) {
   let turns = 0;
   let steps = 0;
   while (steps < 20) {
      steps += crewMember1.move();
      turns++;
   }
   return turns;
};

function crewTest (crew) {
   for (let i = 0; i < crew.length; i++) {
      turns = fitnessTest(crew[i]);
      console.log (`${crew[i].name} took ${turns} turns to take 20 steps.`);
   }
   return;
};


function runProgram () {
   console.log(`We've got quite the crew assembled for this mission. They are getting ready for their fitness test today, but first let me introduce the crew... \n`)
   printCrewReport(crew);
   console.log('\n');
   crewTest(crew);
};

runProgram(); 



// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!