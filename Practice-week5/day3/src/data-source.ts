import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { Student } from "./entities/Student.js";
import process from "process";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  entities: [Student],
  migrations: ["src/migrations/*.ts"],

  synchronize: false,
  logging: false,
});