// console then log which is the command then '' which is the string and strings are characters listed
console.log('hello world');

// let = variable   name = identifier that can't start with a number   '' = string that is identified
let firstName = 'Dawn';
let lastName = 'Frazier';

// Let allows for variation
let interestRate = 0.3;
interestRate = 1;

// const is a constant variable
const money = 2;

console.log(interestRate);
console.log(money);

let name = 'Dawn'; // String literal
let age = 22; // Number literal
let isApproved = false; // Boolean literal
let middleName = undefined; // Undefined variable
let selectedColor = null; // Clears the value of a variable 

let potato = {
    name: 'Potato',
    stalk: false
}; // {} is an Object literal and the object (person) has properties 
console.log(potato);

//Dot notation
potato.name = 'potatoes';
console.log(potato.name);

//Bracket Notation
potato['name'] = 'Potato';

// Selections
let selection = 'name';
potato[selection] = 'Potato';

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);

//Function is greet object and the perameter is name and the command is console.log and its string
function greet(name) {
    console.log('Hello world! ' + 'My name is ' + firstName);
}

greet();

//Function with numbers
function square(number) {
   return number * number;
}

//Inside the () is considered an argument within the function call
let number = square(2);
console.log(number);
console.log(square(2));