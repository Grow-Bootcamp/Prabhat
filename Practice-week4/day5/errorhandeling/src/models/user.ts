import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
  },

  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [18, "Age must be at least 18"],
    max: [60, "Age cannot be more than 60"],
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export const User = mongoose.model("User", userSchema);