// Import the functions to be tested from the 'main.js' file
const { studyCase1, studyCase2 } = require('./main');

describe('Study Case 1', () => {
    test('Testing study case 1 for n = 5', () => {
        /**
         * Test case for the function `studyCase1` with an input of `n = 5`.
         * This test ensures that the function generates the correct output pattern.
         * Expected output is:
         * 12345
         * ++++
         * 123
         * ++
         * 1
         */
        const result = studyCase1(5);
        const expectedOutput = '12345\n++++\n123\n++\n1\n';
        expect(result).toBe(expectedOutput);
    });
});

describe('Study Case 2', () => {
    test('Testing study case 2 for n = 5', () => {
        /**
         * Test case for the function `studyCase2` with an input of `n = 5`.
         * This test ensures that the function generates the correct output pattern.
         * Expected output is:
         * 1
         * 1+
         * 1+3
         * 1+3+
         * 1+3+5
         */
        const result = studyCase2(5);
        const expectedOutput = '1\n1+\n1+3\n1+3+\n1+3+5\n';
        expect(result).toBe(expectedOutput);
    });
});

/**
 * To run the tests, execute the command "npm test" in terminal.
 */
