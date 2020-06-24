import React from "react";
import "./main.css";

const HeaderStrip = props => {
    return (<div className={`headerStrip ${props.color}`}>
        <p>{props.title}</p>
    </div>);
}

export default HeaderStrip;