// // let name = "Prabhat"
// // console.log(name;


// // )

// let number = 10;

// number.toUpperCase();

// let name = "  prabhat  ";
// let result = name.trim().toUpperCase();console.log(result);// "PRABHAT"

// let text = "Hello, World!";
// let result = text.replace("World", "JavaScript");
// console.log(text); // "Hello, World!"
// console.log(result); // "Hello, JavaScript!"

// try {
//     console.log(username);
// } catch (error) {
//     console.log("Something went wrong!");
// }

// try {
//     console.log(username);
// } catch (error) {
//     console.log(error.message);
// }

// try {
//     console.log("Trying...");
// } catch (error) {
//     console.log("Error occurred");
// } finally {
//     console.log("Finished");
// }

// let password = "1234";

// if (password.length < 8) {
//     console.warn("Warning: Password is too short!");
// // }
// let password = "1234";

// if (password.length < 8) {
//     console.log("Warning: Password is too short!");
// }

console.log("Day 4 JavaScript Practice");

console.log("Normal message");
console.warn("This is a warning");
console.error("This is an error message");

try {
    let result = unknownVariable + 10;
    console.log(result);
} catch (error) {
    console.error("ReferenceError:", error.message);
}

try {
    let number = 100;
    number.toUpperCase();
} catch (error) {
    console.error("TypeError:", error.message);
}

try {
    let number = 10;
    number.toFixed(200);
} catch (error) {
    console.error("RangeError:", error.message);
}

try {
    throw new Error("Something went wrong");
} catch (error) {
    console.error("Custom Error:", error.message);
} finally {
    console.log("Error handling finished");
}

let numbers = new Set([10, 20, 20, 30, 30, 40]);

numbers.add(50);
numbers.delete(20);

console.log(numbers);
console.log(numbers.has(30));

let students = new Map();

students.set("name", "Prabhat");
students.set("age", 20);
students.set("course", "MERN");

console.log(students);
console.log(students.get("name"));
console.log(students.has("age"));

let fruits = ["Apple", "Banana", "Mango"];

let newFruits = [...fruits, "Orange", "Grapes"];

console.log(newFruits);

let user = {
    name: "Prabhat",
    age: 20
};

let newUser = {
    ...user,
    course: "MERN",
    city: "Dhangadhi"
};

console.log(newUser);

function add(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(add(10, 20, 30, 40));

let person = {
    name: "Prabhat",
    age: 20,

    greet: function() {
        console.log("Hello " + this.name);
    }
};

person.greet();

let originalUser = {
    name: "Prabhat"
};

let copiedUser = originalUser;

copiedUser.name = "Karki";

console.log(originalUser.name);
console.log(copiedUser.name);

function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log("Count:", count);
    };
}

let counter = createCounter();

counter();
counter();
counter();

document.cookie = "username=Prabhat";

console.log(document.cookie);

sessionStorage.setItem("username", "Prabhat");
sessionStorage.setItem("age", "20");

console.log(sessionStorage.getItem("username"));
console.log(sessionStorage.getItem("age"));

sessionStorage.removeItem("age");

console.log(sessionStorage.getItem("age"));