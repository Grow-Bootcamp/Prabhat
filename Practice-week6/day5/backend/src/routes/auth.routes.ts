import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { users } from "../utils/users.js";

const router = Router();

const refreshTokens = new Set<string>();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = users.find((item) => item.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
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
    // Cerate A access token

    const accessToken = jwt.sign(
      {
        sub: String(user.id),
        role: user.role,
      },
      accessSecret,
      { expiresIn: "15m" },
    );

    const refreshToken = jwt.sign(
      {
        sub: String(user.id),
        type: "refresh",
      },
      refreshSecret,
      { expiresIn: "7d" },
    );

    // Store refresh token
    refreshTokens.add(refreshToken);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      message: "Login Successful",
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  } catch {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
});

// Refrest access token

router.post("/refresh", (req, res) => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Refresh token is required",
    });
  }
  if (!refreshTokens.has(refreshToken)) {
    return res.status(403).json({
      message: "Invalid or revoked refresh token",
    });
  }
  const refreshSecret = process.env.REFRESH_TOKEN_SECRET;
  const accessSecret = process.env.ACCESS_TOKEN_SECRET;

  if (!refreshSecret || !accessSecret) {
    return res.status(500).json({
      message: "Authentication configuration error",
    });
  }
  try {
    const decoded = jwt.verify(refreshToken, refreshSecret);

    if (
      typeof decoded === "string" ||
      typeof decoded.sub !== "string" ||
      decoded.type !== "refresh"
    ) {
      refreshToken.delete(refreshToken);

      return res.status(401).json({
        message: "Invalid refresh token!",
      });
    }
    const user = users.find((u) => String(u.id) === decoded.sub);

    if (!user) {
      refreshToken.delete(refreshToken);

      return res.status(401).json({
        message: "User not found!",
      });
    }

    // Revoke the old refresh token
    refreshTokens.delete(refreshToken);

    // generate a new access token
    const newAccessToken = jwt.sign(
      {
        sub: String(user.id),
        role: user.role,
      },
      accessSecret,
      { expiresIn: "15m" },
    );

    // Generate a new refresh token
    const newRefreshToken = jwt.sign(
      {
        sub: String(user.id),
        type: "refresh",
      },
      refreshSecret,
      { expiresIn: "7d" },
    );

    // Store the new refresh token
    refreshTokens.add(newRefreshToken);

    // Replace the old cookie with the new one
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      message: "Access token refreshed successfully!",
      accessToken: newAccessToken,
    });
  } catch {
    refreshTokens.delete(refreshToken);

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth",
    });
    return res.status(401).json({
      message: "Invalid or expired refresh token",
    });
  }
});
export default router;
