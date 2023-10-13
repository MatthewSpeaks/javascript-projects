const check = require('../checkFive.js');

describe ('Testing Checkfive', function(){
    
    test("testing it returns a value less than 5", function(){
        expect(check(2)).toBe('2 is less than 5.');
    });

});