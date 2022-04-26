import "../css/ResultFlowDiagram.css"
import { useContext } from 'react';
import AppContext from '../AppContext';
const ResultFlowDiagram=(props)=>{
    // Wikipedia link to be implemented
    const HotelBox=(isStart)=>{
        return(
            <div className="hotelBox">
                <img src={props.hotel.image} alt="img"/>
                {isStart&&<text className="line"> Start from <a href={props.hotel.link}> {props.hotel.name}</a></text>}
                {!isStart&&<text className="line"> End at <a href={props.hotel.link}> {props.hotel.name}</a></text>}
            </div>
        )
    }
    const ActiBox=(actiData)=>{
        return(
            <div className="actiBox">
                <img src={actiData.image} alt="img"/>
                <div className="actiText">
                <text className="line">
                Arrive at:<a href={actiData.link}> {actiData.name}</a>
                </text>
                <text className="line">Recommended time: {actiData.stay} min</text>
                </div>
            </div>
        )
    }
    const TransBox=(time)=>{
        return(
            <div className="transBox">
                <div className="transLine"></div>
                <div className="transContent">{time}.</div>
            </div>
        )
    }
    const RenderDiagram=()=>{
        const result=[]
        result.push(HotelBox(true))
        for(let i=0;i<props.actiData.length;i++){
            result.push(TransBox(props.timeData[i]))
            result.push(ActiBox(props.actiData[i]))
        }
        result.push(TransBox(props.timeData[props.timeData.length-1]))
        result.push(HotelBox(false));
        return result;
    }
    return(
        <div className="resultDiagram">
            <RenderDiagram />
        </div>
    )
}
export default ResultFlowDiagram