import { Component } from "react";

class WrappedComponent extends Component {
  render() {
    return (
      <div>
        <input type="text" name={this.props.name} ref={this.props.innerRef} />
      </div>
    );
  }
}
export default WrappedComponent;
