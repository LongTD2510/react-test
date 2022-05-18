import React, { Component } from "react";
class ComponentChau extends Component {
  render() {
    return (
      <div>
        <h1>Ông bảo là : "{this.context}"</h1>
      </div>
    );
  }
}

export default ComponentChau;
