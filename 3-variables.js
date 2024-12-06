console.log("======= VARIABLE =======");
// A variable is or are container(s) for storing values(data)
// Ways of decaring variable
// let and const keywords are used for declaring variable
// Ways of namming a variables in JS
// camelcasing
// pascalcasing
// iilustration

// let variableName = value;
// let VariableName = value;
let myName = "Kehinde";
let MyName = "Alimi";
// Things not allowed for naming varibles
// Variable name cannot start with numbers, special characters like @, #, $, -, !
// let 2myName = ""
// let %$@2myName = ""

// More Illustrations

let myAge = 22;
console.log(myAge);

myAge = 23;
console.log(myAge);

// const keyword

const PI = Math.PI;
console.log(PI);
// PI = 2.3455;
// console.log(PI); // TypeError: Assignment to constant variable.
// A variable declared with the let keyword can be re-assigned a new value whereas a variable declare with the const keyword cannot be re-assigned a value.

// Concatenation/string manipulation
// Concatenation is a process of joining more than one strings together.
// + operator or using new way
// `` backtick, $ dollar sign and curly braces {}

// iilustartion
let firstName = "Muizat";
let lastName = "Bakri";
let fullName = firstName + " " + lastName;
console.log("fullName ==>", fullName);

// New way in es6(es2015)

let myFirstName = "Kehinde";
let myMiddleName = "Ishola";
let myLastName = "Alimi";
const myFullName = `${myFirstName}, ${myMiddleName[0]} ${myLastName}`;
console.log("myFullName ==>", myFullName);
