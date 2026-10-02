import express, {
 type Request,
 type Response,
 type NextFunction,
} from "express";

import mongoose from "mongoose";

import { User } from "./models/user.js";

import { errorHandler } from "../src/errorHandler.js";

const app = express();

app.use(express.json());

// DATABASE CONNECTION

await mongoose.connect(
  "mongodb://127.0.0.1:27017/week4"
);

console.log("MongoDB connected");

// HOME ROUTE

app.get("/", (req: Request, res: Response) => {

  res.json({
    message: "Server is running",
  });

});

// CREATE USER

app.post(
  "/users",
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      const user = await User.create(req.body);

      res.status(201).json({
        success: true,
        message: "User created successfully",
        user,
      });

    } catch (error) {

      // Send error to global error handler
      next(error);

    }

  }
);

// GET USERS

app.get(
  "/users",
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    try {

      const users = await User.find();

      res.json({
        success: true,
        users,
      });

    } catch (error) {

      next(error);

    }

  }
);

// TEST ERROR

app.get(
  "/test-error",
  (req: Request, res: Response, next: NextFunction) => {

    const error = new Error("Something went wrong!");

    next(error);

  }
);

// GLOBAL ERROR HANDLER

app.use(errorHandler);

// START SERVER

app.listen(3000, () => {

  console.log("Server running on port 3000");

});