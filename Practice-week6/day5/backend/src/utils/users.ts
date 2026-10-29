import bcrypt from "bcrypt";

export interface User {
    id: number;
    email: string;
    password: string;
    role: "admin" | "user";
}

export const users: User[] = [
    {
        id: 1,
        email: "admin@example.com",
        password: bcrypt.hashSync("Admin@123", 10),
        role: "admin"
    },
    {
        id: 2,
        email: "user@example.com",
        password: bcrypt.hashSync("User@123", 10),
        role: "user"
    }
];