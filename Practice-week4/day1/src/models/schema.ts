import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },

  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },

  // age: {
  //   type: Number,
  //   required: true,
  //   min: 18,
  // },

  // role: {
  //   type: String,
  //   enum: ["user", "admin"],
  //   default: "user",
  // },
});
const User = mongoose.model("User", userSchema);

export default User;
