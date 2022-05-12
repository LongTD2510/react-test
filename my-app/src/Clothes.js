import React from "react";
const Clothes = (props) => {
    console.log(props);
    return (
        <div className="test">
            <h1>{props.children}</h1>
            <ul>
                <li><b>Name:</b> { props.name}</li>
                <li><b>Category:</b> { props.type}</li>
                <li><b>Color:</b> { props.color}</li>
                <li><b>Size:</b> { props.size}</li>
            </ul>
            <hr></hr>
        </div>
    )
}
export default Clothes;