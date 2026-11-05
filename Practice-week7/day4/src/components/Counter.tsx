import { useCallback, useMemo, useEffect } from "react";
import { useCounter } from "../context/CounterContext";

function Counter() {
  const { state, dispatch } = useCounter();

  // useMemo: Memorize the calculated value
  const squaredCount = useMemo(() => {
    console.log("Calculating square...");
    return state.count * state.count;
  }, [state.count]);

  // useCallback: Memorize event handler functions
  const increment = useCallback(() => {
    dispatch({ type: "INCREMENT" });
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch({ type: "DECREMENT" });
  }, [dispatch]);

  const incrementByFive = useCallback(() => {
    dispatch({ type: "INCREMENT_BY_FIVE" });
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch({ type: "RESET" });
  }, [dispatch]);

  useEffect(() => {
    document.title = `Count: ${state.count}`;
    console.log("Count updated:", state.count);
  }, [state.count]);

  return (
    <div>
      <h2>Counter Application</h2>
      <h3>Count: {state.count}</h3>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementByFive}>Increment by 5</button>
      <button onClick={reset}>Reset</button>

      <h3> Square Count: {squaredCount}</h3>
    </div>
  );
}
export default Counter;