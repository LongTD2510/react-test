import React, { Component } from "react";
import USDtoVND from "./usdToVnd";
import VNDtoUSD from "./vndToUsd";
class Caculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vnd: 0,
      usd: 0,
    };
  }
  state = {};
  handleChange = (data) => {
    this.setState(data);
  };
  render() {
    return (
      <div>
        <USDtoVND onHandleChange={this.handleChange} value={this.state.usd} />
        <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd} />
        <hr></hr>
        <code>Cha con</code>
      </div>
    );
  }
}

export default Caculator;
