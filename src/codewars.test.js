import {tickets, longestConsec, sumXSmallestNumbers} from './codewars'
import {registerUser} from "./functions";

describe('tickets', () => {
    it('returns "YES" when all customers can be given change)', () =>{
        const array= [25]
        const result = tickets(array)
        expect(result).toContain("YES");
    })
    it('returns "NO" a 50 if given without a 25 in the array', () => {
        const array= [50]
        const result = tickets(array)
        expect(result).toContain("NO");
    })
    it('returns "YES" when there is a 25 in the array and a 50 is given', () => {
        const array= [25, 50]
        const result = tickets(array)
        expect(result).toContain("YES");
    })
    it('returns "YES" when there is a 50 and 25 in the array and a 100 is given', () => {
        const array= [25,25, 50, 100]
        const result = tickets(array)
        expect(result).toContain("YES");
    })
    it('returns "YES" when there are 3 25\'s and no 50 in the array and a 100 is given', () => {
        const array= [25, 25, 25, 100]
        const result = tickets(array)
        expect(result).toContain("YES");
    })
    it('returns "NO" when there are neither 3 25\'s or a 50 in the array and a 100 is given', () => {
        const array= [25, 25, 100]
        const result = tickets(array)
        expect(result).toContain("NO");
    })
    it('should work equally well with an array of any length', () => {
        const array= [25, 25, 25, 25, 50, 100]
        const result = tickets(array)
        expect(result).toContain("YES");
    })
})

//I wrote most tests beforehand for this. I'm trying to practice my TDD. As I went through the function it became apparent
//that I should modify my tests in a few ways.
describe('longestConsec', () => {
    it('returns "" if strarr.length = 0', () => {
        const result = longestConsec([], 1);
        expect(result).toBe('');
    })
    it('returns "" if k > strarr.length', () => {
        const result = longestConsec(['one'], 2);
        expect(result).toBe('');
    })
    it('returns " if k <= 0', () => {
        const result = longestConsec(['one', 'two'], 0);
        expect(result).toBe("");
        const result1 = longestConsec(['one', 'two'], -1);
        expect(result1).toBe("");
    })
    it('returns rstuvwxt', () => {
        const array = ['ab', 'cdefg', 'h', 'ijklm', 'n', 'opq', 'rstu', 'vwxt']
        const result = longestConsec(array, 2);
        expect(result).toBe('rstuvwxt')
    })
    it('returns cdefg', () => {
        const array = ['ab', 'cdefg', 'h', 'ijklm', 'n', 'opq', 'rstu']
        const result = longestConsec(array, 1);
        expect(result).toBe('cdefg')
    })
    it('returns ijklmnopq', () => {
        const array = ['ab', 'cdefg', 'h', 'ijklm', 'n', 'opq', 'rstu', 'vwxy']
        const result = longestConsec(array, 3);
        expect(result).toBe('cdefghijklm')
    })
    it('returns a', () => {
        const array = ['a']
        const result = longestConsec(array, 1);
        expect(result).toBe('a')
    })
})

//This is a function that I have decided to up my requirements for. I want to make sure that I get the required inputs
//and allow the user to request how many numbers they want to sum. This makes the function more complicated but also more
//useful. It also lets me work on developing tests for specific errors that will be thrown for incorrect inputs.

    describe('sumXSmallestNumbers',() =>{

        //These are tests for the data validation portion of my function. They make sure that we throw errors if incorrect
        //inputs are given

        it('should throw an error if num is not an int', () =>{
            const array = [1,2,3]
            expect(() => sumXSmallestNumbers(array,'0')).toThrow(/Num needs to be an integer./);

        })
        it('should throw an error if num === 0', () =>{
            const array =[1,2,3]
            expect(() => sumXSmallestNumbers(array,0)).toThrow(/num needs to be greater than zero...otherwise this function is pretty useless./);
        })
        it('should throw an error if input is not an array', () => {
            const notArrayError ='The first input needs to be an array of numbers.';//Testing with a variable

            const args = [null, false, NaN, '', undefined, 0,'non-empty-string',1,true, {}];
            const result = sumXSmallestNumbers(args,2);
            args.forEach(a =>{
                expect(() =>{sumXSmallestNumbers(a,2)}).toThrow(notArrayError); //Some people would prefer a different test for each input.
            })
        })
        it('should throw an error if array.length=0', () =>{
            const array =[]
            expect(() => sumXSmallestNumbers(array,1)).toThrow(/This is an empty array. We need an array with numbers in it./);
        })//Testing with a RegExp Remember that expect wants a function
        it('should throw an error if array.length < num', () =>{
            const array =[1,2,3]
            expect(() => sumXSmallestNumbers(array,4)).toThrow(/The array has fewer numbers than you are asking for. Could you either pass us a bigger array or ask for fewer numbers?/);
        })

        //These tests make sure that our function works the way that it is supposed to.


        // it('returns the sum of the two lowest numbers in the array. 0 + 0 = 0', ()=>{
        //     const array = [0,1,2,3,4,0,]
        //     const result =sumXSmallestNumbers(array,2)
        //     expect(result).toBe(0)
        // })
        // it('returns the sum of the two lowest numbers in the array. 1 + 2 = 3', ()=>{
        //     const array = [5,12,7,1,2,3,4]
        //     const result =sumXSmallestNumbers(array)
        //     expect(result).toBe(3)
        // })
        // it('returns the sum of the two lowest numbers in the array. 10 + 20 = 30', ()=>{
        //     const array = [50,120,70,10,20,30,40]
        //     const result =sumXSmallestNumbers(array)
        //     expect(result).toBe(30)
        // })

    })

