import {tickets, longestConsec} from './codewars'

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

//I wrote tests beforehand for this.
describe('Longestconsec', () => {
    it('returns "" if strarr.length = 0', () =>{
       const result = longestConsec([],1);
       expect(result).toBe('');
    })
    it('returns "" if k > strarr.length',() => {
        const result = longestConsec(['one'],2);
        expect(result).toBe('');
    })
    it('returns " if k <= 0',() =>{
        const result = longestConsec(['one', 'two'], 0);
        expect(result).toBe("");
        const result1 = longestConsec(['one', 'two'], -1);
        expect(result1).toBe("");
    })
    it('returns abcdefg', () => {
        const array = ['ab','cdefg','h','ijklm','n','opq','rstu']
        const result = longestConsec(array,2);
        expect(result).toBe('abcdefg')
    })
    it('returns cdefg', () => {
        const array = ['ab','cdefg','h','ijklm','n','opq','rstu']
        const result = longestConsec(array,1);
        expect(result).toBe('cdefg')
    })
    it('returns ijklmnopq', () => {
        const array = ['ab','cdefg','h','ijklm','n','opq','rstu']
        const result = longestConsec(array,3);
        expect(result).toBe('ijklmnopq')
    })
    it('returns a', () => {
        const array = ['a'],1
        const result = longestConsec(array,3);
        expect(result).toBe('a')
    })


})