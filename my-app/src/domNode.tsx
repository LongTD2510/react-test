import React, { Component } from "react";
import ReactDom from "react-dom";

type Props = {};

type State = {};

export default class DomNode extends Component<Props, State> {
  changeColor() {
    const title = document.getElementById("title");
    ReactDom.findDOMNode(title)['style'].color = "red";
  }
  state = {};

  render() {
    return (
      <div id="title">
        <h1>Change color text with domReact</h1>
        <button onClick={() => this.changeColor()}>Change Color</button>
      </div>
    );
  }
}
