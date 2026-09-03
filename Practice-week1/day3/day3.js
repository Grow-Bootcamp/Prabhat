
// let products = ["Laptop", "Mobile", "Tablet", "Smart Watch"];
// products.splice(2, 2 , "Smartphone"); // Removes the element at index 2 (Tablet) and adds "Smartphone"
// console.log(products);

// let products = ["Laptop", "Mobile", "Tablet", "Smart Watch"];
// let result = products.find(function(product) {
//     return product === prompt("Enter the product name to search:");
// });
// console.log(result);

// function greet(name) {
//     console.log("Hello " + name);
// }
// function greeet(name) {
//     console.log("Take mine " + name );
// }

// greet("Prabhat");
// greeet("Yabesh");

// console.log(name);

// var name = "Prabhat";

// const add = (a, b) => {
//     return a + b;
// };


// (function(name) {
//     console.log("Hello " + name);
// })("Prabhat");

// OBJECTS

// let student = {
//     name: "Prabhat",
//     age: 20,
//     course: "MERN",
//     isStudent: true
// };
// console.log(student.name);
// console.log(student.age);
// console.log(student.course);
// console.log(student.isStudent);

// let person = {
//     name: "Prabhat"
// };

// let details = {
//     age: 20
// };

// let result = Object.assign({}, person, details);

// console.log(result);

// let student = {
//     name: "Prabhat",
//     age: 20,
//     course: "MERN"
// };

// console.log(Object.keys(student));

// let fruits = ["Apple", "Banana", "Mango"];

// console.log("Length:", fruits.length);

// fruits.push("Orange");
// console.log("After push:", fruits);

// fruits.pop();
// console.log("After pop:", fruits);

// fruits.unshift("Grapes");
// console.log("After unshift:", fruits);

// fruits.shift();
// console.log("After shift:", fruits);

// fruits.forEach(function(fruit) {
//     console.log("Fruit:", fruit);
// });

// fruits.forEach(fruit => {
//     console.log("Arrow:", fruit);
// });

// let numbers = [1, 2, 3, 4, 5];

// let doubled = numbers.map(function(number) {
//     return number * 2;
// });

// console.log("Doubled:", doubled);

// let tripled = numbers.map(number => number * 3);

// console.log("Tripled:", tripled);

// let evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// });

// console.log("Even numbers:", evenNumbers);

// let greaterThanTwo = numbers.filter(number => number > 2);

// console.log("Greater than 2:", greaterThanTwo);

// let foundNumber = numbers.find(function(number) {
//     return number > 3;
// });

// console.log("Found:", foundNumber);

// let found = numbers.find(number => number > 2);

// console.log("Found:", found);

// let total = numbers.reduce(function(sum, number) {
//     return sum + number;
// }, 0);

// console.log("Total:", total);

// let total2 = numbers.reduce((sum, number) => sum + number, 0);

// console.log("Total 2:", total2);

// let animals = ["Dog", "Cat", "Cow", "Horse"];

// animals.splice(1, 1);

// console.log("After splice:", animals);

// animals.splice(1, 0, "Cat");

// console.log("After adding:", animals);

// let selectedAnimals = animals.slice(1, 3);

// console.log("Sliced:", selectedAnimals);

// console.log("Original:", animals);

// console.log(animals.includes("Cat"));

// console.log(animals.includes("Lion"));

// console.log(animals.indexOf("Cow"));

// console.log(animals.indexOf("Lion"));

// let names = ["Prabhat", "Ram", "Shyam"];

// let result = names.join(", ");

// console.log(result);