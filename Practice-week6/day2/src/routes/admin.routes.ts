import { Router } from "express";

import { authenticate } from "../middleware/authenticate.js";
import { allowRoles } from "../middleware/authorize.js";

const router = Router();

router.get(
  "/dashboard",
  authenticate,
  allowRoles("admin"),
  (_req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome to the admin dashboard",
      admin: res.locals.user
    });
  }
);

export default router;