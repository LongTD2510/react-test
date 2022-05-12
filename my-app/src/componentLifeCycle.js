import React, { Component } from "react";
class ComponentLifeCycle extends Component {
  //Khởi tạo prop and state
  constructor(props) {
    super(props);
    this.state = {
      title: "Test API"
    }
  }
  // Mounting - Thực hiện Dom hiển thị lên trình duyệt
  // Có 3 phương thức : componentWillMount, Render, componentDidMount
  // componentWillMount : Thực hiện trc khi render
  // componentDidMount : render thành công - thực hiện ajax

  // Updatting : Nơi render lại component 
  // Có 3 
  state = {  }
  render() { 
    return (  );
  }
}
 
export default ComponentLifeCycle;