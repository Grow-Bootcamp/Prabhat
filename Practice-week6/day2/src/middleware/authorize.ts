import type { RequestHandler } from "express";

import type { UserRole } from "../types/auth.types.js";

export function allowRoles(
  ...allowedRoles: UserRole[]
): RequestHandler {
  return (_req, res, next) => {
    const user = res.locals.user;

    if (!user) {
      res.status(401).json({
        success: false,
        message: "Please log in first"
      });
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      res.status(403).json({
        success: false,
        message: "You do not have permission to access this resource"
      });
      return;
    }

    next();
  };
}