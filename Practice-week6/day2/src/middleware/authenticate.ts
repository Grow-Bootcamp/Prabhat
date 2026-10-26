import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";

import type { AuthenticatedUser } from "../types/auth.types.js";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is missing from the environment");
}

export const authenticate: RequestHandler = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    res.status(401).json({
      success: false,
      message: "Authentication token is required"
    });
    return;
  }

  const token = authorization.slice(7);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (
      typeof decoded === "string" ||
      typeof decoded.id !== "number" ||
      typeof decoded.username !== "string" ||
      (decoded.role !== "user" && decoded.role !== "admin")
    ) {
      res.status(401).json({
        success: false,
        message: "Invalid token payload"
      });
      return;
    }

    res.locals.user = {
      id: decoded.id,
      username: decoded.username,
      role: decoded.role
    } satisfies AuthenticatedUser;

    next();
  } catch {
    res.status(401).json({
      success: false,
      message: "Invalid or expired token"
    });
  }
};