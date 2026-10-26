import bcrypt from "bcrypt";
import type {
  AuthenticatedUser,
  UserRole
} from "../types/auth.types.js";

interface DemoUser extends AuthenticatedUser {
  passwordHash: string;
}

let users: DemoUser[] = [];

export async function initializeDemoUsers(): Promise<void> {
  const adminPasswordHash = await bcrypt.hash("admin123", 10);
  const userPasswordHash = await bcrypt.hash("user123", 10);

  users = [
    {
      id: 1,
      username: "admin",
      role: "admin",
      passwordHash: adminPasswordHash
    },
    {
      id: 2,
      username: "user",
      role: "user",
      passwordHash: userPasswordHash
    }
  ];
}

export async function findUserByUsername(
  username: string
): Promise<DemoUser | undefined> {
  return users.find((user) => user.username === username);
}

export function getPublicUser(
  user: DemoUser
): AuthenticatedUser {
  return {
    id: user.id,
    username: user.username,
    role: user.role
  };
}

export function isUserRole(value: unknown): value is UserRole {
  return value === "user" || value === "admin";
}