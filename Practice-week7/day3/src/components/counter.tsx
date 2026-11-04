import { increment, decrement, reset, incrementByAmount } from "../features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

function Counter () {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return(
        <div>
            <h1>Redux Toolkit Counter</h1>
            <h2> Count : {count}</h2>

            <button onClick = {() => dispatch(increment())}>
                Increment
            </button>

            <button onClick = {() => dispatch(decrement())}>
                Decrement
            </button>

            <button onClick = {() => dispatch(reset())}>
                Reset
            </button>

            <button onClick = {() => dispatch(incrementByAmount(5))}>
                Increment by 5
            </button>
        </div>
    );
}
export default Counter;