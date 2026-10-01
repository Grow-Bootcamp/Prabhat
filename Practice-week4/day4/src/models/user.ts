import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  role: String,
  salary: Number,
  city: String,
});

export const User = mongoose.model("User", userSchema);