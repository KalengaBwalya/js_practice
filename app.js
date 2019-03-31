//**********************************************************
//variables in JavaScript, i.e: var, let and const



//var - variable can be redeclared
//var learning ='JavaScript';
//var learning = 'Kalenga';
//console.log(learning);

//let - variable can only be overidden, not redeclared
//let learning = 'JavaScript';
//console.log(learning);
//learning = 'JAVA';
//console.log(learning);

//const - variable has to have an initial value that cannot be changed later by th program #A CONSTANT

//const db_name = 'users';
////db_name = 'names';
//console.log(db_name);




//**********************************************************
// datatypes - the value of the variable determines the data type



//let variable = 'Kay';
//variable = 20;
//variable = false;
//variable = undefined;
//variable = Symbol('My new symbol');
//
////number
//variable = 1;
//variable = 10.20;
//variable = -300;
//
////string
//variable = '20';
//
////null - type is 'object' in JavaScript
//let bankSavings = null;
//
////Undefined
//let person;
//
////symbols
//let symbolES6 = Symbol('A symbol');
//
////arrays - type is 'object' in JavaScript
//let languages = ['HTML5', 'PHP', 'JAVA', 'C'];
//
////objects
//let kalenga = {
//    name: 'Bwalya',
//    country: 'Zambia'
//};
//
////date
//let today = new Date();
//
//console.log(today);
//console.log(typeof today);



//**********************************************************
// string methods in JavaScript



//const learning = 'Learning JavaScript is Great!';
//const email = "kalengabwalya@gmail.com";
//let output;

// length
//output = learning.length;

// concat
//output = learning.concat(" ", "and fun!");

// uppercase
//output = learning.toUpperCase();

// lowercase
//output = learning.toLowerCase();

// indexOf
//output = learning.indexOf('JavaScript');
//output = email.indexOf('@');
//
//// check if @ exists in email
//if(output > 0){
//    console.log('email is right');
//} else {
//    console.log('email is wrong');
//}

// substring
//output = learning.substring(0,13);

//substring from the end
//output = learning.substring(learning.length - 6);

//slice
//output = learning.slice(13, 20);
//output = learning.slice(-6);

// split
//output = learning.split(' ');
//
////example
//const hobbies = "read, walk, jog, learn to program, write, make music, listen to music";
//
//output = hobbies.split(', ');

// replace
//output = learning.replace('JavaScript', 'PHP');

// includes
//output = learning.includes('is');
//
//example - validate @ sign in email.
//if(email.includes('@')) {
//    console.log('email is valid');
//} else {
//    console.log('email is inavlid');
//}

// repeat
//let greet = "Hello! ";
//output = greet.repeat(3);

//console.log(output);



//**********************************************************
// Numbers and the methods available for numbers in JavaScript

//const number1 = 30,
//    number2 = 20,
//    number3 = -3;
//
//let result;

//// Addition
//result = number1 + number2;
//
//// Subtraction
//result = number2 - number3;
//
//// Multiplication
//result = number1 * number3;
//
//// Division
//result = number1 / number3;
//
//// Modulo
//result = number1 % number2; 
//
//// Pi
//result = Math.pi;
//
//// round
//result = Math.round(2.5);
//
//// round up or down: ceil & floor
//result = Math.ceil(2.2);
//result = Math.floor(2.6);
//
////square root
//result = Math.sqrt(121);
//
//// absolute number
//result = Math.abs(number3);
//
//// power
//result = Math.pow(2, 3);
//
//// Get min number from list
//result = Math.min(1, 2, 0);
//
//// Get max number from list
//result = Math.max(1, 2, 0);

// BODMAS
//result = 20 + 30 * 2;
//result = (20 + 30) * 2;

// 20% discount from an item
//price = prompt('Enter price');
//
//discount_price = price * 20 / 100;
//result = price - discount_price;
//alert('20% Discount: The discount is K' + discount_price + ' and the new price is: K' + result);

//console.log(result);

// 20% discount from shopping cart
//const cartItems = (120+300+130+110);
//const discount = cartItems / 100 * 20;
//const totalPay = cartItems - discount;
//
//// print the results
//console.log('Total: '+cartItems);
//console.log('Discount: '+discount);
//console.log('Pay: '+totalPay);

//**********************************************************
// Comparison operators in JavaScript
//console.log(1 > 2);
//console.log(1 < 2);

// comparing characters
//console.log('a' > 'b');
//console.log('a' < 'b');
//console.log('z' > 'B');

// Equality Operator
//console.log(2 == '2');

// Strict Comparison Operator(checks also the typeOf)
//console.log(2 === '2');

// Not equals
//console.log(2 != 3);
//console.log('hello' != ' hello');

// Compare Null & Undefined
//console.log(null == undefined);
//console.log(null === undefined);

//**********************************************************
// Converting strings to numbers
//
//const number1 = '3',
//      number2 = 4,
//      number3 = 'Nine';

//console.log(number1 + number2);

// Convert number1 into a number

//console.log(parseInt(number1) + number2);
//console.log(Number(number1) + number2);

//console.log(number3);
//console.log(Number(number3)); //NaN #Not a Number

// This will work. JS convert the strnug into a number
//console.log(number1 - number2);


// Other Methods and Values

//let number = '20';
//
//number = Number(number);
//number = Number('20.0012');
//number = Number(true); // 1
//number = Number(false); // 0
//number = parseInt(true); // NaN
//number = Number(null); // 0
//number = Number('Hello'); // NaN
//number = Number([1, 2, 3]); // NaN

// Parse Int and Parse float
//number = parseInt('100');
//number = parseFloat('100.201');

// To Fixed
//number1 = '98765325',
//    number2 = 98765325.7987079;
//
//console.log(number2.toFixed(2));
//console.log(typeof number);


//**********************************************************
// Converting numbers to strings

//let number = 90210,
//    output;
//
//output = String(number);

// Boolean to String

//let output = String(true);

// Date to String

//output = new Date();
//output = String(output);

// Array to string
//output = String([1, 2, 3, 4]);
//
//// toString #works on objects
//
//output = true.toString();
//output = [1, 3, 5].toString();
//output = {
//    name: 'Kalenga',
//    age: 24
//}.toString();
//
//console.log(output);
//console.log(typeof output);

//**********************************************************
// Temlpate Literals or  Template Strings

//const product1 = 'pizza',
//    price1 = 30,
//    product2 = 'Humburger',
//    price2 = 40;
//
//// Old Method
//let html;
////html = '<ul>' +
////    '<li>Item: ' + product1 + '</li>' +
////    '<li>Price: ' + price1 + '</li>' +
////    '<li>Item: ' + product2 + '</li>' +
////    '<li>Price: ' + price2 + '</li>' +
////    '<li>Total: ' + (price1 + price2) + '</li>' +
////    '</ul>';
//
//// New Method (Temlpate Literals or  Template Strings)
//html = `
//    <ul> 
//        <li>Item: ${product1}</li>
//        <li>Price: ${price1}</li>
//        <li>Item: ${product2}</li>
//        <li>Price: ${price2}</li>
//        <li>Total: ${total(price1, price2)}</li>
//    </ul>
//`;
//
//function total(price1, price2) {
//    return price1 + price2;
//}
//let app = document.querySelector('#app');
//app.innerHTML = html;

//**********************************************************
// Creating an Array

//const numbers = [1, 2, 33, 4, 15, 6, 7, 25];
//console.log(numbers);

// Array of months
const months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun');
//console.log(months);

// Mixed Array
//const mixedArray = ["Hello", 2, true, 'Kalenga', null];
//console.log(mixedArray);
// Length of Array
//console.log(mixedArray.length);
// Check if is array
//console.log(Array.isArray(mixedArray));
// Change Value of an Array
//months[1] = 'January';
//console.log(months[1]);
// Find Something in Array
//console.log(months.indexOf('Apr'));
// Add item to an array (at the end)
months.push('Jul');
// Add item to an array at the beginning
months.unshift('New Month');
// Add an item in the middle of an array
months.splice(3, null, 'A new Month');
console.log(months);


