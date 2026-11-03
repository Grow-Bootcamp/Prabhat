import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };
    return (
        <div>
            <h1>Admin dashboard</h1>
            <h2>Welcome, Administrator!</h2>

            <p>Email: {user?.email}</p>
            <p>Role: {user?.role}</p>

            <h3>Admin Control</h3>
            <p>You have access to adminstrative features.</p>

            <button onClick={handleLogout}>Logout</button>

        </div>
    );
}
export default AdminDashboard;