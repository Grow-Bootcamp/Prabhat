import type { Request } from "express";

export type UserRole = "user" | "admin";

export interface AuthenticatedUser {
  id: number;
  username: string;
  role: UserRole;
}

export interface AuthRequest extends Request {
  user?: AuthenticatedUser;
}