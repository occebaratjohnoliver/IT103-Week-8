
/*
 * IT103 Week 8 - Functions II
 * Author: John Oliver Ebarat
 * Purpose: Demonstrate function expressions and arrow functions.
 */

// MATHEMATICAL FUNCTION - Arrow Function
// Purpose: Computes the average of three numbers.
// Parameters: a, b, c
// Returns: Average as a number or an error message.

const computeAverage = (a, b, c) => {
    if (
        typeof a !== 'number' ||
        typeof b !== 'number' ||
        typeof c !== 'number'
    ) {
        return 'Numbers only';
    }

    return Number(((a + b + c) / 3).toFixed(2));
};

// STRING FUNCTION - Arrow Function
// Purpose: Formats a person's name.
// Parameters: first, last
// Returns: Formatted full name.

const formatName = (first, last) =>
    `${last.toUpperCase()}, ${first}`;

// DATA-PROCESSING FUNCTION - Arrow Function
// Purpose: Counts passing scores.
// Parameters: scores, passingMark (default = 75)
// Returns: Number of passing students.

const countPassing = (scores, passingMark = 75) => {
    let count = 0;

    for (const score of scores) {
        if (score >= passingMark) {
            count++;
        }
    }

    return count;
};

// TEST VALUES
console.log(computeAverage(88, 92, 79));
console.log(formatName('John Oliver ', 'Ebarat'));
console.log(countPassing([88, 62, 95, 74, 81]));
