import React, { Component } from "react";
const Notification = (props) => {
  if (props.isShowTab1 || props.isShowTab2 || props.isShowTab3) {
    // Trả về jsx để hiển thị
    return (
      <ul>
        <li>Thông báo 1</li>
        <li>Thông báo 2</li>
        <li>Thông báo 3</li>
        <li>Thông báo 4</li>
      </ul>
    );
  } else {
    // Trả về null
    return null;
  }
};
class RenderWithCondition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowNotificationTab1: false,
      isShowNotificationTab2: false,
      isShowNotificationTab3: false,
    };
  }
  state = {};
  render() {
    // const isLogin = true;
    const { isShowNotificationTab1, isShowNotificationTab2, isShowNotificationTab3 } = this.state;
    // if (!isLogin) {
    //   var notification = <h3>Check render with condition</h3>;
    // } else {
    //     notification = <h3>Check render with condition !!</h3>;
    // }
    // Conditional operator
    //   const notification = (isLogin)? <h3>Check render with condition operator</h3> : <h3>Check render with condition !!</h3>;
    return (
        <div style={{ margin: 20}}>
        {/* {isLogin ? (
          <h3>Check render with condition jsx</h3>
        ) : (
          <h3>Check render with condition !!</h3>
        )} */}
        <h1>No component render</h1>
        <div className="flex__tab">
          <button
            className="btn btn-primary item__button"
            onClick={() => {
              //Update again state
              this.setState({
                isShowNotificationTab1: !isShowNotificationTab1,
              });
            }}
          >
            {isShowNotificationTab1 ? "Show" : "Hidden"}
          </button>
          <button
            className="btn btn-primary item__button"
            onClick={() => {
              //Update again state
              this.setState({
                isShowNotificationTab2: !isShowNotificationTab2,
              });
            }}
          >
            {isShowNotificationTab2 ? "Show" : "Hidden"}
          </button>
          <button
            className="btn btn-primary item__button"
            onClick={() => {
              //Update again state
              this.setState({
                isShowNotificationTab3: !isShowNotificationTab3,
              });
            }}
          >
            {isShowNotificationTab3 ? "Show" : "Hidden"}
          </button>
        </div>

        {/* Call component Notification */}
        <Notification isShowTab1={isShowNotificationTab1} />
        <Notification isShowTab2={isShowNotificationTab2} />
        <Notification isShowTab3={isShowNotificationTab3} />
      </div>
    );
  }
}

export default RenderWithCondition;
