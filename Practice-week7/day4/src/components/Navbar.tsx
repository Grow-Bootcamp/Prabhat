import { useCounter } from "../context/CounterContext";

function Navbar() {
    const { state } = useCounter();

    return (
        <nav>
            <h2> My Aplications </h2>
            <p> Navbar Count: {state.count} </p>
        </nav>
    );
}
export default Navbar;