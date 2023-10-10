// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  /*
  Here is what they need the launchcode object to contain:

    A key called organization with a value of "nonprofit".
    A key called executiveDirector with a value of "Jeff".
    A key called percentageCoolEmployees with a value of 100.
    A key called programsOffered with a value of ["Web Development", "Data Analysis", "Liftoff"].
    And a method called launchOutput(). This method will return a string.
    */

    test("an object called launchcode that contains A key called organization with a value of 'nonprofit'.", () => {
      expect(launchcode.organization).toBe('nonprofit');
    });

    test("A key called executiveDirector with a value of 'Jeff' ", () => {
      expect(launchcode.executiveDirector).toBe('Jeff');
    });

    test("A key called percentageCoolEmployees with a value of 100", () => {
      expect(launchcode.percentageCoolEmployees).toBe(100);
    });

    test('A key called programsOffered with a value of an array containing "Web Development", "Data Analysis", "Liftoff"', () => {
      expect(launchcode.programsOffered.length).toBe(3);
      expect(launchcode.programsOffered[0]).toBe("Web Development");
      expect(launchcode.programsOffered[1]).toBe("Data Analysis");
      expect(launchcode.programsOffered[2]).toBe("Liftoff");
    });

    test("Testing method called launchOutput that returns a vlaue typeOf String", () => {
      expect(typeOf(launchOutput())).toEqual('String');
    });
  
});