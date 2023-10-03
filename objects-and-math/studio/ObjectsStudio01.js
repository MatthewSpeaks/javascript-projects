// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];


function selectRandomEntry(theIdNumbers) {
  return Math.floor(Math.random() * theIdNumbers.length);
};

let crewArray = [];

  while (crewArray.length < 3) {
    const selectedId = idNumbers[selectRandomEntry(idNumbers)];
    if (!crewArray.includes(selectedId)) {
      crewArray.push(selectedId);
    }
  }

console.log(crewArray);


// Code your buildCrewArray function here:
// function buildCrewArray (crewArray, animals) {
//   let slectedCrew = [];
//   // loop through the array of animals and check to see if the astronaut ID matches the a value in the crewArray
//   for (i = 0; i < animals.length; i++) {
//     if (animals[i].astronautID === crewArray[0]) {
//       slectedCrew.push(animals[i]);
//     } else if (animals[i].astronautID === crewArray[1]) {
//       slectedCrew.push(animals[i]);
//     } else if (animals[i].astronautID === crewArray[2]) {
//       slectedCrew.push(animals[i]);
//     }
//   }
//   return slectedCrew;
// };

function buildCrewArray (crewArray, animals) {
  let selectedCrew = [];
  for (i= 0; i < animals.length; i++) {
    for (j = 0; j < crewArray.length; j++) {
      if (animals[i].astronautID === crewArray[j]) {
        selectedCrew.push(animals[i]);
      }
    }
  }
  return selectedCrew;
}


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

console.log(buildCrewArray(crewArray, animals));

// Code your template literal and console.log statements:
