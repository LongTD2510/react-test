import React, { Component } from "react";
import ShowNumber from "./showNumber";
import UpdateNumber from "./updateNumber";
const NumberContext = React.createContext();
class ContextApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  updateNumber = () => {
    this.setState({
      number: Math.random(),
    });
  };
  state = {};
  render() {
    return (
      <NumberContext.Provider
        value={{
          number: this.state.number,
          update: this.updateNumber.bind(this),
        }}
      >
        {" "}
            <NumberContext.Consumer>
            { () =>  (
              <div>
                <ShowNumber />
                <UpdateNumber />
              </div>
            )}
            </NumberContext.Consumer>
      </NumberContext.Provider>
    );
  }
}
ShowNumber.contextType = NumberContext;
UpdateNumber.contextType = NumberContext;
export default ContextApi;
