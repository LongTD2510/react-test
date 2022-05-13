import React, { Component } from "react";
class HandleEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'textarea': "",
            'mouseOver': "",
            'buttonClick': ""
        };
        // this.mouseOver = this.mouseOver.bind(this);
    }
    changeText(e) {
        this.setState({
            textarea: e.target.value
        });
    }
    changeMouse(e) {
        this.setState({
            mouseOver: this.state.mouseOver + "mouseOver...."
        });
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Handling Event</h1>
                <button onClick={() => {
                    this.setState({
                        buttonClick: this.state.buttonClick + "buttonClick...."
                    })
                }}>Click me!</button>{""}
                <p>button : <code>{this.state.buttonClick}</code></p>
                <hr></hr>
                <textarea cols="30" rows="10" onChange={(e)=>this.changeText(e)}></textarea>
                <p>textarea : <code>{this.state.textarea}</code></p>
                <hr></hr>
                <h6 onMouseOver={(e)=>this.changeMouse(e)}>Di chuột</h6>
                <p>mouseOver: <code>{this.state.mouseOver}</code></p>
            </div>
         );
    }
}
 
export default HandleEvent;