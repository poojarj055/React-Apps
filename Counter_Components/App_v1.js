import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function formatDate(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const dayOfWeek = daysOfWeek[date.getDay()];
  const year = date.getFullYear();

  // Get the ordinal suffix for the day
  let suffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  } else if (day === 2 || day === 22) {
    suffix = "nd";
  } else if (day === 3 || day === 23) {
    suffix = "rd";
  }

  return `${day}${suffix} ${month}, ${dayOfWeek} ${year}`;
}

function App() {
  const [date, setDate] = useState("24 June, 2022");
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0); //counter should increase or decrease 'steo' times
  const newDate = new Date(date);

  const increaseDate = () => {
    setCount((prevCount) => prevCount + parseInt(step)); // Update the count using a callback function
    const newDate = new Date(date); // Create a new date object
    newDate.setDate(newDate.getDate() + parseInt(step)); // Increment date by step
    setDate(newDate); // Update the state with the new date
  };

  const decreaseDate = () => {
    setCount((prevCount) => prevCount - parseInt(step)); // Update the count using a callback function
    const newDate = new Date(date); // Create a new date object
    newDate.setDate(newDate.getDate() - parseInt(step)); // Decrement date by step
    setDate(newDate); // Update the state with the new date
  };

  function handleCalendarClick(e) {
    const selectedDate = new Date();
     setDate(selectedDate)
  }

  return (
    <div>
      <h1 className="headerStyle">This is Date counter web app</h1>
      <label>Counter Value: </label>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(e.target.value)}
      />
      <span>
        <label>Date Input: </label>
        <DatePicker selected={date} onChange={setDate} />
      </span>
      <br></br>
      <br></br>
      <button onClick={decreaseDate}>-</button>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <button onClick={increaseDate}>+</button>
      <h2>{formatDate(newDate)}</h2>
     
    </div>
  );
}

export default App;
