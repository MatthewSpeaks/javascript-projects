// Declare and assign the variables below
let shuttle = "Determination";
let shuttle_speed_mph = 17500;
let distance_to_mars_km = 225000000;
let distance_to_moon_km = 384400;
const miles_to_kilometers = .621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttle);
console.log(typeof shuttle_speed_mph);
console.log(typeof distance_to_mars_km);
console.log(typeof distance_to_moon_km);
console.log(typeof miles_to_kilometers);

// Calculate a space mission below

let miles_to_mars = distance_to_mars_km * miles_to_kilometers;
let time_to_mars = miles_to_mars / shuttle_speed_mph;
let days_to_mars = time_to_mars / 24;

// Print the results of the space mission calculations below
console.log(shuttle, "will take", days_to_mars, "days to reach Mars.");

// Calculate a trip to the moon below
let miles_to_moon = distance_to_moon_km * miles_to_kilometers;
let time_to_moon = miles_to_moon / shuttle_speed_mph;
let days_to_moon = time_to_moon / 24;

// Print the results of the trip to the moon below

console.log( shuttle, "will take", days_to_moon, "days to reach the Moon.");


