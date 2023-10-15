// Define your Book class here:
/*
Headquarters have asked that you store the following information about each book.

    The title
    The author
    The copyright date
    The ISBN
    The number of pages
    The number of times the book has been checked out.
    Whether the book has been discarded.

    First, for a manual, the book must be thrown out if it is over 5 years old. 
    Second, for a novel, the book should be thrown out if it has been checked out over 100 times.
*/

class Book {
    constructor(title, author, copyrightDate, ISBN, numberOfPages, numberCheckedOut, beenDiscarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numberOfPages = numberOfPages;
        this.numberCheckedOut = numberCheckedOut;
        this.beenDiscarded = beenDiscarded;
    }
    checkOut(checked = 1) {
        this.numberCheckedOut += checked;
    }
}

class Manual extends Book {
    constructor(title, author, copyrightDate, ISBN, numberOfPages, numberCheckedOut, beenDiscarded) {
        super(title, author, copyrightDate, ISBN, numberOfPages, numberCheckedOut, beenDiscarded);
    }
    
    checkAge(year) {
        if (year - this.copyrightDate > 5) {
            this.beenDiscarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, ISBN, numberOfPages, numberCheckedOut, beenDiscarded) {
        super(title, author, copyrightDate, ISBN, numberOfPages, numberCheckedOut, beenDiscarded);
    }

    checkCondition() {
        if (this.numberCheckedOut > 100) {
            this.beenDiscarded = 'Yes';
        }
    }
}


// Declare the objects for exercises 2 and 3 here:

let prideAndPredjudice = new Novel('Pride and Prejudice', 'Jane Austin', 1813, '1111111111111', 432, 32, 'No');
let shuttleInstructions = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:

function runProgram() {
    console.log(prideAndPredjudice);
    console.log(shuttleInstructions);
    prideAndPredjudice.checkOut(5);
    prideAndPredjudice.checkCondition();
    shuttleInstructions.checkAge(2023);
    console.log(prideAndPredjudice);
    console.log(shuttleInstructions);
    return;
};

runProgram();