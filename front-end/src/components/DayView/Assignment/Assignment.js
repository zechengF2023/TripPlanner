//- what the day number is - props
 //- make a call to the backedn to get the activities for this day

 //- be able to edit what day the assignment should be  - make call to backend to update assignment/ordering
import React, { useState, useEffect } from "react"

 const Assignment = (props) => {
     const [dayNumber, setDayNumber] = useState(props.dayNumber)
     const [taskNumber, setTaskNumber] = useState()
     const [activity, setActivity] = useState()

     return (
         <form>
            <label>Edit Day: </label>
            <select value = {dayNumber} onChange = {(event) => setDayNumber(event.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            <label>Edit Task Number</label>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value = '3'>3</option>
            </select>
            Assignment {props.number}
         </form>
     )
 }

 export default Assignment;