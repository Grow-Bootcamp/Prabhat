import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"

function Dashboard () {
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/")
    };

    return (
        <div>
            <h1>Welcome to Dashboard</h1>
            <h2>User Information</h2>
            <p>Email: {user?.email}</p>
            <p>Role: {user?.role}</p>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}
export default Dashboard;