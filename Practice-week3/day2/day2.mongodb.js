const { contain } = require("supertest/lib/cookies")

use("Todo")

// db.Day2.insertOne({
//     "name": "Prabhat",
//     "age": 21,
//     "Contact": 44321496464,
// })

// db.Day2.insertMany([
//     {name: "Prabhat", age: 21, Location: "Dhangadhi"},
//     {name: "yabesh", age: 22, Location: "Kailali"}
// ])

// db.Day2.insertOne(
//     {
//   name: "Prabhat",
//   address: {
//     city: "Dhangadhi",
//     country: "Nepal"
//   }
// }
// )

// db.Day2.insertOne(
//   {
//     name: "Prabhat"
//   }
// )

// db.Day2.insertOne(
//   {
//     day1Id: ObjectId("6aaa6b72bb55bcf068192852"),
//     city: "Dhangadhi",
//     country: "Nepal"
//   }
// )

// db.Day2.findOne({
//     city: "Dhangadhi"
// })

// db.createCollection("students", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: ["name", "age", "email"],
//       properties: {
//         name: {
//           bsonType: "string",
//           description: "Name must be a string"
//         },
//         age: {
//           bsonType: "int",
//           minimum: 18,
//           description: "Age must be an integer and at least 18"
//         },
//         email: {
//           bsonType: "string",
//           description: "Email must be a string"
//         }
//       }
//     }
//   }
// })

// db.students.insertOne({
//   name: "Prabhat",
//   age: 20,
//   email: "prabhat@gmail.com"
// })

