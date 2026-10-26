import "dotenv/config";

import express from "express";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";

import { initializeDemoUsers } from "./data/users.js";

const app = express();

app.use(express.json());

// Basic health-check route
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Week 6 Day 2 RBAC API is running"
  });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// User routes
app.use("/api/user", userRoutes);

// Admin routes
app.use("/api/admin", adminRoutes);

const PORT = Number(process.env.PORT) || 3000;

async function startServer(): Promise<void> {
  await initializeDemoUsers();

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer().catch((error: unknown) => {
  console.error("Failed to start server:", error);
  process.exitCode = 1;
});