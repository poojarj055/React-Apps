import React, { useState } from "react";

const options = [
  { label: "Service was Good (10%)", value: 0.1 },
  { label: "Service was OK (5%)", value: 0.05 },
  { label: "Absolutely amazing (20%)", value: 0.2 },
  { label: "I don't like the service", value: 0.0 },
];

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [serviceRating, setServiceRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);

  const handleBillAmountChange = (event) => {
    setBillAmount(parseFloat(event.target.value));
  };

  const handleServiceRatingChange = (event) => {
    setServiceRating(parseFloat(event.target.value));
  };

  const handleFriendRatingChange = (event) => {
    setFriendRating(parseFloat(event.target.value));
  };

  const selfTip = billAmount * serviceRating;
  const friendTip = billAmount * friendRating;
  const totalAmount = billAmount + selfTip + friendTip;

  return (
    <div>
      <BillCalc onBillAmountChange={handleBillAmountChange} />
      <Service
        bill={billAmount}
        options={options}
        onServiceRatingChange={handleServiceRatingChange}
        onFriendRatingChange={handleFriendRatingChange}
      />
      <TotalCalc
        totalAmount={totalAmount}
        billAmount={billAmount}
        selfTip={selfTip}
        friendTip={friendTip}
      />
      <Reset />
    </div>
  );
}

export default App;

function BillCalc({ onBillAmountChange }) {
  return (
    <div>
      <label>How Much was the Bill?</label>
      <input
        type="number"
        placeholder="Bill value"
        onChange={onBillAmountChange}
      ></input>
    </div>
  );
}

function Service({ options, onServiceRatingChange, onFriendRatingChange }) {
  return (
    <div>
      <label>How did you like the service?</label>
      <select onChange={onServiceRatingChange}>
        <option>Select Service Rating</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <br />
      <label>How did your friend like the service?</label>
      <select onChange={onFriendRatingChange}>
        <option>Select Friend Rating</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function TotalCalc({ totalAmount, billAmount, selfTip, friendTip }) {
  return (
    <div>
      <h1>
        You PAY:{" "}
        {isNaN(totalAmount)
          ? "Please enter valid numbers"
          : totalAmount.toFixed(2)}
      </h1>
      <p>Bill Amount: ${billAmount.toFixed(2)}</p>
      <p>Self Tip: ${selfTip.toFixed(2)}</p>
      <p>Friend Tip: ${friendTip.toFixed(2)}</p>
    </div>
  );
}

function Reset() {
  return (
    <div>
      <button>Reset</button>
    </div>
  );
}
