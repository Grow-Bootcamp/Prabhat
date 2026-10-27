import express, {} from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("Hello World k xa sanchai ho!");
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
app.get("/users", (req, res) => {
    res.send("this is from users");
});
app.get("/weather", (req, res) => {
    res.send("Gham Lageko xa!");
});
//# sourceMappingURL=day4.js.map