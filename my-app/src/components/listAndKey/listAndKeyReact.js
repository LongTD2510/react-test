import React, { Component } from "react";
class ListAndKeyReact extends Component {
    constructor(props) {
        super(props);
    }
    state = {}

    render() { 
        const todoList = [
            {
                'name' : 'php'
            },
            {
                'name' : 'java'
            },
            {
                'name' : 'reactjs'
            },
            {
                'name' : 'test'
            },
            {
                'name' : 'c++'
            },
        ]
        const listItems = todoList.map((item, index) => (
            <li key={index}>{item.name}</li>
        ));
        return (
            <ul>{listItems}</ul>
        );
    }
}
 
export default ListAndKeyReact;