// // let and const

// let name = "Prabhat";
// const age = 20;


// // Arrow Function

// const greet = () => {
//     console.log("Hello Prabhat");
// };


// // Template Literals

// console.log(`My name is ${name} and I am ${age} years old.`);


// // Destructuring

// const user = {
//     name: "Prabhat",
//     age: 20
// };

// const { name: userName, age: userAge } = user;

// console.log(userName);
// console.log(userAge);


// // Object Method Shorthand

// const student = {
//     name: "Prabhat",
//     age: 20,

//     study() {
//         return "Student is studying";
//     }
// };

// console.log(student.study());

// // Callback Function

// function greet(name, callback) {
//     console.log(`Hello ${name}`);
//     callback();
// }

// function goodbye() {
//     console.log("Goodbye!");
// }

// greet("Prabhat", goodbye);


// // Another Callback Example

// function doSomething(callback) {
//     console.log("Doing Something");
//     callback();
// }

// function finish() {
//     console.log("Finished");
// }

// doSomething(finish);

// // Promise

// const myPromise = new Promise((resolve, reject) => {

//     let success = true;

//     if (success) {
//         resolve("Task completed!");
//     } else {
//         reject("Task failed!");
//     }

// });

// // Async Function

// async function greet() {
//     return "Hello Prabhat";
// }

// console.log(greet());

// // Built-in Object

// console.log("Programming sikhne k liye");
// console.log("Learned coding ko subscribe kare");

// Math
// Date
// Array
// String
// Object
// JSON
// Set
// Map

// DOM

// DOM
//  ↓
// Selecting elements
//     getElementById()
//     querySelector()
//     querySelectorAll()

// Changing elements
//     textContent
//     innerHTML
//     value

// Changing CSS
//     element.style

// Creating elements
//     createElement()

// Adding elements
//     appendChild()

// Events
//     addEventListener()

// Removing elements
//     remove()



// // select an element
// // DOM: Selecting an element

// const title = document.getElementById("title");

// console.log(title);

// //Change text

// // DOM: Changing text

// const title = document.getElementById("title");

// title.textContent = "Hello Prabhat!";

// // Changing CSS

// // DOM: Changing CSS

// const title = document.getElementById("title");

// title.style.color = "red";
// title.style.fontSize = "40px";


// // DOM: Changing HTML

// const box = document.getElementById("box");

// box.innerHTML = "<h2>Hello Prabhat</h2>";

// // DOM: querySelector

// const title = document.querySelector("#title");

// title.textContent = "New Title";

// document.querySelector("#title");   // id
// document.querySelector(".box");     // class
// document.querySelector("h1");       // element

// // DOM: Event Handling

// const button = document.getElementById("btn");

// button.addEventListener("click", function () {
//     console.log("Button clicked!");
// });

// // DOM: Creating an element

// const paragraph = document.createElement("p");

// paragraph.textContent = "I am a new paragraph";

// document.body.appendChild(paragraph);

// JS modules

// // math.js

// export function add(a, b) {
//     return a + b;
// }

// export const PI = 3.14159;
// // app.js

// import { add, PI } from "./math.js";

// console.log(add(10, 20));
// console.log(PI);


// REST
// → Architecture/style for designing APIs

// Resource
// → Thing represented by the API
//    /users
//    /products

// GET
// → Read

// POST
// → Create

// PUT
// → Replace

// PATCH
// → Partial update

// DELETE
// → Delete

// URL conventions
// → Use nouns
// → Prefer plural resources
// → Use lowercase
// → Use IDs for specific resources
// → Use query parameters for filtering/searching/sorting

// Examples
// GET    /products
// GET    /products/10
// POST   /products
// PATCH  /products/10
// DELETE /products/10

// Status codes
// 200 → OK
// 201 → Created
// 204 → No Content
// 400 → Bad Request
// 401 → Unauthorized
// 403 → Forbidden
// 404 → Not Found
// 500 → Server Error