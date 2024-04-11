// Create Counter using class component

import React from "react";

class App extends React.Component {
  constructor(counter) {
    super(counter);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  decrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
