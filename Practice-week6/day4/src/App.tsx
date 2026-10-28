import { useState } from "react";
import FunctionalLifecycle from "./FunctionalLifecycle";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Component" : "Show Component"}
      </button>

      {show && <FunctionalLifecycle />}
    </div>
  );
}

export default App;