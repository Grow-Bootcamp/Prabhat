import express, { type Express, type Request, type Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World k xa sanchai ho!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

app.get("/users", (req: Request, res: Response) => {
  res.send("this is from users");
});

app.get("/weather", (req: Request, res: Response) => {
  res.send("Gham Lageko xa!");
})