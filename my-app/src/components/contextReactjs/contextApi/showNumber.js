import React, { Component } from "react";

export default class ShowNumber extends Component {
  render() {
    return (
      <div>
            <p>{ this.context.number}</p>
      </div>
    );
  }
}

