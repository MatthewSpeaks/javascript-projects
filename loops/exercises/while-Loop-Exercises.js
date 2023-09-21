//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelLevel = 0;
let astronautCount = 0;
let altitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */





//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

// Exercise #4 a.
const input = require('readline-sync');

while ((30000 < fuelLevel) || (fuelLevel <= 5000)) {
  fuelLevel = input.question("Please enter fuel level, between 5,000(minimum tank level) and 30,000(full tank) units: "); 
  fuelLevel = Number(fuelLevel) || 0;
} 

// Exercise #4 b.
while ((astronautCount > 7) || (astronautCount <= 0)) {
  astronautCount = input.question("How many astronauts for the mission? "); 
  astronautCount = Number(astronautCount) || 0;
} 

console.log("Launching Shuttle!");

// Exercise #4 c.
while (fuelLevel >= 100) {
  fuelLevel = fuelLevel - (100 * astronautCount);
  altitude = altitude + 50;
  console.log(`Altitude is: ${altitude}`);
  if (altitude >= 2000) {
    console.log("Orbit achieved!");
    break;
  } 
} 

if (altitude < 2000) {
  console.log("Failed to reach orbit.");

}



  