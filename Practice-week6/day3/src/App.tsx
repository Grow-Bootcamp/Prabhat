import { useState } from "react";
import Profile from "./Profile";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <h1>React Fundamentals</h1>

      <section>
        <h2>Student Profiles</h2>

        <Profile
          name="Prabhat Karki"
          course="BSc CSIT"
          semester={6}
        />

        <Profile
          name="Ram Sharma"
          course="BCA"
          semester={4}
        />
      </section>

      <section>
        <h2>Counter</h2>

        <p>Current count: {count}</p>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrease
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </section>
    </main>
  );
}

export default App;