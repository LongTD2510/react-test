import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Error extends Component {
  render() {
    return (
        <div>
            <h1>404 - Error Page</h1>
            <Link to="/">Home Page</Link>
      </div>
    )
  }
}
