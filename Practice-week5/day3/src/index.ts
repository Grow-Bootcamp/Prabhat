import { AppDataSource } from "./data-source.js";

AppDataSource.initialize()
  .then(() => {
    console.log("MySQL connected successfully!");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });