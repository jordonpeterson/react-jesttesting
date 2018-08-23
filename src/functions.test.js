import React from 'react';
import {absolute, greet, getCurrencies, getProduct, registerUser, applyDiscount, notifyCustomer} from './functions'
import db,{getCustomerSync} from "./db";
import {mail} from './mail'

/*In this file I will place tests for a variety of functions as outlined by programmingwithmosh. I am converting the functions
* from a Node.js environment to a React environment. */

describe('Describe absolute', () => {
    test('should return a positive number if input is positive. ',  () =>{
        const result = absolute(1);
        expect(result).toBe(1);

    });

    test('should return a positive number if input is negative. ',  () =>{
        const result = absolute(-1);
        expect(result).toBe(1);

    });

    test('should return 0 if input is 0. ',  () =>{
        const result = absolute(0);
        expect(result).toBe(0);

    });


})

describe('greet',() => {
    test('should return "Welcome " + name', ()=>
{
    const result = greet('John Doe');
    expect(result).toMatch(/John Doe/)      //Matches against a regular expression
    expect(result).toContain('John Doe');   //Checks that the string contains the right sequence of characters. Don't make string tests too specific. Sometimes we change stuff.
});
})

describe('Describe getCurrencies', () =>{
    it('should return a list of currencies', () => {
        const result = getCurrencies();
        expect(result).toContain('USD', 'EUR', "AUD");                  //I have two redundant tests for review purposes
        expect(result).toEqual(expect.arrayContaining(['AUD','EUR','USD']))     //Why is this better than the former way?

    })


})

describe('getProduct', () =>{
    const result = getProduct(10);
    expect(result).toMatchObject({id:10, price: 10})
    expect(result).toHaveProperty('id', 10)
})
describe('registerUser', () => {
    it('should throw if input username is falsy', () => {
        const args = [null, false, NaN, '', undefined, 0];
        const result = registerUser(args);
        args.forEach(a =>{
            expect(() =>{registerUser(a)}).toThrow(); //Some people would prefer a different test for each input.
        })
    })
    it('should add the the input username to the username property', () => {
        const result = registerUser('Hiring Manager');
        expect(result).toHaveProperty('username','Hiring Manager');
        expect(result).toMatchObject({username: "Hiring Manager"});//How toHaveProperty and toMatchObject differ?
        expect(result.id).toBeGreaterThan(0)//Smart way to make sure that they have a property.

    })


})

// describe('applyDiscount', () => {
//     it('applies a 10% discount if customer has more than 10 points.', (customerId) => {
//         db.getCustomerSync() = function(customerId) {
//             console.log('Fake reading MongoDB customer');
//             return { id: customerId, points: 11}
//         }
//         const order = {customerId:1, totalPrice:20}
//         applyDiscount(order);
//         expect(order.totalPrice).toBe(18);
//
//     })
// })

describe('registerUser',() => {
    it('should send an email to the customer when called', () => {
        db.getCustomerSync = function(customerId) {
            return {email: 'a'};
        }
        let mailSent = false;
        mail.send = function(email, message){
            mailSent = true;

        }
        expect(mailSent).toBe(true);
        notifyCustomer({customerId: 1})
    })
})