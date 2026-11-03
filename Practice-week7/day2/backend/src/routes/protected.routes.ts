import { Router } from "express";
import {
    authenticateToken,
    authorizeRole,
    type AuthRequest
} from "../middleware/auth.middleware.js";

const router = Router();

// Accessible to any authenticated user
router.get(
    "/dashboard",
    authenticateToken,
    (req, res) => {
        const authReq = req as AuthRequest;

        return res.json({
            message: "Welcome to your dashboard!",
            user: authReq.user
        });
    }
);

// Accessible only to admins
router.get(
    "/admin",
    authenticateToken,
    authorizeRole("admin"),
    (_req, res) => {
        return res.json({
            message: "Welcome to the admin panel!",
            secretData: "Only admins can see this data."
        });
    }
);

export default router;