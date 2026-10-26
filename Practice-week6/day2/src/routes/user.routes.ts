import { Router } from "express";

import { authenticate } from "../middleware/authenticate.js";

const router = Router();

router.get("/profile", authenticate, (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to your profile",
    user: res.locals.user
  });
});

export default router;