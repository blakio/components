import React from "react";
import "./main.css";

const TextWithSubText = props => {
    return (<div>
        {
            props.isInputField &&
            <input
                className={`bigTextInput ${props.textColor}`}
                placeholder={props.bigText}
            /> || <p className="bigText">{props.bigText}</p>
        }
        <p className="smallText">{props.smallText}</p>
    </div>);
}

export default TextWithSubText;