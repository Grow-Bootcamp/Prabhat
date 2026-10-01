import express from "express";
import mongoose from "mongoose";

import { User } from "./models/user.js";

const app = express();

app.use(express.json());

// CREATE USER
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error creating user",
      error,
    });
  }
});

// GET ALL USERS
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error,
    });
  }
});

// AGGREGATION

// $match

// app.get("/users/aggregation", async (req, res) => {
//   try {
// const result = await User.aggregate([
//   {
//     $match: {
//       role: "student",
//     },
//   },
// ]);

// Group users by role and calculate average salary

// app.get("/users/aggregation", async (req, res) => {
//   try {
//     const result = await User.aggregate([
//       {
//         $group: {
//           _id: "$role",
//           totalUsers: {
//             $sum: 1,
//           },
//         },
//       },
//     ]);

//     res.json(result);
//   } catch (error) {
//     res.status(500).json({
//       message: "Aggregation error",
//       error,
//     });
//   }
// });


// Calculate avg salary of users based on their role

// app.get("/users/aggregation", async (req, res) => {
//   try {
//     const result = await User.aggregate([
//   {
//     $group: {
//       _id: "$role",

//       averageSalary: {
//         $avg: "$salary",
//       },
//     },
//   },
// ]);

//     res.json(result);
//   } catch (error) {
//     res.status(500).json({
//       message: "Aggregation error",
//       error,
//     });
//   }
// });

// Total salary of users based on their role

// app.get("/users/aggregation", async (req, res) => {
//   try {
//     const result = await User.aggregate([
//   {
//     $group: {
//       _id: "$role",

//       totalSalary: {
//         $sum: "$salary",
//       },
//     },
//   },
// ]);

//     res.json(result);
//   } catch (error) {
//     res.status(500).json({
//       message: "Aggregation error",
//       error,
//     });
//   }
// });

await mongoose.connect(
  "mongodb://127.0.0.1:27017/week4day2"
);

console.log("MongoDB connected");

app.listen(3000, () => {
  console.log("Server running on port 3000");
});