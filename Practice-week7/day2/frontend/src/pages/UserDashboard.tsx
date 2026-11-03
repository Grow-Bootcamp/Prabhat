import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h1>User Dashboard</h1>

      <h2>Welcome!</h2>

      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>

      <p>You have access to regular user features.</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserDashboard;