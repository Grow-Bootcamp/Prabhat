import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { users } from "..//utils/users.js";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (typeof email !== "string" || typeof password !== "string") {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  const user = users.find((item) => item.email === email);
  if (!user) {
    return res.status(401).json({
      message: "Invalid email and password",
    });
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    return res.status(401).json({
      message: "Invalid email and password",
    });
  }
  const accessSecret = process.env.ACCESS_TOKEN_SECRET;
  const refreshSecret = process.env.REFRESH_TOKEN_SECRET;

  if (!accessSecret || !refreshSecret) {
    return res.status(500).json({
      message: "Authentication configuration error",
    });
  }
  const payload = {
    sub: String(user.id),
    role: user.role,
  };

  const accessToken = jwt.sign(payload, accessSecret, { expiresIn: "15m" });

  const refreshToken = jwt.sign(
    { sub: String(user.id), type: "refresh" },
    refreshSecret,
    { expiresIn: "7d" },
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "Production",
    sameSite: "lax",
    path: "/api/auth",
    maxAge: 7 * 24 * 60 * 1000,
  });
  return res.json({
    message: "Login Successful",
    accessToken,
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
    },
  });
});
export default router;
