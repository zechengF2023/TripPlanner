import "../css/Results.css"
import React, { useEffect } from "react"
import Header from "../components/Header"
import Search from "../components/SearchBar"
import ArticleListing from "../components/ArticleListing.js"
import FilterButton from "../components/FilterButton.js"
import Footer from "../components/Footer"
import Properties from "./Properties"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import {useLocation} from "react-router-dom"
import axios from "axios"

const Results=({route, navigation})=>{
    const {state}=useLocation()
    const {intTravelerNum, destination, duration}=state
    const [sort, setSort] = React.useState('');
    const [price, setPrice] = React.useState('');
    const sortChange = (event) => {
        setSort(event.target.value);
    };
    const priceChange = (event) => {
        setPrice(event.target.value);
    };
    return (
        <div>
            <Header/>
            <div className="searchSection">
                <Search/>
            </div>
            <div className="filterSection">
                <h3 className="resultNumber">{Properties.length} locations found</h3>
                <Box className="dropdown" sx={{ minWidth: 120 }}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        label="Age"
                        onChange={sortChange}
                        >
                        <MenuItem value={"Recommended"}>Recommended</MenuItem>
                        <MenuItem value={"Price"}>Price: Low to High</MenuItem>
                        <MenuItem value={"Rating"}>Rating</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box className="dropdown" sx={{ minWidth: 120 }}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Price</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={price}
                        label="Age"
                        onChange={priceChange}
                        >
                        <MenuItem value={"Less 100"}>Less than $100</MenuItem>
                        <MenuItem value={"BW 100 200"}>$100-$200</MenuItem>
                        <MenuItem value={"BW 200 300"}>$200-$300</MenuItem>
                        <MenuItem value={"More 300"}>$300+</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <div className="filterBtn">
                    <FilterButton/>
                </div>
            </div>
            <div className="resultSection">
                {Properties.map((article, i) =>
                        <ArticleListing article={article} key={i}/>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Results