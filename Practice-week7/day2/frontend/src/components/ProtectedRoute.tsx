import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { ReactNode } from "react";

interface ProtectedRouterProps {
    children: ReactNode;
    allowedRoles?: ("admin" | "user")[];
}
function ProtectedRoute({ children, allowedRoles, }: ProtectedRouterProps) {
    const { isAuthenticated, user } = useAuth();


    // Check whether the user is logged in(CHECK AUTHENTICATION)
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Check whether the user's role is allowed (CHECK AUTHORIZATION)
    if (
        allowedRoles &&
        (!user || !allowedRoles.includes(user.role))
    ) {
        return <Navigate to="/dashboard" replace />;
    }
    // Allow access
    return children;
}
export default ProtectedRoute;