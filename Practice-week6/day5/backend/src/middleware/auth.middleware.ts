import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: "admin" | "user";
  };
}
export function authenticateToken(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : undefined;
  if (!token) {
    return res.status(401).json({
      message: "Access token is required",
    });
  }
  const secret = process.env.ACCESS_TOKEN_SECRET;

  if (!secret) {
    return res.status(500).json({
      message: "Authentication configuration error",
    });
  }
  try {
    const decoded = jwt.verify(token, secret);
    if (
      typeof decoded === "string" ||
      typeof decoded.sub !== "string" ||
      (decoded.role !== "admin" && decoded.role !== "user")
    ) {
      return res.status(401).json({
        message: "Invalid access token",
      });
    }
    req.user = {
      id: decoded.sub,
      role: decoded.role,
    };
    next();
  } catch {
    return res.status(401).json({
      message: "Invalid or expired access token",
    });
  }
}
export function authorizeRole(role: "admin" | "user") {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required",
      });
    }
    if (req.user.role !== role) {
      return res.status(403).json({
        message: "You do not have permission to access this resource",
      });
    }
    next();
  };
}
