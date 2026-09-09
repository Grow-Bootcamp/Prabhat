// ES6+ features

// let and const
// arrow function
// Tamplate literals ($) and ('')
// destructuring 

// const user = {
//     name: "Prabhat",
//     age: 20
// };

// const {name, age} = user;

// console.log(name);


// function greet(name, callback) {
//     console.log(`Hello ${name}`);
//     callback();
// }

// function goodbye() {
//     console.log("Goodbye!");
// }

// greet("Prabhat", goodbye);

// function doSomething(callback) {
//     console.log("Doing Something");
//     callback();
// }
// function finish() {
//     console.log("Finished");
// }
// doSomething(finish);

// const myPromise = new Promise((resolve, reject) => {

//     let success = true;

//     if (success) {
//         resolve("Task completed!");
//     } else {
//         reject("Task failed!");
//     }

// });

// async function greet() {
//     return "Hello Prabhat";
// }
// console.log(greet());

// console.log("Programming sikhne k liye");
// console.log("Learned coding ko subscribe kare");


// const student = {
//     name: "Prabhat",
//     age: 20,
//     course: "MERN",

//     study() {
//         return "student is studying"; 
//     }
    
    
// };

// console.log(student.name);

// console.log(student.study());


// class Student {
    
//     constructor(name, age) {
//         this.name= name;
//         this.age = age;
//     }

//     study() {
//         console.log(this.name + " is studying");
//     }
// }
// const student1 = new Student("Ram", 20);
// const student2 = new Student("Sita", 21);
// const student3 = new Student("Hari", 19);

// student1.study();
// student2.study();
// student3.study();

// const user = {
//     name: "Prabhat",

//     greet() {
//         console.log("Hello!");
//     }
// };

// class Student {

//  constructor(name,age) {
//     this.name = name;
//     this.age = age;
//  }
// }
// const student1 = new Student("Prabhat",20);
// console.log(student1);

// class Student {

//     constructor(name, age, course) {
//         this.name = name;
//         this.age = age;
//         this.course = course;
//     }

//     introduce() {
//         console.log(this.name + " is studying " + this.course);
//     }

//     study() {
//         console.log(
//             `My name is ${this.name} and I am ${this.age} years old.`
//         );
//     }
// }

// const student1 = new Student("Prabhat", 20, "MERN");

// student1.introduce();
// student1.study();


// lets type this code without any external help

// class Student {

//     constructor (name, age, course){
//      this.name = name;
//     this.age = age;
//     this.course = course;

//     }

//     study () {
//         console.log(`${this.name} is studying ${this.course}`);
        
//     }

//     introduce() {
//         console.log(`Hello I am ${this.name} and I am ${this.age} years old`);
        
//     }
   
// }

// const student1 = new Student("Prabhat", 20, "MERN");

// student1.study();
// student1.introduce();

// class BankAccount {

//     #balance = 0;

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }
// const account = new BankAccount();

// account.deposit(500);
// console.log(account.getBalance());

// class BankAccount {

//     #balance;

//     constructor(name, balance) {
//         this.name = name;
//         this.#balance = balance;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//             console.log(`Deposited: Rs. ${amount}`);
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this.#balance) {
//             this.#balance -= amount;
//             console.log(`Withdrawn: Rs. ${amount}`);
//         } else {
//             console.log("Insufficient balance or invalid amount");
//         }
//     }

//     getBalance() {
//         return this.#balance;
//     }
// }
// const account = new BankAccount("Ram", 50000);

// account.deposit(10000);

// account.withdraw(5000);

// console.log(account.getBalance()); 

// class Animal {

//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(this.name + " is eating");
//     }
// }

// class Dog extends Animal {

//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }

// }

// class Person {
//     study() {
//         console.log("Person is studying");
//     }
// }

// class Student extends Person {
//     study() {
//         super.study(); // calls parent's study()
//         console.log("Student is studying JavaScript");
//     }
// }

// class Calculator {
//     add(int a, int b)
//     add(int a, int b, int c)
// }

// class Animal {
//     sound() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     sound() {
//         console.log("Dog barks");
//     }
// }

// class Cat extends Animal {
//     sound() {
//         console.log("Cat meows");
//     }
// }

// const dog = new Dog();
// const cat = new Cat();

// dog.sound(); // Dog barks
// cat.sound(); // Cat meows

// class Car {
//     start() {
//         this.checkEngine();
//         this.injectFuel();
//         this.startEngine();

//         console.log("Car started");
//     }

//     checkEngine() {
//         console.log("Checking engine...");
//     }

//     injectFuel() {
//         console.log("Injecting fuel...");
//     }

//     startEngine() {
//         console.log("Engine started");
//     }
// }

// const car = new Car();

// car.checkEngine();

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

// console.log(student.name); // Ram

// student.name = "Sita";

// console.log(student.name); // Sita

