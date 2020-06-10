import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement() {
    const num = this.state.count;
    this.setState({
      count: num + 1
    });
  }

  handleDecrement() {
    const num = this.state.count;
    this.setState({
      count: num - 1
    });
  }

  render() {
    return (
      <div className="counter">
        <p>Current Count:</p>
        <button onClick={this.handleDecrement.bind(this)}>Minus</button>
        <input type="number" value={this.state.count} />
        <button onClick={this.handleIncrement.bind(this)}>Plus</button>
      </div>
    );
  }
}

export default Counter;
