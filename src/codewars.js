import React from 'react'


// In this file I want to write my own tests for functions that I write to solve problems on codewars. I want to develop
// the habit of writing suitable tests for every function I write. The tests for these functions are found in
//     codewars.test.js

export const tickets = (peopleInLine) => {
    let result = "YES";
    const billArray = [];
    peopleInLine.map(bill => {
        switch (bill) {
            case 25: {
                billArray.push(25);
                break;
            }
            case 50: {
                if (billArray.includes(25)) {
                    billArray.splice(billArray.indexOf(25), 1);
                    billArray.push(50);
                    break;
                } else {
                    result = "NO"
                    break;
                }
            }
            case 100: {
                if (billArray.includes(50) & billArray.includes(25)) {
                    billArray.splice(billArray.indexOf(50), 1);
                    billArray.splice(billArray.indexOf(25), 1);
                    billArray.push(100);
                    break;

                }
                else if ((billArray.filter(bill => bill == 25).length > 2)){
                    billArray.splice(billArray.indexOf(25), 1);
                    billArray.splice(billArray.indexOf(25), 1);
                    billArray.splice(billArray.indexOf(25), 1);
                    billArray.push(100);
                    break;

                }
                else {
                    result = "NO";
                    break;
                }
            }

        }
    })
    return (result);
}

//Assigned Codewars Kata
// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of
// k consecutive strings taken in the array.
//
//     #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

export const longestConsec = (strarr, k) =>{
    let result = '';
    let length =[];
    if (k>strarr.length || k<=0 || k > strarr.length){
        result = "";
    } else {
        let index = 0;
        strarr.map(string =>{
            let array = [];
            array.push(string)
            for(let i=1;i<k;i++){
                array.push(strarr[index+i])
                }
            length = array.join('')
            if(length.length > result.length){
                result = length;
            }
            index++;
        })
    }
return result;
}

export const sumXSmallestNumbers =(array, num)=>{
    //These are my tests to validate that I am receiving the correct types of input in this function

    //If you change the text thrown by Error, it will cause the unit tests in codewars.test to fail.
    if(!Number.isInteger(num)){
        throw new Error('Num needs to be an integer.')
    }
    if(num === 0){
        throw new Error('num needs to be greater than zero...otherwise this function is pretty useless.')

    }
    if(!Array.isArray(array)){
       const notArrayError ='The first input needs to be an array of numbers.';
        throw new Error(notArrayError)
    }
    if(array.length === 0){
       const lengthIsZeroError = 'This is an empty array. We need an array with numbers in it.';
       throw new Error(lengthIsZeroError)
    }
    if(array.length < num){
        throw new Error('The array has fewer numbers than you are asking for. Could you either pass us a bigger array or ask for fewer numbers?')
    }
    else{
//This function needs to accept an array and an integer, sort the array to find the smallest integers, add them together and return a sum.
        
    }

}

