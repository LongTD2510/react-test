import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Shop extends Component {
  render() {
    return (
      <div>
        <h1>Shop Page</h1>
        <Link to="/">Home Page</Link>
      </div>
    );
  }
}
