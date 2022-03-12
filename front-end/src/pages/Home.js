import "../css/Home.css"
import React, {useMemo}  from "react"
import Search from "../components/SearchBar"
import RecommendationActivity from "../components/RecommendationActivity"
import RecommendationDestination from "../components/RecommendationDestination"
import Header from "../components/Header"
import recData from '../components/recommendationData.json'
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
    }, [])

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
    }, [])

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