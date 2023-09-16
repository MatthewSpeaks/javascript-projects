// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus	= "ready";
let averageAstronautMassKg= 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg	= crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius	= -225;
let minimumFuelTemp	= -300;
let maximumFuelTemp	= -150;
let fuelLevel = "100%%";
let weatherStatus = "clear";
let preparedForLiftOff = false;
let countCheck = false;
let statusCheck = false;
let massCheck = false;
let fuelTempCheck = false;
let fuelLevelCheck = false;
let weatherCheck = false;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    countCheck = true;
} else {
    console.log("Too many astronauts aboard!");
    countCheck = false;
}

// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    statusCheck = true;
} else {
    console.log("Astronauts not ready!");
    statusCheck = false;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= 850000) {
    massCheck = true;
} else {
    console.log("Too much weight!");
    massCheck = false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius <= maximumFuelTemp && fuelTempCelsius >= minimumFuelTemp) {
    fuelTempCheck = true;
} else {
    console.log("Something is wrong with our fueld temp!");
    fuelTempCheck = false;
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%%") {
    fuelLevelCheck = true;
} else {
    console.log("Not enough fuel!");
    fuelLevelCheck = false;
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    weatherCheck = true;
} else {
    console.log("Oh no, bad weather!");
    weatherCheck = false;
}
// Verify shuttle launch can proceed based on above conditions
preparedForLiftOff = countCheck && statusCheck && massCheck && fuelTempCheck && fuelLevelCheck && weatherCheck;

if (preparedForLiftOff) {
 console.log(`All systems are a go! Initializing the shuttle launch sequence.\n` + `date = ${date}\n` + `time = ${time}\n` + `astronautCount = ${astronautCount}\n` + `crewMassKg = ${crewMassKg}\n` + `fuelMassKg = ${fuelMassKg}` + `shuttleMassKg = ${shuttleMassKg}\n` + `totalMassKg = ${totalMassKg}\n` + `fuelTempCelcius = ${fuelTempCelsius}\n` + `weatherStatus = ${weatherStatus}\n` + `Have a safe flight!`);
} else {
 console.log("Conditions for launch not met. Launch scrubbed!");
}

