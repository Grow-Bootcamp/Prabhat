import {Router} from "express";
import type { Response } from "express";

import {authenticateToken, type AuthRequest,} from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/profiles",authenticateToken, (req: AuthRequest, res: Response): void => {
    res.status(200).json({
        message: "Profile accessed successfully",
        user: req.user,
    });
}
);
export default router;