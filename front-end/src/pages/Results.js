import "../css/Results.css"
import React from "react"
import Header from "../components/Header"
import Search from "../components/SearchBar"
import ArticleListing from "../components/Article.js"
// import Dropdown from 'react-bootstrap/Dropdown'
// import {DropdownButton} from 'react-bootstrap/DropdownButton'
// import {Link} from "react-router-dom"

const Home=()=>{
    return (
        <div>
            <Header/>
            <div className="searchSection">
                <Search/>
            </div>
            <div className="filterSection">
                <h3 className="resultNumber">XXXX locations found</h3>
                {/* <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
                <h3>Sort</h3>
                <h3>Rating</h3>
                <h3>Price</h3>
                <h3>All Filters</h3>
            </div>
            <div className="resultSection">
                <ArticleListing/>
                {/* {results.map((article, i) =>
                        <Article article={article} key={i}/>
                )} */}
            </div>
            
        </div>
    )
}

export default Home