import { useAppDispatch } from "../app/hooks";
import { increment, decrement, reset, incrementByAmount } from "../features/counter/counterSlice";

function CounterCountroles () {
    const dispatch = useAppDispatch ();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>

            <button onClick={() => dispatch(decrement ())}>
                Decrement
            </button>

            <button onClick={() => dispatch(reset())}>
                Reset
            </button>

            <button onClick={() => dispatch(incrementByAmount(5))}>
                Increment by 5
            </button>
        </div>
    );
}
export default CounterCountroles;
