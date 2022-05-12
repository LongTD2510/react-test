import React, { Component } from "react";

type Props = {};

type State = {};

export default class ForceUpdate extends Component<Props, State> {
  state = {
    name: "All product",
    product: ["car", "bike", "dock"],
  };
  Refresh = () => {
    this.forceUpdate();
  };
  render() {
    const rd: number = Math.random();
    return (
      <div>
        <h1>This is ForceUpdate method</h1>
        {this.state.product.map((item, index) => (
          <ul key={index}>
            <li>
              <div>
                {item} {rd}
              </div>
            </li>
          </ul>
        ))}
        <input type="button" value="Click" onClick={this.Refresh} />
      </div>
    );
  }
}
