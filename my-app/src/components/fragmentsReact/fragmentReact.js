import React, { Component } from "react";
import Columns from "./columns";
export default class FragmentReact extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    );
  }
}
