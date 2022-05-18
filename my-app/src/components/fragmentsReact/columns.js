import React, { Component } from "react";

export default class Columns extends Component {
  render() {
    return (
      //Cách 1
      // <React.Fragment>
      //   <td>Test fragment</td>
      //   <td>Test fragment</td>
      // </React.Fragment>
      // Cách 2
      <>
        <td>Test fragment</td>
        <td>Test fragment</td>
      </>
    );
  }
}
