import { useState } from "react";
export default function App() {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [output, setOutput] = useState("output");

  const handleSelect1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleSelect2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  const handleconversion = (event) => {
    setOutput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={output} onChange={handleconversion} />
      <select value={selectedOption1} onChange={handleSelect1}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={selectedOption2} onChange={handleSelect2}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {selectedOption1 === "USD" && selectedOption2 === "INR"
          ? (output * 83.46).toFixed(2)
          : ""}
        {selectedOption1 === "INR" && selectedOption2 === "USD"
          ? (output * 0.012).toFixed(2)
          : ""}
        {selectedOption1 === "EUR" && selectedOption2 === "USD"
          ? (output * 1.06).toFixed(2)
          : ""}
        {selectedOption1 === "USD" && selectedOption2 === "EUR"
          ? (output * 0.94).toFixed(2)
          : ""}
        {selectedOption1 === "USD" && selectedOption2 === "CAD"
          ? (output * 1.06).toFixed(2)
          : ""}
        {selectedOption1 === "CAD" && selectedOption2 === "USD"
          ? (output * 1.38).toFixed(2)
          : ""}
        {selectedOption1 === "EUR" && selectedOption2 === "CAD"
          ? (output * 1.47).toFixed(2)
          : ""}
        {selectedOption1 === "EUR" && selectedOption2 === "INR"
          ? (output * 88.81).toFixed(2)
          : ""}
        {selectedOption1 === "INR" && selectedOption2 === "CAD"
          ? (output * 0.017).toFixed(2)
          : ""}
        {selectedOption1 === "INR" && selectedOption2 === "EUR"
          ? (output * 0.011).toFixed(2)
          : ""}
        {selectedOption1 === "CAD" && selectedOption2 === "INR"
          ? (output * 60.49).toFixed(2)
          : ""}
        {selectedOption1 === "CAD" && selectedOption2 === "EUR"
          ? (output * 0.68).toFixed(2)
          : ""}
      </p>
    </div>
  );
}
