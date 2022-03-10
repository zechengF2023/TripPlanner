import "../css/Home.css"
import React, {useEffect, useState, useMemo}  from "react"
import Search from "../components/SearchBar"
import {Link, useParams} from "react-router-dom"
import RecommendationActivity from "../components/RecommendationActivity"
import RecommendationDestination from "../components/RecommendationDestination"
import logo from "../assets/Logo.png"
import ProfileIcon from "../assets/ProfileWhite.png"
import recData from '../components/recommendationData.json'; 
import Footer from "../components/Footer"

const Home=()=>{

    // const [article, setArticle ] = useState({}); 
    // let {id} = useParams(); 

    // useEffect(() => {
    //     const dataToSet = recData.find((item) => item.id === id && item.type == "activity");
    //     setArticle(dataToSet); 
    // }, [id]); 

    const activityResults = useMemo(() => {
        if (!recData) return [];
        else {
            let activities = []; 
            for (var i=0; i<recData.length; i++){
                if(recData[i].type === "activity"){
                    activities.push(recData[i]); 
                }
            }
            return activities 
        }
    }, [recData])

    const destinationResults = useMemo(() => {
        if (!recData) return [];
        else {
            let destinations = []; 
            for (var i=0; i<recData.length; i++){
                if(recData[i].type === "destination"){
                    destinations.push(recData[i]); 
                }
            }
            return destinations
        }
    }, [recData])

    return (
        <div>
            <div className="imageSearch">
                <div className="homepageHeader">
                    <Link to="/">
                        <img class="headerImage" alt="Logo" src={logo} />  
                    </Link>  
                    <Link to="/myTrips">
                        <h1 className="tripsLink">
                            Trips
                        </h1>
                    </Link>
                    <a href="/profile"><img id="profileIcon" alt="profileIcon" src={ProfileIcon} /></a>
                </div>
                <div className="search">
                    <Search/>
                </div>
                
            </div>
            <h1 className="recTitle">
                    Recommended Activities
            </h1>
            <div className="recommendation">
                    {activityResults.map((recommendation, i) =>
                        <RecommendationActivity recommendation={recommendation} key={i}/>
                    )}
            </div>
            <h1 className="recTitle">
                    Recommended Destinations
            </h1>
            <div className="recommendation">
                {destinationResults.map((destination, i) =>
                        <RecommendationDestination destination={destination} key={i}/>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Home