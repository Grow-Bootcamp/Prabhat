import { CounterProvider } from "./context/CounterContext";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Dashboard from "./components/Dashboard";
import StatsChart from "./components/StatsCharts";

function App() {
  return (
   <CounterProvider>
  <div>
    <Navbar />
    <hr />
    <Counter />
    <hr />
    <Dashboard />
    <hr />
    <StatsChart />
  </div>
</CounterProvider>
  );
}

export default App;