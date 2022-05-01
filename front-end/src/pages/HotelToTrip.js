import { useNavigate } from "react-router-dom";
import { useSearchParams, createSearchParams} from "react-router-dom";
import { useEffect, useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import "../css/HotelToTrip.css"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import {useLocation} from "react-router-dom"
const axios=require("axios")
const Buffer=require('buffer').Buffer;

const HotelToTrip=props=>{
    const [searchParams]=useSearchParams()
    const {state}=useLocation()
    const duration=parseInt(searchParams.get("duration"))
    const destination=searchParams.get("destination")
    const [activityData, setActivityData]=useState();
    const [day, setDay]=useState(1)
    const [dataEachDay, setDataEachDay]=useState(()=>{
        const tmp=[]
        for(let i=0;i<duration;i++){
            tmp.push([])
        }
        return tmp
    })
    let navigate = useNavigate(); 
    const autoFill=()=>{
        clear()
        let resultList=[]
        for(let i=0;i<duration;i++){
            resultList.push([])
        }
        let counter=0
        while(counter<activityData.length){
            for(let i=0;i<duration;i++){
                if(counter<activityData.length && resultList[i].length<3){
                    resultList[i].push(activityData[counter])
                    activityData[counter].isChosen=true
                    counter++
                }
                else{
                    counter++
                    break;
                }
            }
        }
        return setDataEachDay(resultList);  
    }

    const DayIcons=()=>{
        const iconList=[]
        for(let i=1;i<duration+1;i++){
            iconList.push(<button id={i} style={{height: "5vh", width:"5vw", border: "solid",fontSize:"1.8vh", fontWeight:"bold"}} onClick={()=>{setDay(i)}}>day{i}</button>)
                // if (iconList.length==duration){
        }
        return iconList
    }
    
    //for clear button
    const clear=()=>{
        const tmp=[]
        for(let i=0;i<duration;i++){
            tmp.push([])
        }
        setDataEachDay(tmp)
        activityData.forEach(item=>{
            item.isChosen=false
        })
    }

    const addActi=(item)=>{
        item.isChosen=true
        const newData=[]
        dataEachDay.forEach(subList=>{
            newData.push(subList)
        })
        newData[day-1].push(item)
        setDataEachDay(newData)
    }

    const deleteActi=(item)=>{
        console.log(item.isChosen)
        item.isChosen=false
        const newDataEachDay=[]
        dataEachDay.forEach((subList, idx)=>{
            if(idx!=day-1){
                newDataEachDay.push(subList)
            }
            else{
                const newDay=[]
                dataEachDay[day-1].forEach(acti=>{
                    if(!(acti.name===item.name)){
                        newDay.push(acti)
                    }
                })
                newDataEachDay.push(newDay)
            }
        })
        setDataEachDay(newDataEachDay)
    }

    const generateTrip=()=>{
        for(let i=0;i<duration;i++){
            if(dataEachDay[i].length===0){
                alert("Please assgin at least one activity to each day")
                return
            }
        }
        const params={hotel: searchParams.get("hotel"),destination: searchParams.get("destination"), duration: searchParams.get("duration"), startDate: searchParams.get("startDate"), endDate: searchParams.get("endDate")}
        navigate({pathname:"/trip", search:`?${createSearchParams(params)}`}, {state:{actiData: dataEachDay}})
    }

    useEffect(()=>{(async()=>{
        const activitiesReceived=await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/getDestinationActivities`,{destination})
        const activities=activitiesReceived.data
        activities.forEach(item => {
            item.isChosen=false
            item.image="data:image/jpeg;base64,".concat(Buffer.from(item.image.data).toString("base64"))
        })
        if(state!=null){
            setDataEachDay(state.dataEachDay)
            state.dataEachDay.forEach(subList=>{
                subList.forEach(item=>{
                    item.isChosen=true
                    for(let i=0;i<activities.length;i++){
                        if(activities[i].name===item.name){
                            activities[i]=item
                            activities[i].isChosen=true
                        }
                    }
                })
            })
        }
        setActivityData(activities)
        })()
    },[])
    return(
        <div>
        <Header/>
        <div className="viewDiv">
        <h1>Customize Your Trip!</h1>
        <div className="contentDiv">
            <div className="leftContent">
                <div className="daysAndClearBtn">
                <div className="dayIcons">
                    {DayIcons()}
                </div>
                <button className="clearBtn" style={{height: "5vh", width:"5vw", border: "solid", fontSize:"1.8vh", fontWeight:"bold"}} onClick={()=>clear()}>Reset</button>
                <button className="autoFillBtn" style={{height: "5vh", width:"5vw", border: "solid", fontSize:"1.8vh", fontWeight:"bold"}} onClick={()=>autoFill()}>Autofill</button>
                </div>
                <div className="actiChosenDiv">
                    {dataEachDay[day-1].length===0 && <p style={{fontWeight:"bold",marginTop:0}}>Please choose activity for day{day}</p>}
                    {dataEachDay[day-1].map(item=>
                        <div className="actiChosen">
                            <img src={item.image} alt={"pic"}></img>
                            <p className="actiContent">{item.name}</p>
                            <div className="actiDeleteBtn">
                                <HighlightOffIcon style={{fontSize:"3vw"}} onClick={()=>deleteActi(item)}></HighlightOffIcon>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="rightContent">
                <h2> Activities available: </h2>
                <div className="actiDiv">
                    {activityData!=null && activityData.map(item=>
                        !item.isChosen && <div className="actiToChoose">
                            <img src={item.image} alt="pic"></img>
                            <p className="actiContent">{item.name}</p>
                            <div className="actiAddBtn">
                                <AddCircleOutlineIcon style={{fontSize:"3vw"}} onClick={()=>addActi(item)}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <button onClick={()=>generateTrip()} className="continueBtn">Generate My Trip</button>
        </div>
        <Footer/>
        </div>
    )
}

export default HotelToTrip