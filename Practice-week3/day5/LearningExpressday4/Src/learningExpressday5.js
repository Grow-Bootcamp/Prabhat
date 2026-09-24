import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", (req, res) => {
  res.send("Users Page");
});

app.get("/products", (req, res) => {
  res.send("Products Page");
});

app.listen(3000, () => {
  console.log("Server running");
});