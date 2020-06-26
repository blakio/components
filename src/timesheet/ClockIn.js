import React from "react";
import "./ClockIn.css";

import {
    Paper,
    Icon,
    TextWithSubText
} from "../components";;

const ClockIn = () => {
    return (<div>
        <Paper
            title="Clock In"
            color="blue"
        >
            <div className="paperContainer">
                <div className="clockInBox">
                    <Icon
                        isBtn
                        helpText="press"
                    />
                </div>
                <TextWithSubText
                    isInputField
                    textColor="blueText"
                    bigText="Your Name"
                    smallText="Your Position"
                />
            </div>
        </Paper>
    </div>)
}

export default ClockIn;