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
