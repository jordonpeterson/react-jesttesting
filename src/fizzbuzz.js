import React from 'react';
/*This is a sample exercise the tests for it are contained in fizzbuzz.test.js*/
export const fizzBuzz = function(input) {
    if (typeof input !== 'number')
        throw new Error('Input should be a number.');

    if ((input % 3 === 0) && (input % 5) === 0)
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}