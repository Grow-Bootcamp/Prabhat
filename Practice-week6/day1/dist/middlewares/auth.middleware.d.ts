import { type Request, type Response, type NextFunction } from "express";
import type { JwtPayload } from "jsonwebtoken";
export interface AuthRequest extends Request {
    user?: string | JwtPayload;
}
export declare const authenticateToken: (req: AuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.middleware.d.ts.map