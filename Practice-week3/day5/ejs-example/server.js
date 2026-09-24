const express = require("express");

const app = express();

// Tell Express that we are using EJS
app.set("view engine", "ejs");

// Route
app.get("/", (req, res) => {
  const user = {
    name: "Prabhat",
    age: 20,
    city: "Dhangadhi"
  };

  res.render("index", { user: user });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});