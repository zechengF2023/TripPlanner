//Button - be given props - what specific day it s
//- handle if clicked - show the assignment (pass in the day props)

import React, {useState} from "react"

export default function Day(props) {
    //const [dayNumber, setDayNumber] = useState(props.dayNumber);

    return(
        <React.Fragment>
            <button className = "dayIcon" onClick = {() => props.setDayNumber(props.dayNumber)}>
                Day {props.dayNumber}
            </button>
        </React.Fragment>
    )
}