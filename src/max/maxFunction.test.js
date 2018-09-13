import {max} from './maxFunction'


//Max is a function that takes any amount of numbers and returns the largest. I want to make it so that it can accept any
//combination of integers, arrays of ints, numbers in string form etc and still return the largest number. I will write
//tests before creating the function so that I will know when it passes.
describe('max', () => {
    it('returns the largest of a few ints', () =>{
        const result = max(1,3,4,5,6,7,8,9,10)
        expect(result).toEqual(10)
    })
    it('can accept ints as strings', () =>{
        const result = max('1','2','3');
        expect(result).toEqual(3)

    })
    it('can accept an array of ints and return the largest number', () => {
        const array = [1,2,3,4,5,6,7]
        const result =max(array)
        expect(result).toEqual(7)
    })
    it('can accept an array of string ints and return the largest number', () => {
        const array = ['1','2','3','4','5','6','7']
        const result =max(array)
        expect(result).toEqual(7)
    })
    it('can accept an array of ints and string ints.', () => {
        const array = [1,2,'3','4',5,5,6,7,'8']
        const result =max(array)
        expect(result).toEqual(8)
    })
    it('can accept multiple arrays as arguments', ()=>{
        const result = max([1,2,3,4,'5','6'],[5,6,7,8],[100]);
        expect(result).toEqual(100)
    })
    it('can accept an empty array', ()=>{
        const result = max(1,[])
        expect(result).toEqual(1)
    })
    it('can accept an empty array with ints and string ints', ()=>{
        const result = max(1,'2',[])
        expect(result).toEqual(2)
    })
    it('can accept a combination of arrays, ints and string ints', ()=>{
        const result = max(1,2,3,'4','5',[6,7,8,9],[100],[300,2,3,5,'67'])
        expect(result).toEqual(300)
    })
    it('can handle  low and high numbers', () => {
        const result = max(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
        expect(result).toEqual(Number.MAX_SAFE_INTEGER)
    })
    it('It removes non integer inputs ', () => {
        const array = [999, {}, 'notanumber', '1000']


        const result = max(array);
        expect(result).toEqual(1000)

    })

//That was actually pretty easy. Now I want to make it so that it will unpackage arrays nested within other arrays so that
//I could accept [[1,2,3,[1,2,3,[1,2,3,400],7],8],[9,2,4],[123]] as an argument and return 400.

    it('can accept nested arrays as arguments', ()=>{
        const array = [1,2,3,[123,400],60]
        const result = max(array)
        expect(result).toEqual(400)
    })
    it('can accept deeply nested arrays as arguments', ()=>{
        const array = [1,2,3,[123,400,[500]],60]
        const result = max(array)
        expect(result).toEqual(500)
    })
    it('can accept deeply nested arrays as arguments', ()=>{
        const array = [1,2,3,[123,400,[500,[600,700,[800,[900]]]]],60]
        const result = max(array)
        expect(result).toEqual(900)
    })



})