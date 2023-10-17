//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, massKg, scores) {
        this.name = name;
        this.massKg = massKg;
        this.scores = scores;
    }

    addScore (newScore) {
        return this.scores.push(newScore);
    }

    average() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
        }
        return (Math.round((total / this.scores.length)*10)/10);
    }

    status() {
        let average = this.average();
        let admission = "";
        if (average >= 90) {
            admission = "Accepted";
        }
        if (average >= 80 && average < 90) {
            admission = "Reserve";
        }
        if (average >= 70 && average < 80) {
            admission = "Probationary";
        }
        if (average < 70) {
            admission = "Rejected";
        }

        return admission;
    }
}

function statusReport(object) {
    let average = object.average();
    let admission = object.status();
    console.log(`${object.name} earned an average test score of ${average}% and has a status of ${admission}.`)
};


//a. Bubba Bear has a mass of 135 kg and test scores of 88, 85, and 90. b. 
//Merry Maltese has a mass of 1.5 kg and test scores of 93, 88, and 97. c. 
//Glad Gator has a mass of 225 kg and test scores of 75, 78, and 62.

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);


// console.log(bubbaBear);
// bubbaBear.addScore(83);
// console.log(bubbaBear);
// console.log(merryMaltese);
// console.log(gladGator);

// console.log(merryMaltese.average());
statusReport(bubbaBear);
statusReport(merryMaltese);
statusReport(gladGator);

console.log(gladGator.status());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

function projectGladGator(num, candidate = gladGator) {
    let counter = 0;
    while (!(candidate.status() === "Accepted")) {
        candidate.addScore(num);
        console.log(candidate.average());
        counter +=1;
    }
    return counter;
};


projectGladGator(100, gladGator);