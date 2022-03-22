import "../css/SpecificResult.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ResultMap from "../components/ResultMap"
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import MapIcon from '@mui/icons-material/Map';
import { useState } from "react"

const SpecificResult=props=>{
    let days=2
    let destination="xxxx"
    const renderDays=(days)=>{
        let dayList=[]
        for (let i=1;i<days+1;i++){
            dayList.push(<button className="dayIcon" key={i} onClick={()=>handleDayClick(i)}>Day{i}</button>)
        }
        return dayList
    }
    const [displayId, setDisplay]=useState(1);
    const handleMapClick=()=>{
        setDisplay(days+1)
        console.log("map clicked!")
    }
    const handleEditClick=()=>{
        setDisplay(days+2)
        console.log("edit clicked!")
    }
    const handleSaveClick=()=>{
        setDisplay(days+3)
        console.log("save clicked!")
    }
    const handleDayClick=num=>{
        setDisplay(num)
    }
    const displayContent=display=>{
        if (displayId<=days){
            return <p>This is day {displayId}!</p>
        }
        else if (displayId===days+1){
            return <ResultMap></ResultMap>
        }
        else if (displayId===days+2){
            return <p>This is edit</p>
        }
        else if (displayId===days+3){
            return <p>This is save</p>
        }
    }
    return(
        <div>
            <Header />
            <div className="template">
                <h1>Trip to {destination} </h1>
                <div className="subHeader">
                    <div className="dayIcons">
                        {renderDays(days)}
                    </div>
                    <div className="Icons">
                        <MapIcon className="Icon"  sx={{ fontSize: 40}} onClick={handleMapClick} />
                        <EditIcon className="Icon" sx={{ fontSize: 40}} onClick={handleEditClick}/>
                        <SaveIcon className="Icon" sx={{ fontSize: 40}} onClick={handleSaveClick}/>
                    </div>
                </div>
                {displayContent(displayId)}
            </div>
            <Footer />
        </div>
    )
}

export default SpecificResult