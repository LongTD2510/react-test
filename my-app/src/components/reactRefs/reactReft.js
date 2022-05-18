import React, { Component } from "react";
import InputComponentSon from "./inputComponentSon";
import WrappedComponent from "./wrappedComponet";

class ReactReft extends Component {
  constructor(props) {
    super(props);
    // Khởi tạo 1 Reft
    this.myReft = React.createRef();
  }
  state = {};
  handleChange = () => {
    this.myReft.current.focus();
  };
  render() {
    return (
      <div>
        <h1>Refs Trong React</h1>
        <input
          name="email"
          onChange={this.onChange}
          ref={this.myReft}
          type="text"
        />
        <button
          onClick={this.handleChange}
          type="button"
          className="btn-primary btn"
        >
          Forcus Input
        </button>
        <hr></hr>
        <InputComponentSon name="email" ref={this.myReft} />
        <button
          onClick={this.handleChange}
          type="button"
          className="btn-primary btn"
        >
          Forcus Input
        </button>
        <hr />
        <code>React ForwardRef Prop</code>
            <WrappedComponent />
            <button
          onClick={this.handleChange}
          type="button"
          className="btn-primary btn"
        >
          Forcus Input
        </button>
      </div>
    );
  }
}

export default ReactReft;
