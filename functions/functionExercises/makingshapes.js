
function makeLine(size = 5, char = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}


function makeSquare(size = 5, char = '#') {
    let square = '';
    let length = size;
    let width = size;
    return square += makeRectangle(width, length, char);
}



function makeRectangle(width, length, char = '#') {
    let rectangle = '';
    for (let i = 0; i < length; i++) {
        rectangle += makeLine(width, char);
        if (i + 1 === length) {
            return rectangle;
        }
        rectangle += '\n';
    }
}


function makeDownwardStairs(height, char) {
    let stairs = '';
    for (let i = 0; i < (height); i++) {
        stairs += makeLine(i + 1, char);
        if (i + 1 === height) {
            return stairs;
        }
        stairs += '\n';
    }
    return stairs;
}



function makeSpaceLine(numSpaces, numChars, char) {
    let spaceLine = '';
        spaceLine += makeLine(numSpaces, ' ');
        spaceLine += makeLine(numChars, char);
        spaceLine += makeLine(numSpaces, ' ');
    return spaceLine;
}



function makeIsoscelesTriangle(height, char) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
            triangle += makeSpaceLine(height - i -1, 2*i + 1, char)
        if (i + 1 === height) {
            return triangle;
        }
        triangle += '\n';
    }
    return triangle;
}


function reverseString(str) {
    let reverseStr = '';
    for (i = str.length - 1; i >= 0; i--) {
        reverseStr += str.slice(i, i + 1);
    }
    return reverseStr;
}

function makeDiamond(size, char) {
    let halfDiamond = '';
    halfDiamond += makeIsoscelesTriangle(size, char);
    let diamond = halfDiamond + '\n' + reverseString(halfDiamond);
    return diamond;
}


console.log(makeDiamond(5, '#'));



