import "../css/Button.css"
import React from "react"
import { useNavigate } from "react-router-dom";

/*
function changeQuery(e) {
    e.preventDefault(); 
}
*/

const FilterButton =()=>{
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/filters`; 
        navigate(path);
    }
    return (
        //<div className="filterForm">
            <button className="button" type="submit" onClick={routeChange}>Filters</button>
        //</div>
    )
}

export default FilterButton