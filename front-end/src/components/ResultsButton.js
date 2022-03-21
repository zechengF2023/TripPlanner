import "../css/Button.css"
import React from "react"
import { useNavigate } from "react-router-dom";

/*
function changeQuery(e) {
    e.preventDefault(); 
}
*/

const ResultsButton =()=>{
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/results`; 
        navigate(path);
    }
    return (
        <button className="button" type="submit" onClick={routeChange}>Back to Results</button>
    )
}

export default ResultsButton