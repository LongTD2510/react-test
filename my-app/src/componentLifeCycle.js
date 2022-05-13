import React, { Component } from "react";
import './index.css';
class ComponentLifeCycle extends Component {
  //Khởi tạo prop and state
  constructor(props) {
    super(props);
    this.state = {
      title: "Test API",
      date: new Date(),
      clickedStatus: false,
      list: [],
    };
  }
  // Mounting - Thực hiện Dom hiển thị lên trình duyệt
  // Có 3 phương thức : componentWillMount, Render, componentDidMount
  // componentWillMount : Thực hiện trc khi render
  // componentDidMount : render thành công -  Nơi thực hiện ajax
  componentWillMount() {
    console.log("ComponentWillMount run");
  }

  componentDidMount() {
    console.log("ComponentDidMount Run");
    this.getList();
  }

  getList = () => {
    //Api
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => this.setState({ list: json }));
  };
  shouldComponentUpdate(nextProp, nextState) {
    return this.state.list !== nextState.list;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component will update!');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update!');
  }
  // Updatting : Nơi render lại component
  // Có 4 phương thức : componentWillReceiveProp(), shouldComponentUpdate(), componentWillUpdate(), componentDidUpdate()
  // componentWillReceiveProp() :  Chạy khi component con nhận props từ component cha -> Sau khi nhận có thể set lại stage
  // shouldComponentUpdate(): Tăng hiệu năng của React -> return false sẽ stop
  // componentWillUpdate(): Giống componentWillMount() thực hiện trức khi renden
  // componentDidUpdate(): Sau khi re-render -> run animation (update UI)

  // Unmount: Kết thưc 1 vòng đời - khi tất cả hoàn thành và tiến hành unmount DOM
  // Có 1 phương thức: componentWillUnmount()
  // componentWillUnmount(): Được call khi render ra k có component hoặc redirect
  componentWillUnmount() {
    console.log('Component will unmount')
  }
  state = {};
  render() {
    console.log("render is run");
    return (
      <div>
        <p>Mounting Method</p>
        <h1>List item API</h1>
        <div className="contain">
          <div className="list__content">
            {this.state.list.map((item, index) => (
              <div className= "item" key = {index} >
                <div scope="row">{item.id}</div>
                <div>{item.title}</div>
                <div>{item.price}</div>
                <div>{item.category}</div>
                <div>{item.description}</div>
                <div>{item.image}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ComponentLifeCycle;
