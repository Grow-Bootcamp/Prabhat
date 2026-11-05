import useWindowWidth from "../hooks/useWindowWith";
import { useCounter } from "../context/CounterContext";
function Dashboard() {
    const width = useWindowWidth();
    const { state } = useCounter();

    return (
        <div>
            <h2> Dashboard </h2>
            <p> Current Global Count : {state.count}</p>
            <p>Browser Width: {width}px</p>
        </div>
    );
}
export default Dashboard;