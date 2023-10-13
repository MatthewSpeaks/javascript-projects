const whoWon = require('../RPS.js');

// test if rock beats scissors
// test if rock loses to paper
// test if scissors beats paper
// test if scissors loses to rock
// test if paper beats rock
// test if paper loses to scissors
// test if same parameter results in tie

describe('Testing whoWon function', function() {
    test("testing for the same parameter results in a tie", () => {
        let output = whoWon.whoWon('rock','rock');
        let output1 = whoWon.whoWon('scissors', 'scissors');
        let output2 = whoWon.whoWon('paper', 'paper');
        expect(output).toBe("TIE!");
        expect(output1).toBe("TIE!");
        expect(output2).toBe("TIE!");
     });
   
     test("test if rock beats scissors", () => {
        let output = whoWon.whoWon('rock','scissors');
        expect(output).toBe("Player 1 wins!");
     });

     test("test if rock loses to paper", () => {
        let output = whoWon.whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });

     test("test if scissors beats paper", () => {
        let output = whoWon.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });

     test("test if scissors loses to rock", () => {
        let output = whoWon.whoWon('scissors','rock');
        expect(output).toBe("Player 2 wins!");
     });

     test("test if paper beats rock", () => {
        let output = whoWon.whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });

     test("test if paper loses to scissors", () => {
        let output = whoWon.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });

});

