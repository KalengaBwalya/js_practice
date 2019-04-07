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
//const months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun');
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
//months.push('Jul');
//// Add item to an array at the beginning
//months.unshift('New Month');
//// Add an item in the middle of an array
//months.splice(3, null, 'A new Month');
//// Remove Element from the end of array
//months.pop();
//// Remove element from the beginning of an array
//months.shift();
//// Remove element from the middle of an array
//months.splice(3, 1);
// Reverse
//months.reverse();
//// Concatenate two arrays
////const array1 = [1, 2, 3],
////      array2 = [4, 5, 6];
//console.log(array1.concat(array2));
// Order an array(sort)
//let fruits = ['Banana', 'Apple', 'Lime', 'Grape'];
//console.log(fruits.sort());
// Order numbers from lower to greater
//let numbers = [1, 23, 3, 4, 56, 7, 3, 100, 29, 35];
//numbers.sort(function (number1, number2) {
//    return number1 - number2;
//});
//// Order numbers from greater to lower
//numbers.sort(function (number1, number2) {
//    return number2 - number1;
//});
//console.log(numbers);

//**********************************************************
// JavaScript Objects

//const Person = {
//    firstname: 'Kalenga',
//    lastname: 'Bwalya',
//    email: 'kalengabwalya@gmail.com',
//    age: 25,
//    favoriteMusic: ['Afrobeat', 'HipHop', 'R&B', 'Gospel'],
//    living: {
//        city: 'Lusaka',
//        country: 'Zambia',
//        continent: 'Africa'
//    },
//    getAge: function(){
//        return this.age;
//    },
//    bornYear: function(){
//        return new Date().getFullYear() - this.age;
//    }
//};
//
//console.log(Person.age);
//console.log(Person.favoriteMusic);
//console.log(Person.living); 
//console.log(Person.getAge());
//console.log(Person.bornYear());

// Array of objects
//let cars = [
//    {
//        model: 'Mustang',
//        engine: '6.0'
//    },
//    {
//        model: 'Mercedeze',
//        engine: '5.0'
//    },
//    {
//        model: 'Ferrari',
//        engine: '7.1'
//    },
//    {
//        model: 'Lambouhginni',
//        engine: '8.6'
//    }
//];
//
//console.log(cars);
//for (let i = 0; i < cars.length; i++) {
//    console.log(cars[i].model);
//}

// const in Arrays & Objects

//const newArray = [1, 2, 3, 4];
//newArray[0] = 'New element in array';
//newArray.push('New element');
////newArray = [1, 4, 7]; // Error
//console.log(newArray);
//
//const Car = {
//    model: 'Mustang',
//    engine: '6.0'
//};
//Car.engine = '6.4';
//
//// ErroR!
////Car = {
////     model: 'Mustang',
////    engine: '6.0'
////};
//console.log(Car);

//**********************************************************
// JavaScript FUNCTIONS
// function declaration

// function HelloVisitor(firstname = 'Visitor', lastname = 'Bwalya') {
//     console.log(`Hello ${firstname} ${lastname}, welcome`);
// }

// //function has to be called
// HelloVisitor('Kalenga');

// function addition(x, y){
//     return x + y;
// }
// let result;
// result = addition(10, 15);
// result2 = addition(10, 1);

// console.log(`${result}, ${result2}`);

//function expression
// const sum = function(numb1 = 0, numb2 = 0){
//     return numb1 + numb2;
// };

// console.log(sum(3, 4));
// console.log(sum(7, 4));
// console.log(sum(1, 4));
// console.log(sum());

// functions that are invoked immediately(IIFES)
// Immediately  invoked function expressions
// (function () {
//     console.log('This is an IIFE');
// })();
// // IIFES with arguments
// (function (technology) {
//     console.log('Learning ' + technology);
// })('JavaScript');

// Property Methods
// const musicPlayer = {
//     play: function (id) {
//         console.log(`Play song number ${id}`);
//     },
//     pause: function () {
//         console.log('Pause...');
//     }
// };

// musicPlayer.play(12);
// musicPlayer.play(5);
// musicPlayer.pause();

// // Methods can be outside the object
// musicPlayer.remove = function (id) {
//     console.log(`Song number ${id} removed form the playlist`);
// };
// musicPlayer.remove(12);

// // Common JS functions
// console.log();
// alert();
// prompt();
// confirm();

//**********************************************************
// Dates in JavaScript

// const today = new Date();
// let output;
// // // Month Day Year
// // let birthday = new Date('March 15 1994');
// // // M-D-Y
// // birthday = new Date('3-15-1994');

// // output = birthday;

// //Methods in dates
// output = today.getMonth();
// output = today.getDate();
// output = today.getDay();
// output = today.getFullYear();
// output = today.getMinutes();
// output = today.getHours();
// today.setFullYear(2000);
// output = today.getFullYear();
// today.setMonth(10);
// output = today.getMonth();

// console.log(today);

//**********************************************************
// Control Statements in JavaScript

// if Operator
// const learningJavaScript = false;

// if (learningJavaScript) {
//     console.log('JS is awesome');
// } else {
//     console.log('Yanks, JS is fantastic');
// }

// Equal
// const score = 100;
// if(score == '100'){
//     console.log('Yes, it is equal');
// } else {
//     console.log('No, it is different');
// }

// // Not Equal
// if(score != 100){
//     console.log('Yes, it is different');
// } else {
//     console.log('No, it is equal');
// }

// // Strict comparison operator (Recommended)
// if(score === '100'){
//     console.log('Damn right');
// } else {
//     console.log('They\'re different');
// }

// Check if variable has value
// let score;
// // if(score) or:
// if(typeof score != 'undefined'){
//     console.log(`Yes, and the score is ${score}`);
// } else {
//     console.log('No score...');
// }
// let cash = 500;
// let cartTotal = 300;
// let balance = cash - cartTotal;
// if(cash > cartTotal){
//     console.log(`Transaction Successful, your balance is $${balance}`);
// } else {
//     console.log('Insufficient funds...')
// }

// ELSE if operator

// let hours = new Date().getHours(),
//     minutes = new Date().getMinutes();

// if(hours < 12){
//     console.log(`Good Morning, the time is ${hours}:${minutes}`);
// } else if(hours >= 12 && hours < 18){
//     console.log(`Good Afternoon, the time is ${hours}:${minutes}`);
// } else {
//     console.log('Good Night!');
// }

// OR operator
// let cash = 100,
//     credit = 300,
//     cartTotal = 200,
//     available = cash + credit;

// if(cash >= cartTotal || cartTotal <= credit){
//     console.log('You can pay with cash or credit');
// } else if (available >= cartTotal) {
//     console.log('You can pay with both cash and credit');
// } else {
//     console.log('Insufficient funds');
// }

// Ternary Operator
// const loggedIn = true;
// console.log(loggedIn === true ? 'The user is logged in' : 'User not logged in');

// Switch
// const paymentMethod = 'cash';
// switch (paymentMethod) {
//     case 'cash':
//         console.log(`Your Payment method is ${paymentMethod}`);
//         break;

//     case 'check':
//         console.log(`Your Payment method is ${paymentMethod}, we we verify soon`);
//         break;

//     case 'card':
//         console.log(`Your Payment method is ${paymentMethod}, processing`);
//         break;

//     default:
//         console.log('Please select a valid payment method');
//         break;
// }

// // Assign a variable from a switch case

// const cars = ['Mustang', 'Pajero', 'Ranger'];
// const selected = 2;
// let car;

// switch (selected) {
//     case 0:
//         car = cars[0]
//         break;

//     case 1:
//         car = cars[1]
//         break;

//     case 2:
//         car = cars[2]
//         break;

//     default:
//         console.log('Please select a car');
//         break;
// }
// console.log(`We have a ${car}`);
// For Loops

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// Read a value in the for loop
// for (let i = 0; i <= 10; i++) {
//     if (i === 2) {
//         console.log('Yes, 2!!');
//         continue;
//     }
//     console.log(`Number: ${i}`);
// }

// Breaking the for loop
// for (let i = 0; i <= 10; i++) {
//     if (i === 2) {
//         console.log('Yes, 2!!');
//         break;
//     }
//     console.log(`Number: ${i}`);
// }

// even numbers
// for(let i = 0; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
// }

// for loop and arrays

// const shoppingCart = ['Product 1', 'Product 2', 'Product 3'];
// for(let i = 0; i < shoppingCart.length; i++){
//     console.log(shoppingCart[i]);
// }

// While Loops

// let i = 0;

// while(i < 10){
//     i++;
//     console.log(`Number: ${i}`);
// }

// Looping an array with while

// const buses = ['Euro-Africa', 'Wada Chovu', 'Jonda', 'Andrich', 'Power Tools'];
// let i = 0;
// while (i < buses.length) {
//     bus = buses[i];
//     console.log(bus);
//     i++;
// }

// Do While Loops (Note: the Do while runs at least once before checking the condition)
// let j = 10;

// do {
//     console.log(`Number: ${j}, Unconditional!!`);
//     j++;
// } while(j < 10);

// foreach
// const todo = ['Homework', 'Meditation', 'Coding', 'Music Production'];
// todo.forEach(function(assignment, index){
//     console.log(`${index}: ${assignment}`);
// });

// Map
// const shoppingCart = [
//     {id: 1, name: 'Book'},
//     {id: 2, name: 'Phone'},
//     {id: 3, name: 'Headphones'}
// ];
// const productName = shoppingCart.map(function(productName){
//     return productName.name;
// });
// console.log(productName);

// Iterators in ES6
// let myCar = {
//     name: 'Camaro',
//     engine: '4.8 Turbo',
//     model: 'L23R',
//     colour: 'Black',
//     make: 'Chevy'
// };

// for(let key in myCar){
//     console.log(`${key}: ${myCar[key]}`);
// }

// Try Catch
try {
    someThing();
} catch (error) {
    console.log(error);
} finally {
    console.log('Execute always no matter what!');
}


function getClients() {
    console.log('Downloading');

    setTimeout(function () {
        console.log('Complete...');
    }, 3000);
}

getClients();
