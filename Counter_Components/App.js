import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Counter Components</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const date = new Date("June 21 2021");
  date.setDate(date.getDate() + count);
  return (
    <>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span> Count :{count} </span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is`
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>
            <b>{date.toDateString()}</b>
          </span>
        </p>
      </div>
    </>
  );
}
