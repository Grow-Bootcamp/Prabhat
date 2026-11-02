import {useState} from "react";
import { toast } from "react-toastify";
import Modal from "../components/Modal";

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSuccess = () => {
        toast.success("Welcome to my application!");
    };

    const handleError = () => {
        toast.error("Something went wrong");
    };

    const handleWarning = () => {
        toast.warning("Please complete all fields");
    };

    const handleInfo = () => {
        toast.info("New update avilable");
    };

    const handleConfirm = () => {
        setIsModalOpen(false);
        toast.success("Action confirmed successfully!");
    };

    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to my React Router application !</p>

            <button onClick={handleSuccess}>Success</button>
            <button onClick={handleError}>Error</button>
            <button onClick={handleWarning}>Warning</button>
            <button onClick={handleInfo}>Info</button>

            <hr />

            <h2>Modal Example</h2>

            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
            <Modal isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleConfirm}
            />
        </div>
    );
}
export default Home;