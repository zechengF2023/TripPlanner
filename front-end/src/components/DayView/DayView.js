import React from "react"

import Assignment from "./Assignment/Assignment"
import { Task } from "./Assignment/Task"

export default function DayView(props) {
    function handleAssignments() {
        var assignments = []
        for (var i = 0; i < 3; ++i) {
            assignments.push(<Assignment number = {i+1} dayNumber = {props.dayNumber} />)
        }
        return assignments
    }

    return (
        <React.Fragment>
            {/*handleAssignments()*/}
            <Task dayNumber = {props.dayNumber}/>
 
        </React.Fragment>
    )
}