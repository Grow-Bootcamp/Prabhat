import { createContext, useContext, useState, type ReactNode, } from "react";
import axios from "axios";

// Define user type
interface User {
    id: number;
    email: string;
    role: "admin" | "user";
}

// Define AuthContext type
interface AuthContextType {
    user: User | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

// Create Authprovider 
export function AuthProvider({ children }: { children: ReactNode }) {

    const [user, setUser] = useState<User | null>(null);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    // Login function
    const login = async (email: string, password: string) => {
        const response = await axios.post(
            "http://localhost:4000/api/auth/login",
            {
                email,
                password,
            },
            {
                withCredentials: true,
            }
        );
        setUser(response.data.user);
        setAccessToken(response.data.accessToken);
    };

    // Logout function
    const logout = () => {
        setUser(null);
        setAccessToken(null);
    };

    // AuthContext provider
    return (
        <AuthContext.Provider
            value={{
                user, accessToken,
                isAuthenticated: !!accessToken,
                login,
                logout
            }}
        >{children}</AuthContext.Provider>
    );
}

// Custom Hook
export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("UseAuth must be used inside AuthProvider");
    }
    return context;
}