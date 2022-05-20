import React, { Component, useContext } from "react";
const CounterContext = React.createContext();
const Counter = () => {
    const counter = useContext(CounterContext);
    return (
        <div>
            <h1>{counter.count}</h1>
            <button className="btn btn-primary" onClick={() => {
                counter.countUp();
            }}>
                Up
            </button>
            <button className="btn btn-primary" onClick={() => {
                counter.countDown();
            }}>
                Down
            </button>
        </div>
    )
}
class UseContextReactjs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  countDown() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  state = {};
  render() {
    return (
      <CounterContext.Provider
        value={{
          count: this.state.count,
          countUp: this.countUp.bind(this),
          countDown: this.countDown.bind(this),
        }}
      >
        <Counter />
      </CounterContext.Provider>
    );
  }
}

export default UseContextReactjs;
