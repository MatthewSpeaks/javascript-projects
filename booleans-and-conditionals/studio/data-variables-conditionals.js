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
let preparedForLiftOff = true;



// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
// add logic below to verify all astronauts are ready
// add logic below to verify the total mass does not exceed the maximum limit of 850000
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
// add logic below to verify the fuel level is at 100%
// add logic below to verify the weather status is clear

if (!(astronautCount >= 7)) {
    console.log("Too many astronauts aboard!");
    preparedForLiftOff = false;
} else if (!(astronautStatus === "ready")) {
    console.log("Astronauts not ready!");
    preparedForLiftOff = false;
} else if (!(totalMassKg <= 850000)) {
    console.log("Too much weight!");
    preparedForLiftOff = false;
} else if (!(maximumFuelTemp >= fuelTempCelsius >= minimumFuelTemp)) {
    console.log("Something is wrong with our fueld temp!");
    preparedForLiftOff = false;
} else if (!(fuelLevel === "100%%")) {
    console.log("Not enough fuel!");
    preparedForLiftOff = false;
} else if (!(weatherStatus === "clear")) {
    console.log("Oh no, bad weather!");
    preparedForLiftOff = false;
} else {
    preparedForLiftOff = true;
}


// Verify shuttle launch can proceed based on above conditions


if (preparedForLiftOff) {
 console.log(`All systems are a go! Initializing the shuttle launch sequence.\n` + `date = ${date}\n` + `time = ${time}\n` + `astronautCount = ${astronautCount}\n` + `crewMassKg = ${crewMassKg}\n` + `fuelMassKg = ${fuelMassKg}` + `shuttleMassKg = ${shuttleMassKg}\n` + `totalMassKg = ${totalMassKg}\n` + `fuelTempCelcius = ${fuelTempCelsius}\n` + `weatherStatus = ${weatherStatus}\n` + `Have a safe flight!`);
} else {
 console.log("Conditions for launch not met. Launch scrubbed!");
}

