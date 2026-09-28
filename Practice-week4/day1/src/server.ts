import express, { type Request, type Response } from "express";
import mongoose from "mongoose";
import { createUser, deleteUser } from "./crud.js";

const app = express();

// APi for get with path
app.get("/", async (req: Request, res: Response) => {
  const user = await createUser({ name: "yabesh" });
  res.json({
    user,
  });
});

app.get("/delete", async (req: Request, res: Response) => {
  const user = await deleteUser("prabhat");
  res.json({
    user,
  });
});

const startServer = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/week4");

    console.log("MongoDb connected successfully");
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error: any) {
    console.error("Server startup failed: ", error);
  }
};

startServer();
