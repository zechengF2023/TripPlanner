import "../css/ActivityTop5.css"
const ActivityTop5=(props)=>{
    const activity=props.activity
    return(
        <div className="activityBox">
            <img src={activity.image} alt="img" className="img"/>
            <div className="link">
            <a href={activity.link}>
                <p>{activity.name}</p>
            </a>
            </div>
        </div>
    )
}
export default ActivityTop5;