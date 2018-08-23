import React from 'react';
import {fizzBuzz} from "./fizzbuzz";

describe('fizzbuzz', () => {
    it('should throw an error if something other than a number is input', () => {//Throwing an error is correct. Why is it failing?
        expect(() => fizzBuzz('').toThrow())
        expect(() => fizzBuzz({}).toThrow())
        expect(() => fizzBuzz(null).toThrow())
        expect(() => fizzBuzz(undefined).toThrow())
        expect(() => fizzBuzz(NaN).toThrow())
        expect(() => fizzBuzz(false).toThrow())
        // //I'm not sure why the below three lines don't work to test it
        // const args = ['string', false, undefined,NaN, null, {}]
        // const result = fizzBuzz(args);
        // // args.forEach(a =>{
        // //     expect(() =>{fizzBuzz(a)}).toThrow();
        // // })
    })
    it('should return FizzBuzz if input is divisible by both 3 and 5', () =>{
        const result = fizzBuzz(15);
        expect(result).toContain('FizzBuzz')
    })
    it('should return Fizz if number is divisible by 3 but not divisible by 5', () => {
        const result = fizzBuzz(3);
        expect(result).toContain('Fizz')
    })
    it('should return Buzz if input is divisible by 5 but not divisible by 3', () => {
        const result = fizzBuzz(5);
        expect(result).toContain('Buzz')
    })
    it('should return the input itself if the input is not divisible by 3 or 5', () => {
        const result = fizzBuzz(1);
        expect(result).toEqual(1);
    })
})
