import React, { Component } from "react";
class FormSubmit extends Component {
  constructor(props) {
    super(props);
    this.stage = {
      userName: "",
      password: "",
    };
  }
  changeInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Form reatjs</h1>
        <form>
          <div className="form-group">
            <label htmlFor="text">User Name: {this.state.userName}</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              placeholder="Enter user name..."
              onChange={(e) => this.changeInputValue(e)}
            />
          </div>
          <div>
            <label htmlFor="pwd">Password: {this.state.password}</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter passwold..."
              onChange={(e) => this.changeInputValue(e)}
            />
          </div>
          <button type="submit" className="mt-3 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormSubmit;
