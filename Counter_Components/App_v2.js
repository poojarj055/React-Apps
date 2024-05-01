import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(1);
  return (
    <div className="App">
      <h1>Counter App</h1>
      <label>Counter value: </label>
      <input
        type="number"
        value={counter}
        onChange={(e) => setCounter(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <Counter count={count} setCount={setCount} counter={counter} />
    </div>
  );
}

function Counter({ count, setCount, counter }) {
  function inc() {
    //setCount(count + parseInt(counter));
    setCount((prevCount) => prevCount + parseInt(counter));
  }
  function dec() {
    //setCount(count - counter);
     setCount((nextCount) => nextCount - parseInt(counter));
  }
  return (
    <div>
      <button onClick={dec}>-</button>
      decrement/increment
      <button onClick={inc}>+</button>
      <h2>Number: {count}</h2>
    </div>
  );
}
