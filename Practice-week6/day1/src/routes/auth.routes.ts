import { Router,type Request, type Response } from "express";
import jwt from "jsonwebtoken";

const router = Router();

const demoUser = {
  id: "user123",
  email: "student@example.com",
  password: "pass123",
  role: "user",
};

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body as {
    email?: string;
    password?: string;
  };
    
  if (
    email !== demoUser.email ||
    password !== demoUser.password
  ) {
    return res.status(401).json({
        message: "Invalid email and password"
    });
  }

  const token = jwt.sign(
    {
        userId: demoUser.id,
        role: demoUser.role,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1h",
      algorithm: "HS256",
    }
  );

  return res.status(200).json({
    message: "Login successfull",
    token,
  });
});

export default router;