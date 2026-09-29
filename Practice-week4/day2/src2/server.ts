import "dotenv/config";
import express from "express";

import { connectDB } from "./db.js";
import { transferMoney } from "./services/transaction.js";

const app = express();

app.use(express.json());

await connectDB();

app.post("/transfer", async (req, res) => {

  try {

    const { senderId, receiverId, amount } = req.body;

    await transferMoney(
      senderId,
      receiverId,
      amount
    );

    res.json({
      message: "Money transferred successfully"
    });

  } catch (error) {

    res.status(400).json({
      message: "Transaction failed"
    });

  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});