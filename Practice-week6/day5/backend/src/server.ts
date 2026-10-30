import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import protectedRoutes from "./routes/protected.routes.js"

dotenv.config();

const app = express();

// Middeware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

//middleware 
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api", protectedRoutes);

//Test API
app.get("/",(_req,res)=> {
    res.json({
        message: "Day 5 Authentication API is running bro!"
    });
});

//Server
const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
    console.log(`Server is running at http:${PORT}`);
});