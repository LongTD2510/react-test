import React, { Component } from "react";
class Welcome extends Component {
    render() {
        console.log(this.props);
        return (
            <div> 
                <h1>Đây là props { this.props.name }</h1>
            </div>
        );
    }
}

export default Welcome;