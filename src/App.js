import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };
  const decrementCount = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}
