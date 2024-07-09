// The DebouncedInput component allows you to handle user input with a debounce effect, 
// meaning that it delays the processing of the input until the user has stopped typing for a specified duration (in this case, 1000 milliseconds or 1 second). 
// This is useful for scenarios such as API calls where you don't want to trigger a request on every keystroke but rather after the user has paused typing.


import {useState} from "react";
import useDebounce from "../hooks/use-debounce";

const DebouncedInput = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const debouncedValue = useDebounce(inputText, 1000, () => {
    // API Call
    console.log("Function Call");
  });

  return (
    <div>
      <p>{debouncedValue}</p>
      <input
        type="text"
        value={inputText}
        placeholder="Type Something... "
        onChange={handleInputChange}
      />
    </div>
  );
};

export default DebouncedInput;


```
User Input                Component State           Custom Hook: useDebounce
--------------------      --------------------      ---------------------------
Type "A"                  inputText = "A"           Timer starts (1000ms)
                                                  |---------------------------|
Type "B"                  inputText = "AB"          Timer resets, starts again
                                                  |---------------------------|
Type "C"                  inputText = "ABC"         Timer resets, starts again
                                                  |---------------------------|
(No input for 1000ms)     inputText = "ABC"         Timer completes, 
                            debouncedValue = "ABC"  `debouncedValue` updated,
                                                    Callback executed
                                                  |---------------------------|
```

// Flow of useDebounce

// Initial Setup:

// useDebounce initializes debouncedValue with the current value.

//   Effect Hook:

// The useEffect hook sets up a timer with the specified delay.
// When value changes, the effect hook clears the previous timer and sets a new one.
// After delay milliseconds without any changes to value, the timer completes:
// debouncedValue is updated.
// callback function is executed.
// Return:

// The hook returns debouncedValue, which is the debounced version of the value.
