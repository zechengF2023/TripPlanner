import React, {useMemo} from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import savedTrips from "../components/savedTripsData.json"
import TripListing from "../components/TripListing"
import "../css/Profile.css"

const Profile=()=> {
    const trips = useMemo(() => {
        if (!savedTrips){
            return [];
        } else {
            return savedTrips;
        }
    }, []);
    
    return (
        <div>
            <Header/>
            <div className="secondaryContainer">
                <p>Welcome, [placeholder]!</p>
                <a href="/settings" className="linkToSettings">Settings</a>
            </div>
            <h2 className="subtitle">Your saved trips:</h2>
            <div className="tripHolder">
                {trips.map((trip, i) =>
                    <TripListing trip={trip} key={i}/>
                )}
            </div>
            <Footer/>
        </div>
    )
}
export default Profile