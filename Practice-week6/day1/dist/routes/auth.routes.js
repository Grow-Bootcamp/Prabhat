import { Router } from "express";
import jwt from "jsonwebtoken";
const router = Router();
const demoUser = {
    id: "user123",
    email: "student@example.com",
    password: "password123",
    role: "user",
};
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email !== demoUser.email ||
        password !== demoUser.password) {
        return res.status(401).json({
            message: "Invalid email and password"
        });
    }
    const token = jwt.sign({
        userId: demoUser.id,
        role: demoUser.role,
    }, process.env.JWT_SECRET, {
        expiresIn: "1h",
        algorithm: "HS256",
    });
    return res.status(200).json({
        message: "Login successfull",
        token,
    });
});
export default router;
//# sourceMappingURL=auth.routes.js.map