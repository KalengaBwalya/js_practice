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

const number1 = 30,
      number2 = 20,
      number3 = -3;

let result;

// Addition
result = number1 + number2;

// Subtraction
result = number2 - number3;

// Multiplication
result = number1 * number3;

// Division
result = number1 / number3;

// Modulo
result = number1 % number2; 

// Pi
result = Math.pi;

// round
result = Math.round(2.5);

// round up or down: ceil & floor
result = Math.ceil(2.2);
result = Math.floor(2.6);

//square root
result = Math.sqrt(121);

// absolute number
result = Math.abs(number3);

// power
result = Math.pow(2, 3);

// Get min number from list
result = Math.min(1, 2, 0);

// Get max number from list
result = Math.max(1, 2, 0);







console.log(result);

