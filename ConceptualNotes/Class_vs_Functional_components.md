Class-Based Components

Definition:
Class-based components are ES6 classes that extend React.Component and must implement a render method.

Basic Structure:

```
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}
export default MyComponent;
```

State Management:

State is initialized in the constructor.
State updates are done using this.setState.
Example:

```
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
```

Lifecycle Methods:

Mounting: componentDidMount
Updating: componentDidUpdate
Unmounting: componentWillUnmount
Example:

```
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick = () => {
    this.setState(state => ({ seconds: state.seconds + 1 }));
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

export default Timer;

```
Props:

Accessed via this.props.
Default props can be set using defaultProps.
```
class Greeting extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

Greeting.defaultProps = {
  name: 'Guest'
};

export default Greeting;

```
Functional Components

Definition:
Functional components are simple JavaScript functions that accept props as an argument and return React elements. With hooks, functional components can also manage state and side effects.

Basic Structure:

```
import React from 'react';

function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
}

export default MyComponent;

```
State Management (Hooks):

useState for state management.
useEffect for side effects.
Example:

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;

```
useEffect Hook:

Mimics lifecycle methods of class-based components.
componentDidMount + componentDidUpdate + componentWillUnmount.
Example:

```
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      Seconds: {seconds}
    </div>
  );
}

export default Timer;
```
Props:

Passed as arguments to the function.
Default props can be set using default function parameters or defaultProps.
Example:

```
import React from 'react';

function Greeting({ name = 'Guest' }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}

export default Greeting;

```
Comparison

Class-Based vs. Functional Components:

Class-Based:
Use this keyword.
Stateful logic via state and setState.
Lifecycle methods.
Functional:
Simpler syntax.
Hooks (useState, useEffect, etc.) for state and side effects.
Easier to read and test.
Hooks:

Allow the use of state and other React features in functional components.
useState for state.
useEffect for side effects.
Lifecycle Methods vs. useEffect:

componentDidMount => useEffect(() => {}, [])
componentDidUpdate => useEffect(() => {})
componentWillUnmount => useEffect(() => { return () => {} }, [])
Best Practices:

Prefer functional components with hooks for new code.
Use class-based components if working with legacy code or if specific lifecycle methods are required.
Summary
Understanding both class-based and functional components is essential for React development. While functional components with hooks are the modern standard, class-based components are still prevalent in many codebases. Familiarity with both paradigms will help in writing, maintaining, and understanding React applications more effectively.
