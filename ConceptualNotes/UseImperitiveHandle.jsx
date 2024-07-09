// Overview of useImperativeHandle:
// The useImperativeHandle hook in React allows you to customize the instance value that is exposed when using ref in a parent component. 
// This hook is particularly useful when you want to expose specific methods from a child component to a parent component, which can then call these 
// methods directly.


/* eslint-disable react/display-name */
import {forwardRef, useImperativeHandle, useRef} from "react";

const UseImperativeHandleHook = () => {
  const childRef = useRef(null);

  return (
    <div>
      <h3>
        <u>useImperativeHandle Hook</u>
      </h3>

      <h5>
        How do u call a function of child component from parent component?
      </h5>
      <button onClick={() => childRef.current.focusInput()}>
        Focus on input
      </button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

Parent Component:

Step 1: The parent component creates a ref called childRef using useRef.
Step 2: The parent component renders the ChildComponent, passing the childRef to it.
Step 3: The parent component has a button. When clicked, it calls the focusInput method on the child component via childRef.current.focusInput().

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focusInput,
    };
  });

  return <input type="text" ref={inputRef} />;
});

export default UseImperativeHandleHook;

Child Component:

Step 1: The ChildComponent is wrapped with forwardRef to receive the ref from the parent.
Step 2: The child component creates a ref for the input field using useRef called inputRef.
Step 3: The child component defines a focusInput function that focuses the input field.
Step 4: The child component uses useImperativeHandle to expose the focusInput function to the parent component via the ref passed from the parent.
Step 5: The child component renders an input field and assigns the inputRef to it.



Parent Component (UseImperativeHandleHook)
-------------------------------------------------------
| 1. Create ref (childRef)                            |
| 2. Render ChildComponent with ref (childRef)        |
| 3. Button (onClick -> childRef.current.focusInput())|
-------------------------------------------------------
                        |
                        |
                        v
Child Component (ChildComponent)
-------------------------------------------------------
| 1. Receive ref (forwardRef)                         |
| 2. Create input ref (inputRef)                      |
| 3. Define focusInput function                       |
|    - inputRef.current.focus()                       |
| 4. Use useImperativeHandle                          |
|    - Expose focusInput to parent via ref            |
| 5. Render input field with ref (inputRef)           |
-------------------------------------------------------



  

