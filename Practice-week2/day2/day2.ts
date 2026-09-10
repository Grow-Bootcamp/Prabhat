// // Primitive types
// let name: string = "Alice";
// let age: number = 30;
// let isActive: boolean = true;
// let nothing: null = null;
// let notDefined: undefined = undefined;

// console.log(isActive);
// console.log(name);

// // Arrays
// let numbers: number[] = [1, 2, 3];
// let names: Array<string> = ["Alice", "Bob"]; // generic form and also //let names: string[] = ["Alice", "Bob"];

// // Tuple (fixed-length array with known types)
// let person: [string, number] = ["Alice", 30];

// // Any (escape hatch — avoid when possible)
// let anything: any = "hello";
// anything = 42;

// // Unknown (safer alternative to any)
// let value: unknown = "hello";
// // You must narrow the type before using it
// if (typeof value === "string") {
//   console.log(value.toUpperCase());
// }

// // Void (for functions that return nothing)
// function log(message: string): void {
//   console.log(message);
// }

// // Never (functions that never return — e.g., throw or infinite loop)
// function fail(message: string): never {
//   throw new Error(message);
// }

// // Object
// let obj: object = { name: "Alice" };

// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// function displayUser(user: User): void {
//     console.log(user.name);
//     console.log(user.email);
// }

// const user: User = {
//     id: 1,
//     name: "Prabhat",
//     email: "prabhat@example.com"
// };

// displayUser(user);

// let anything: any = "hello";
// anything = 42;

// let value: unknown = "hello";

// if (typeof value === "string") {
//     console.log(value.toUpperCase());
// }

// Void (for functions that return nothing)
// function log(message: string): void {
//   console.log(message);
// }

// interface User {
//   id: number;
//   name: string;
//   email?: string;              // optional property
//   readonly createdAt: Date;    // cannot be changed after creation
//   greet(): string;             // method
// }

// const user: User = {
//   id: 1,
//   name: "Alice",
//   createdAt: new Date(),
//   greet() {
//     return `Hello, ${this.name}`;
//   }
// };

// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {
//   breed: string;
// }

// const dog: Dog = { name: "Rex", breed: "Labrador" };

// //MultipleInheritance
// interface Flyable {
//   fly(): void;
// }

// interface Swimmable {
//   swim(): void;
// }

// interface Duck extends Flyable, Swimmable {
//   quack(): void;
// }

