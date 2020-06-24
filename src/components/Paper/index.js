import React from "react";
import "./main.css";

import {
    HeaderStrip
} from "../index";
import PaperFold from "../PaperFold";

const Panel = props => {
    return (<div id="panel">
        {props.title && <HeaderStrip
            title={props.title}
            color={props.color}
        />}
        {props.children}
        <PaperFold />
    </div>);
}

export default Panel;