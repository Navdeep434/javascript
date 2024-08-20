// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol(123);
const anotherId = Symbol('123');

console.log(id == anotherId);

const bigNumber = 345678987654567898765676n;



// Reference(Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "nagraj", "doga"];
let myObj = {
    name: "Navdeep",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof myFunction);





// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Preimitive)

let myYoutubename = "grootGaming";

let anothername = myYoutubename;
anothername = "Infection";

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@einsicht-technologies.com",
    upi: "9534765781@ybl"
}

let userTwo = userOne;

userTwo.email = "navdeep-raushan@einsicht-technologies.com";
console.log(userOne.email);
console.log(userTwo.email);

