// Primitive data types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const name = "Arif"
const value = 100 // number 
const x = 100.5 // Number
const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 345678303789098788n //BigInt


// Reference(Non Primitives)

// Array, Objects, Functions

const fruits = ["mango", "grapes", "apple"] //Array

let myObj = {
    name : "Arif",  // object
    age : 34
}

const myFunction = function(){
    console.log("Hello, World!");
}

// console.log(typeof x);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof userEmail);
// console.log(typeof anotherId);
// console.log(typeof bigNumber);
// console.log(typeof myObj);
// console.log(typeof myFunction);
// console.log(typeof fruits);


// ****************************************** Memory **********************************************************

// Stack (Primitive) , Heap (Non-Primitive)

// let country = "India"

// let anotherCountry = country
// anotherCountry = "USA"

// console.log(country);
// console.log(anotherCountry);

let userOne = {
    email: "user@email.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Arif@google.com"

console.log(userOne.email);
console.log(userTwo.email);