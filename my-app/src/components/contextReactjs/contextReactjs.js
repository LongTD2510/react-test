import React, { Component } from "react";
import ComponentChau from "./componentChau";
const MessageContext = React.createContext();
export default class ContextReactjs extends Component {
  render() {
    ComponentChau.contextType = MessageContext;
    return (
      <div>
        <MessageContext.Provider value="Context with reacjs">
          <ComponentChau />
        </MessageContext.Provider>
      </div>
    );
  }
}
