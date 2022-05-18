import React from "react";
import WrappedComponent from "./wrappedComponet";

const MyInputProp = React.forwardRef((props, ref) => {
  return <WrappedComponent innerRef={ref} {...props} />;
});
export default MyInputProp;
