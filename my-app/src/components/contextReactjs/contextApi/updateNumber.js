import React, { Component } from "react";

export default class UpdateNumber extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            //Call update function
            console.log(this.context.update());
          }}
        >
          Update Number
        </button>
      </div>
    );
  }
}
