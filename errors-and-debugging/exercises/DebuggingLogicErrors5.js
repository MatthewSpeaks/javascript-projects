// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.
let fuelCheck = false;
let cabinCheck = false;
let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelCheck = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelCheck = false;
}

console.log("Fuel check = ", fuelCheck);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   cabinCheck = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   cabinCheck = false;
}

console.log("Cabin check = ", cabinCheck);

if (fuelCheck && cabinCheck) {
   for (i = 10; i > 0; i--) {
      console.log("%s...", i);
   }
   console.log("Lift Off!");
   launchReady = true;
} else {
   console.log("Launch scrubbed.")
   launchReady = false;
}
console.log("Launch Ready = ", launchReady);