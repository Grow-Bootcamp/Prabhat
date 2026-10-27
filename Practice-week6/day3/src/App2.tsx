import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>React Counter</h1>
            <p>Count: {count}</p>

            <button onClick={()=> setCount(count + 1)}> Increase</button>
            <button onClick={()=> setCount(count - 1)}> Decrease </button>
            <button onClick={()=> setCount(0)}> Reset </button>
        </div>
    );
}

export default App;