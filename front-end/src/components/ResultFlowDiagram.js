import "../css/ResultFlowDiagram.css"
const ResultFlowDiagram=(props)=>{
    // Wikipedia link to be implemented
    console.log("data accepted is: ")
    console.log(props.timeData)
    const HotelBox=(hotelData, isStart)=>{
        return(
            <div className="hotelBox">
                <img src={hotelData.image}/>
                {isStart&&<text> Start from <a href="https://en.wikipedia.org/wiki/"> {hotelData.location}</a></text>}
                {!isStart&&<text> End at <a href="https://en.wikipedia.org/wiki/"> {hotelData.location}</a></text>}
            </div>
        )
    }
    const ActiBox=(actiData)=>{
        return(
            <div className="actiBox">
                <img src={actiData.image}/>
                <div className="actiText">
                <text className="line1">
                Arrive at:<a href="https://en.wikipedia.org/wiki/"> {actiData.location}</a>
                </text>
                <text className="line2">Recommended time: {actiData.stay} min</text>
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
        result.push(HotelBox(props.hotelData[0], true))
        for(let i=0;i<props.actiData.length;i++){
            result.push(TransBox(props.timeData[i]))
            result.push(ActiBox(props.actiData[i]))
        }
        result.push(TransBox(props.timeData[props.timeData.length-1]))
        result.push(HotelBox(props.hotelData[0], false));
        return result;
    }
    return(
        <div className="resultDiagram">
            <RenderDiagram hotelData={props.hotelData} actiData={props.actiData} timeData={props.timeData}></RenderDiagram>
        </div>
    )
}
export default ResultFlowDiagram