### Revision Notes for Types of Components in React (From Interview Point of View)

#### 1. Functional Components

- **Definition**: Simple JavaScript functions that accept props as an argument and return React elements. They are also called stateless components as they do not manage state.
- **Advantages**:
  - Easier to read and test.
  - Less boilerplate code.
  - Better performance due to lack of state management.
  - Can use hooks for state and side effects.
- **Example**:
  ```jsx
  const Greeting = (props) => {
    return <h1>Hello, {props.name}!</h1>;
  };
  ```

#### 2. Class Components

- **Definition**: More complex components defined as ES6 classes that extend `React.Component`. They can manage state and lifecycle methods.
- **Advantages**:
  - Can manage local component state.
  - Access to lifecycle methods (e.g., `componentDidMount`, `componentDidUpdate`).
  - Useful for more complex logic.
- **Example**:
  ```jsx
  class Greeting extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}!</h1>;
    }
  }
  ```

#### 3. Pure Components

- **Definition**: A version of class components that implement `shouldComponentUpdate` with a shallow prop and state comparison.
- **Advantages**:
  - Optimizes performance by preventing unnecessary re-renders.
- **Example**:
  ```jsx
  class Greeting extends React.PureComponent {
    render() {
      return <h1>Hello, {this.props.name}!</h1>;
    }
  }
  ```

#### 4. Higher-Order Components (HOCs)

- **Definition**: Functions that take a component and return a new component with additional props or functionality.
- **Advantages**:
  - Reuse logic across multiple components.
  - Decouple reusable behavior from component logic.
- **Example**:
  ```jsx
  const withGreeting = (WrappedComponent) => {
    return (props) => <WrappedComponent {...props} greeting="Hello" />;
  };
  
  const HelloWorld = (props) => {
    return <h1>{props.greeting}, World!</h1>;
  };
  
  const EnhancedHelloWorld = withGreeting(HelloWorld);
  ```

#### 5. Controlled Components

- **Definition**: Components where form data is handled by the state within the component.
- **Advantages**:
  - Single source of truth for form data.
  - Easier to manage and validate form data.
- **Example**:
  ```jsx
  class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: '' };
    }
    
    handleChange = (event) => {
      this.setState({ value: event.target.value });
    };
    
    render() {
      return <input type="text" value={this.state.value} onChange={this.handleChange} />;
    }
  }
  ```

#### 6. Uncontrolled Components

- **Definition**: Components where form data is handled by the DOM itself rather than the component state.
- **Advantages**:
  - Simpler to implement for small forms.
  - Useful when integrating with non-React libraries.
- **Example**:
  ```jsx
  class UncontrolledInput extends React.Component {
    constructor(props) {
      super(props);
      this.inputRef = React.createRef();
    }
    
    handleSubmit = () => {
      alert(this.inputRef.current.value);
    };
    
    render() {
      return (
        <div>
          <input type="text" ref={this.inputRef} />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      );
    }
  }
  ```

#### 7. Presentational (or Dumb) Components

- **Definition**: Components focused solely on rendering UI, typically stateless and receive data via props.
- **Advantages**:
  - Promotes separation of concerns.
  - Easier to test and reuse.
- **Example**:
  ```jsx
  const UserProfile = (props) => {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.bio}</p>
      </div>
    );
  };
  ```

#### 8. Container (or Smart) Components

- **Definition**: Components that manage state and logic, passing data and callbacks to presentational components.
- **Advantages**:
  - Centralizes state management.
  - Decouples UI from business logic.
- **Example**:
  ```jsx
  class UserProfileContainer extends React.Component {
    state = {
      user: {
        name: 'John Doe',
        bio: 'Software Developer'
      }
    };
    
    render() {
      return <UserProfile name={this.state.user.name} bio={this.state.user.bio} />;
    }
  }
  ```

### Interview Tips
1. **Understanding**:
   - Be clear about the differences and use cases for each type of component.
   - Understand the trade-offs between functional and class components, especially with the introduction of hooks.

2. **Implementation**:
   - Be prepared to write code for each type of component.
   - Demonstrate knowledge of hooks if using functional components.

3. **Performance**:
   - Discuss how Pure Components and HOCs can optimize performance.
   - Understand when to use controlled vs. uncontrolled components.

4. **Best Practices**:
   - Advocate for separation of concerns using presentational and container components.
   - Emphasize the importance of reusable and maintainable code.

By understanding these types of components and their appropriate use cases, you will be well-prepared to discuss them in an interview setting.
