import { useAppSelector } from "../app/hooks";
function CounterDisplay () {
    const count = useAppSelector ((state) => state.counter.value);

    return (
        <div>
            <h2> Current Count: {count} </h2>
        </div>
    );
}
export default CounterDisplay;