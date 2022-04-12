import "../css/Home.css"
import React, {useState, useEffect}  from "react"
import Search from "../components/SearchBar"
import RecommendationActivity from "../components/RecommendationActivity"
import RecommendationDestination from "../components/RecommendationDestination"
import Header from "../components/Header"
// import recData from '../components/recommendationData.json'
import Footer from "../components/Footer"

const axios=require("axios")

const Home=()=>{
    // state variables
    const [activityData, setActivityData] = useState([]);
    const[destData, setDestData] = useState([]);

    const fetchData = async() => {
        try{
            const tempData = await axios.get("http://localhost:3000/home-getInitData")
            console.log(tempData.data)
            tempData.data.forEach((item)=>{
                if (item.type==="activity"){
                    setActivityData((activityData)=>[...activityData,item])
                }
            })
            tempData.data.forEach((item)=>{
                if (item.type==="destination"){
                    setDestData((destData)=>[...destData,item])
                }
            })
        }
        catch(error) {
            console.log(error);
        }
    }

    // run this once!
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div>
            <div className="imageSearch">
                <Header/>
                <div className="search">
                    <Search/>
                </div>
            </div>
            <h1 className="recTitle">
                    Recommended Activities
            </h1>
            <div className="recommendation">
                    {activityData.map((recommendation, i) =>
                        <RecommendationActivity recommendation={recommendation} key={i}/>
                    )}                   
            </div>
            <h1 className="recTitle">
                    Recommended Destinations
            </h1>
            <div className="recommendation">
                {destData.map((destination, i) =>
                    <RecommendationDestination destination={destination} key={i}/>  
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Home



