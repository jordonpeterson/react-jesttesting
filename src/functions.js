/*A variety of basic functions that I will write unit tests for in functions.test.js. All of the below functions
* were provided by a ProgrammingWithMosh tutorial.*/
import {getCustomerSync} from './db'
import {send} from './mail'


export const absolute = function(number) {
    if (number > 0) return number;
    if (number < 0) return -number;
    return 0;
}


export const greet = function(name) {
    return 'Welcome ' + name;
}
export const getCurrencies = function() {
    return ['USD', 'AUD', 'EUR'];
}

export const getProduct = function(productId) {
    return { id: productId, price: 10 };
}
export const registerUser = (username) => {                         //I converted this to an arrow function to test hypothesis that it functions equally.
    if (!username) throw new Error('Username is required.');

    return { id: new Date().getTime(), username: username }
}
export const applyDiscount = function(order) {
    let customer = getCustomerSync(order.customerId);

    if (customer.points > 10)
        order.totalPrice *= 0.9;
}


export const notifyCustomer = function(order) {
    const customer = db.getCustomerSync(order.customerId);

    mail.send(customer.email, 'Your order was placed successfully.');
}

