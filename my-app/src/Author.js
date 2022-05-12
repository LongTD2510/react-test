import React from "react";
function Author(props) {
    return (
        <div>
            <input placeholder="Enter your name" defaultValue={props.name} onChange={(e) => props.handlChangeName(e.target.value)}></input>
        </div>
    )
}
export default Author;