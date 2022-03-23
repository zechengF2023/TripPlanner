import "../css/SpecificResult.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ResultMap from "../components/ResultMap"
import Modal from "../components/SaveModal"
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import MapIcon from '@mui/icons-material/Map';

import { useState } from "react"

const SpecificResult=props=>{
    /*data*/
    let days=2
    let destination="xxxx"
    let destinationData=[{"location": "NYU", "lat": 40.729603794934015,"lng":-73.99646407872974},{"location": "Washington Square", "lat": 40.73169582048705,"lng":-73.99712378852689}]

    const [showModal, setShow]=useState(false)
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
        setShow(true)
        document.body.style.overflow = 'hidden';
        console.log("save clicked!")
    }
    const closeModal=()=>{
        setShow(false)
        document.body.style.overflow="scroll";
    }

    const handleDayClick=num=>{
        setDisplay(num)
    }
    const displayContent=display=>{
        if (displayId<=days){
            return <p>This is day {displayId}!</p>
        }
        else if (displayId===days+1){
            return <ResultMap data={destinationData}></ResultMap>
        }
        else if (displayId===days+2){
            return <p>This is edit</p>
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
                {showModal && <Modal toClose={closeModal}/>} 
            </div>
            <Footer />
        </div>
    )
}

export default SpecificResult