// The useWindowSize hook is a useful for retrieving and tracking the dimensions of the browser window within a React component. 
// It attaches an event listener to the “resize” event, ensuring that the size is updated dynamically whenever the window is resized. 
// The hook returns the “size” object, enabling components to access and utilize the window dimensions for various purposes, 
// such as responsive layout adjustments, conditional rendering, or calculations based on the available space.


import {useEffect, useState} from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;






┌─────────────────────┐
│  Component Mounts   │
└─────────────────────┘
             │
             ▼
   ┌─────────────────────┐
   │  Call useWindowSize │
   └─────────────────────┘
             │
             ▼
   ┌─────────────────────────┐
   │ Initialize windowSize   │
   │ width: window.innerWidth│
   │ height: window.innerHeight│
   └─────────────────────────┘
             │
             ▼
   ┌─────────────────────────────────────┐
   │ useEffect: Add Resize Event Listener│
   │ window.addEventListener("resize", handleResize) │
   └─────────────────────────────────────┘
             │
             ▼
   ┌────────────────────┐
   │ Window Resizes     │
   └────────────────────┘
             │
             ▼
   ┌──────────────────────┐
   │ Call handleResize    │
   │ Update windowSize    │
   │ width: window.innerWidth│
   │ height: window.innerHeight│
   └──────────────────────┘
             │
             ▼
   ┌──────────────────────────────┐
   │ windowSize Updated: Re-render│
   │  with new dimensions         │
   └──────────────────────────────┘
             │
             ▼
   ┌──────────────────────────────┐
   │ Component Renders with new   │
   │ windowSize                   │
   └──────────────────────────────┘
             │
             ▼
   ┌─────────────────────┐
   │ Component Unmounts  │
   └─────────────────────┘
             │
             ▼
   ┌─────────────────────────────────────────┐
   │ useEffect Cleanup: Remove Resize Event  │
   │ window.removeEventListener("resize", handleResize) │
   └─────────────────────────────────────────┘
