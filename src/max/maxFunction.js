import React from 'react'

//I'll use a rest parameter so that I can accept infinite inputs and put them into an array.
export const max = (...ints) => {
    //I'll make a new sanitized array for me to pass to the Math.max function. I will push sanitized elements into this array.
    const sanInts = []
    //I will make a recursive function that uses a for...of loop to iterate over the input array. If there is a nested item
    //in that array then the function will call itself and iterate over that array. eventually every int is pushed into
    //the sanInts array that is passed to the Math.max function.

    //Making recursive function
    const arrayCheck = (input) => {
        for(let index of input){
            //I want to parse everything to an int and ignore everything that cannot be turned into an int.
            if(Array.isArray(index)){arrayCheck(index)}
            else sanInts.push(index)
        }
    }

    //Calling the recursive function on ints
    arrayCheck(ints)


//I'll use the spread operator to sort the sanInts array into individual ints
    return Math.max(...sanInts)

}