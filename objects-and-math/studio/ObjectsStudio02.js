// Code your orbitCircumference function here:

function orbitCircumference (radius = 5) {
return Math.round((2 * Math.PI * radius));
};


console.log(orbitCircumference(5));

// Code your missionDuration function here:

function missionDuration (numOfOrbits, orbitRadius = 2000, orbitSpeed = 28000) {
  //time = distance/speed
  let timeOfOneOrbit = (orbitCircumference(orbitRadius) / orbitSpeed);
  return Math.round((numOfOrbits * timeOfOneOrbit)*100)/100;
};

console.log(`The mission will travel ${orbitCircumference(2000)} km around the planet, and it will take ${missionDuration(5, 2000, 28000)} hours to complete.`);

let idNumbers = [291, 414, 503, 599, 796, 890];


// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(theIdNumbers) {
  return Math.floor(Math.random() * theIdNumbers.length);
};

function selectRandomArray(arr, numEntries) {
  let newArray = [];
  while (newArray.length < numEntries) {
    const selectedIndexes = arr[selectRandomEntry(arr)];
    if (!newArray.includes(selectedIndexes)) {
      newArray.push(selectedIndexes);
    }
  }
  return newArray;
};

let selectedID = selectRandomArray(idNumbers, 4);
console.log(selectedID);

// Code your oxygenExpended function here:

function oxygenExpended (object, missionOrbits = 3, orbitalRadius = 2000, orbitalSpeed = 28000) {
  missionTime = missionDuration(missionOrbits, orbitCircumference(orbitalRadius), orbitalSpeed);
  oxExpended = (Math.round(object.o2Used(missionTime)*1000)/1000);
  return `${object.name} will perform the spacewalk, which will last ${missionTime} hours and require ${oxExpended} kg of oxygen.`;
};


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 console.time(oxygenExpended(candidateA, 5,));
 console.log(oxygenExpended(candidateA, 5,));

 