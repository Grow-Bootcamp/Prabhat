import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  balance: number;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true,
    min: 0
  }
});

export const User = mongoose.model<IUser>("User", userSchema);