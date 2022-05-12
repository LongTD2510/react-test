import React, { Component } from "react";
import Author from "./Author";
class StageAndProp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            index: 1
        }
    }
    handlChangeName = (name) => {
        this.setState({name});
    }
    countDown(){
        this.setState({
            index: this.state.index + 1
        })
    }
    countUp(){
        this.setState((prevStage, props) => {
            return {
                index :this.state.index - 1
            }
        })
    }
    render() { 
        return (
            <div>
                <p>Your name: {this.state.name}</p>
                <Author name={this.state.name} handlChangeName={this.handlChangeName} />
                <hr></hr>
                <p>Giá trị: {this.state.index}</p>
                <button onClick={()=>this.countDown()}>Count Down</button>
                <button onClick={()=>this.countUp()}>Count Up</button>
            </div>
        );
    }
}
 
export default StageAndProp;
