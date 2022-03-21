import "../css/Filters.css"
import React, {useState} from "react"
//import { IconCheckbox } from "react-icon-checkbox";
import { prices, ratings, properties, amenities } from "../components/FiltersList.js";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import ResultsButton from "../components/ResultsButton.js"

const Filters = () => {
    const [priceState, setPriceState] = useState(new Array(prices.length).fill(false))
    const [ratingState, setRatingState] = useState(new Array(ratings.length).fill(false))
    const [propertyState, setPropertyState] = useState(new Array(ratings.length).fill(false))
    const [amenityState, setAmenityState] = useState(new Array(ratings.length).fill(false))

    const handlePriceOnChange = (position) => {
        const updatedPriceState = priceState.map((price, index) => index === position ? !price: price)
        setPriceState(updatedPriceState)
    }
    const handleRatingOnChange = (position) => {
        const updatedRatingState = ratingState.map((rating, index) => index === position ? !rating: rating)
        setRatingState(updatedRatingState)
    }

    const handlePropertyOnChange = (position) => {
        const updatedPropertyState = propertyState.map((property, index) => index === position ? !property: property)
        setPropertyState(updatedPropertyState)
    }
    const handleAmenityOnChange = (position) => {
        const updatedAmenityState = amenityState.map((amenity, index) => index === position ? !amenity: amenity)
        setAmenityState(updatedAmenityState)
    }

    return(
        <div>
            <Header />
            <h2>Filter by:</h2>
            <ul className="pricesList">
                <h3 className="filterTitle">Price:</h3>
                <div className="filterList">
                    {prices.map(({ name }, index) => {
                        return (
                            <li key={index}>
                                <div className="filterItem">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={priceState[index]}
                                        onChange={() => handlePriceOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                            </li>
                        )
                    })}
                </div>
            </ul>
            <ul className="ratingsList">
                <h3 className="filterTitle">Rating:</h3>
                <div className="filterList">
                    {ratings.map(({ name }, index) => {
                        return (
                            <li key={index}>
                                <div className="filterItem">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={ratingState[index]}
                                        onChange={() => handleRatingOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                            </li>
                        )
                    })}
                </div>
            </ul>
            <ul className="propertiesList">
                <h3 className="filterTitle">Property Type:</h3>
                <div className="filterList">
                    {properties.map(({ name }, index) => {
                        return (
                            <li key={index}>
                                <div className="filterItem">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={propertyState[index]}
                                        onChange={() => handlePropertyOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                            </li>
                        )
                    })}
                </div>
            </ul>
            <ul className="amenitiesList">
                <h3 className="filterTitle">Amenities:</h3>
                <div className="filterList">
                    {amenities.map(({ name }, index) => {
                        return (
                            <li key={index}>
                                <div className="filterItem">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={amenityState[index]}
                                        onChange={() => handleAmenityOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                            </li>
                        )
                    })}
                </div>
            </ul>
            <div className="btn">
                <ResultsButton />
            </div>
            <Footer />
        </div>

    )
}

export default Filters



/*
>>>>>>> 7a5820851bfd97647e9c906593cbe2b102bd5da2
const Filters = () => {
    return(
        <div>
            <Header />
            <h2>Filter by:</h2>
            <div className="filterList">
                <div className="pricesList">
                    <h3 className="filterTitle">Price:</h3>
                    <div className="filterItem">
                        <label><input type="checkbox" id="price" name="less than $100" value="less than $100"/> Less than $100</label>
                        <label><input type="checkbox" id="price" name="$100-$200" value="$100-$200"/> $100-$200</label>
                        <label><input type="checkbox" id="price" name="$200-$300" value="$200-$300"/> $200-$300</label>
                        <label><input type="checkbox" id="price" name="$300+" value="$300+"/> $300+</label>
                    </div>
                </div>
                <div className="ratingsList">
                    <h3 className="filterTitle">Rating:</h3>
                    <div className="filterItem">
                        <label><input type="checkbox" id="rating" name="1 star" value="1 star"/> 1 star</label>
                        <label><input type="checkbox" id="rating" name="2 stars" value="2 stars"/>2 stars</label>
                        <label><input type="checkbox" id="rating" name="3 stars" value="3 stars"/> 3 stars</label>
                        <label><input type="checkbox" id="rating" name="4 stars" value="4 stars"/> 4 stars</label>
                        <label><input type="checkbox" id="rating" name="5 stars" value="5 stars"/> 5 stars</label>
                    </div>
                </div>
                <div className="propertiesList">
                    <h3 className="filterTitle">Property Type:</h3>
                    <div className="filterItem">
                        <label><input type="checkbox" id="property" name="hotel" value="hotel"/> Hotel</label>
                        <label><input type="checkbox" id="property" name="resort" value="resort"/> Resort</label>
                        <label><input type="checkbox" id="property" name="apartment" value="apartment"/> Apartment</label>
                        <label><input type="checkbox" id="property" name="hostel" value="hostel"/> Hostel</label>
                        <label><input type="checkbox" id="property" name="bed and breakfast" value="bed and breakfast"/> Bed and Breakfast</label>
                    </div>
                </div>
                <div className="amenitiesList">
                    <h3 className="filterTitle">Amenities:</h3>
                    <div className="filterItem">
                        <label><input type="checkbox" id="amenity" name="wifi" value="wifi"/> Free Wifi</label>
                        <label><input type="checkbox" id="amenity" name="parking" value="parking"/> Free Parking</label>
                        <label><input type="checkbox" id="amenity" name="gym" value="gym"/> Gym</label>
                        <label><input type="checkbox" id="amenity" name="laundry" value="laundry"/> Laundry</label>
                        <label><input type="checkbox" id="amenity" name="pool" value="pool"/> Pool</label>
                    </div>
                </div>
                <div className="neighborhoodList">
                    <h3 className="filterTitle">Neighborhood:</h3>
                    <div className="filterItem">
                        <label><input type="checkbox" id="neighborhood" name="neighborhood 1" value="neighborhood 1"/> Neighborhood 1</label>
                        <label><input type="checkbox" id="neighborhood" name="neighborhood 2" value="neighborhood 2"/> Neighborhood 2</label>
                        <label><input type="checkbox" id="neighborhood" name="neighborhood 3" value="neighborhood 3"/> Neighborhood 3</label>
                        <label><input type="checkbox" id="neighborhood" name="neighborhood 4" value="neighborhood 4"/> Neighborhood 4</label>
                        <label><input type="checkbox" id="neighborhood" name="neighborhood 5" value="neighborhood 5"/> Neighborhood 5</label>
                    </div>
                </div>
                <div className="locationList">
                    <h3 className="filterTitle">Popular Locations:</h3>
                    <div className="filterItem">
                        <label><input type="checkbox" id="location" name="location 1" value="location 1"/> Location 1</label>
                        <label><input type="checkbox" id="location" name="location 2" value="location 2"/> Location 2</label>
                        <label><input type="checkbox" id="location" name="location 3" value="location 3"/> Location 3</label>
                        <label><input type="checkbox" id="location" name="location 4" value="location 4"/> Location 4</label>
                        <label><input type="checkbox" id="location" name="location 5" value="location 5"/> Location 5</label>
                    </div>
                </div>
            </div>
            <div className="btn">
                <ResultsButton />
            </div>
            <Footer />
        </div>
    )
}
*/
