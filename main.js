/**
 * Study Case 1
 * Generates an inverted half pyramid pattern
 * If the row is even, replace each number with "+"
 * @param {number} n - The height(column) of the pyramid
 */
function studyCase1(n) {
    let output = "";
    // Column
    for (let i = n; i >= 1; i--) {
        // Row
        for (let j = 1; j <= i; j++) {
            // Replace numbers with "+" if the row index is even
            output += (i % 2 === 0) ? "+" : j;
        }
        // Add a line break after each row
        output += "\n";
    }
    return output;
}

/**
 * Study Case 2
 * Generates a half pyramid pattern
 * If the number is even, replace it with "+"
 * @param {number} n - The height(column) of the pyramid
 */
function studyCase2(n) {
    let output = "";
    // Column
    for (let i = 1; i <= n; i++) {
        // Row
        for (let j = 1; j <= i; j++) {
            // Replace even numbers with "+"
            output += (j % 2 === 0) ? "+" : j;
        }
        // Add a line break after each row
        output += "\n";
    }
    return output;
}

console.log(studyCase1(5));
console.log(studyCase2(5));

// Export modules for Jest testing
if (typeof module !== 'undefined' && module.exports) {
    /**
     * Exports the functions `studyCase1` and `studyCase2` for use in testing environments.
     * This block checks if the code is running in a Node.js environment.
     * If so, it assigns the functions to `module.exports` to make them accessible for external testing.
     * 
     * In a browser environment, `module` is usually undefined, so this block will not execute, preventing any console errors in the console browser.
     */
    module.exports = { studyCase1, studyCase2 };
}
