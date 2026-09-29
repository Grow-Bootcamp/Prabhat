import mongoose from "mongoose";
import { User } from "../models/users.js";

export const transferMoney = async (
  senderId: string,
  receiverId: string,
  amount: number
): Promise<void> => {

  const session = await mongoose.startSession();

  try {

    session.startTransaction();

    // 1. Remove money from sender
    const sender = await User.findByIdAndUpdate(
      senderId,
      {
        $inc: { balance: -amount }
      },
      {
        new: true,
        session
      }
    );

    if (!sender) {
      throw new Error("Sender not found");
    }

    // 2. Add money to receiver
    const receiver = await User.findByIdAndUpdate(
      receiverId,
      {
        $inc: { balance: amount }
      },
      {
        new: true,
        session
      }
    );

    if (!receiver) {
      throw new Error("Receiver not found");
    }

    // Everything successful
    await session.commitTransaction();

    console.log("Transaction successful");

  } catch (error) {

    // Something failed
    await session.abortTransaction();

    console.log("Transaction failed:", error);

    throw error;

  } finally {

    await session.endSession();

  }
};