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