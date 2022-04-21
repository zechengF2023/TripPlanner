import "../css/ResultFlowDiagram.css"
const ResultFlowDiagram=(props)=>{
    // Wikipedia link to be implemented
    const HotelBox=(hotelData, isStart)=>{
        return(
            <div className="hotelBox">
                <img src={hotelData.image}/>
                {isStart&&<text className="line"> Start from <a href={hotelData.link}> {hotelData.name}</a></text>}
                {!isStart&&<text className="line"> End at <a href={hotelData.link}> {hotelData.name}</a></text>}
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
        result.push(HotelBox(props.hotelData, true))
        for(let i=0;i<props.actiData.length;i++){
            result.push(TransBox(props.timeData[i]))
            result.push(ActiBox(props.actiData[i]))
        }
        result.push(TransBox(props.timeData[props.timeData.length-1]))
        result.push(HotelBox(props.hotelData, false));
        return result;
    }
    return(
        <div className="resultDiagram">
            <RenderDiagram hotelData={props.hotelData} actiData={props.actiData} timeData={props.timeData}></RenderDiagram>
        </div>
    )
}
export default ResultFlowDiagram