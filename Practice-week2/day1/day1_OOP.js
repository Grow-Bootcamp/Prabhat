// // Object and Object Method
// const student = {
//     name: "Prabhat",
//     age: 20,

//     study() {
//         console.log("Student is studying");
//     }
// };

// // Class, Constructor, Object, Method
// class Student {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     study() {
//         console.log(`${this.name} is studying`);
//     }
// }

// const student1 = new Student("Ram", 20);

// // Encapsulation (Private Field)
// class BankAccount {

//     #balance = 0;

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }

// // Inheritance
// class Animal {

//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(`${this.name} is eating`);
//     }
// }

// class Dog extends Animal {

//     constructor(name, breed) {
//         super(name); // super()
//         this.breed = breed;
//     }
// }

// // Method Overriding
// class Person {

//     study() {
//         console.log("Person is studying");
//     }
// }

// class Student2 extends Person {

//     study() {
//         super.study(); // super.method()
//         console.log("Student is studying JavaScript");
//     }
// }

// // Polymorphism
// class Animal2 {

//     sound() {
//         console.log("Animal makes sound");
//     }
// }

// class Dog2 extends Animal2 {

//     sound() {
//         console.log("Dog barks");
//     }
// }

// class Cat extends Animal2 {

//     sound() {
//         console.log("Cat meows");
//     }
// }

// // Abstraction
// class Car {

//     start() {
//         this.checkEngine();
//         this.injectFuel();
//         this.startEngine();

//         console.log("Car started");
//     }

//     checkEngine() {
//         console.log("Checking engine");
//     }

//     injectFuel() {
//         console.log("Injecting fuel");
//     }

//     startEngine() {
//         console.log("Engine started");
//     }
// }

// // Getter and Setter
// class Student3 {

//     constructor(name) {
//         this._name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(newName) {
//         this._name = newName;
//     }
// }


// class Student {

//     constructor(name) {
//         this._name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(newName) {
//         this._name = newName;
//     }
// }

// const student = new Student("Ram");

// console.log(student.name);

// student.name = "Sita";

// console.log(student.name);

