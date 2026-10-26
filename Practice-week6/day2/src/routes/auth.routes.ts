import { Router } from "express";

import { authenticate } from "../middleware/authenticate.js";
import type { AuthRequest } from "../types/auth.types.js";

const router = Router();

router.get(
  "/profile",
  authenticate,
  (req: AuthRequest, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome to your profile",
      user: req.user
    });
  }
);

export default router;