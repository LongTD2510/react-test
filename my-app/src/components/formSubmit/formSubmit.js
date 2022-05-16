import React, { Component } from "react";
class FormSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      msg: {},
    };
  }
  changeInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitForm(event) {
    event.preventDefault();
    const validation = this.validationForm();

    if (validation) {
      console.log(validation);
      console.log(this.state);
    } else {
      alert("Success");
    }
  }
  validationForm() {
    const { userName, password } = this.state;
    const re = /^\S*$/;
    const msg = {};
    let isValid = true;
    if (!re.test(userName)) {
      isValid = false;
      msg["username"] = "Check again !";
    }
    if (password.length < 6) {
      isValid = false;
      msg["password"] = "Please add at least 6 character.";
    }
    this.setState({
      msg: msg,
    });
    return isValid;
  }
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Form reatjs</h1>
        <form onSubmit={(e) => this.submitForm(e)}>
          <div className="form-group">
            <label htmlFor="text">User Name: {this.state.userName}</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              placeholder="Enter user name..."
              onChange={(e) => this.changeInputValue(e)}
            />
            <div className="text-danger">{this.state.msg.username}</div>
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
            <div className="text-danger">{this.state.msg.password}</div>
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
