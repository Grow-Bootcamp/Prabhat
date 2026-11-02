import { useState } from "react";
import type { FormEvent } from "react";
import api from "./api";
import  axios  from "axios";
interface User {
  id: number;
  email: string;
  role: string;
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [message, setMessage] = useState("");

  const handleLogin = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      setAccessToken(response.data.accessToken);
      setUser(response.data.user);
      setMessage("Login successful!");
    } catch (error) {
        console.error("Login error:", error);

        if (axios.isAxiosError(error)) {
            console.log("Status:", error.response?.status);
            console.log("Backend response:", error.response?.data);
        }
        
      setMessage("Login failed. Check your email and password.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "60px auto" }}>
        <h1> Login System </h1>
        {!user? (
            <form onSubmit= {handleLogin}>
                <div style= {{ marginBottom: "15px" }}>
                    <label htmlFor= "email">Email</label>
                    <br />
                    <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                <label htmlFor="password">Password</label>
                <br />
                <input
                id = "password"
                type = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                required
                />
                </div>

                <button type = "submit"> Login </button>
                </form>
        ) : (
            <div>
                <h2> Welcome! </h2>
                <p> Email : {user.email} </p>
                <p> Role: {user.role} </p>
            
            </div>
        )}

        {message && <p>{message}</p>}

        {accessToken && (
            <p style = {{ color: "green"}}> Access token recieved successfully!</p>
        )}
        </div>
  );
    }

  export default App;