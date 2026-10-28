import { useEffect, useState } from "react";

function FunctionalLifecycle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect started!");

    return () => {
      console.log("Effect cleanup!");
    };
  }, []);

  return (
    <div>
      <h2>Functional Lifecycle Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default FunctionalLifecycle;