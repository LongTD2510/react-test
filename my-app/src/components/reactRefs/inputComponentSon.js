import React from "react";

const InputComponentSon =  React.forwardRef((props, ref) => {
    return (<input name={props.name} ref={ref} />);
  });
export default InputComponentSon;
