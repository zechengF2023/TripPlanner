import "../css/Results.css"
import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import HotelListing from "../components/HotelListing.js"
import FilterButton from "../components/FilterButton.js"
import Footer from "../components/Footer"
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
    const [sort, setSort] = React.useState('Default');
    const [price, setPrice] = React.useState('Any');
    const [hotelData, setHotelData]=useState([]);
    const [displayData, setDisplayData]=useState([]);
    const Buffer=require('buffer').Buffer;
    const sortFunction=(method, arr)=>{
        if (arr.length===0){return []}
        else if(method==="Price"){
            const newDisplayData=arr;
            for(let i=0;i<newDisplayData.length;i++){
                let smallestIdx=i;
                for(let j=i;j<newDisplayData.length;j++){
                    if(newDisplayData[j].price<newDisplayData[smallestIdx].price){
                        smallestIdx=j
                    }
                }
                const temp=newDisplayData[i]
                newDisplayData[i]=newDisplayData[smallestIdx]
                newDisplayData[smallestIdx]=temp
            }
            return newDisplayData
        }
        else if(method==="Default"){
            const newDisplayData=[]
            hotelData.forEach(item=>{
                if(arr.includes(item)){newDisplayData.push(item)}
            })
            return newDisplayData
        }
        else if(method==="Rating"){
            const newDisplayData=arr;
            for(let i=0;i<newDisplayData.length;i++){
                let largestIdx=i;
                for(let j=i;j<newDisplayData.length;j++){
                    if(newDisplayData[j].rating>newDisplayData[largestIdx].rating){
                        largestIdx=j
                    }
                }
                const temp=newDisplayData[i]
                newDisplayData[i]=newDisplayData[largestIdx]
                newDisplayData[largestIdx]=temp
            }
            return newDisplayData
        }
    }
    const sortChange = (event) => {
        setSort(event.target.value)
        console.log(event.target.value)
        setDisplayData(sortFunction(event.target.value, displayData))
    };
    const priceChange = (event) => {
        setPrice(event.target.value);
        console.log(event.target.value)
        let newDisplayData=[]
        if(event.target.value==="Any"){
            newDisplayData=hotelData
        }
        else if(event.target.value==="Less 100"){
            hotelData.forEach(item=>{
                if(item.price<100){newDisplayData.push(item)
                }
            })
        }
        else if(event.target.value==="BW 100 200"){
            hotelData.forEach(item=>{
                if(item.price>=100 && item.price<=200){newDisplayData.push(item)                }
            })
        }
        else if(event.target.value==="BW 200 300"){
            hotelData.forEach(item=>{
                if(item.price>=200 && item.price<=300){
                    newDisplayData.push(item)              
                }
            })
        }
        else{
            hotelData.forEach(item=>{
                if(item.price>300){newDisplayData.push(item)}
            })
        }
        console.log(newDisplayData)
        console.log(sortFunction(sort, newDisplayData))
        setDisplayData(sortFunction(sort, newDisplayData))
    };
    const fetchHotelData=async()=>{
        const hotelDataFetched=await axios.get("http://localhost:3000/results/getHotelData");
        setHotelData([])
        setDisplayData([])
        setSort("Default")
        setPrice("Any")
        hotelDataFetched.data.forEach(item=>{
            item.image="data:image/jpeg;base64,".concat(Buffer.from(item.image.data).toString("base64"))
            setHotelData(hotelData=>[...hotelData, item])
            setDisplayData(displayData=>[...displayData, item])
        })
    }
    useEffect(()=>{
        fetchHotelData()

    },[])
    return (
        <div>
            <Header/>
            <div className="destiIntroWrapper">
            <div className="destinationIntro">
                Hotels in {destination}
            </div>
            </div>
            <div className="filterSection">
                <h3 className="resultNumber">{displayData.length} locations found</h3>
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
                        <MenuItem value={"Default"}>Default</MenuItem>
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
                        <MenuItem value={"Any"}>All prices</MenuItem>
                        <MenuItem value={"Less 100"}>Less than $100</MenuItem>
                        <MenuItem value={"BW 100 200"}>$100-$200</MenuItem>
                        <MenuItem value={"BW 200 300"}>$200-$300</MenuItem>
                        <MenuItem value={"More 300"}>$300+</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                {/* <div className="filterBtn">
                    <FilterButton/>
                </div> */}
            </div>
            <div className="resultSection">
                {displayData.length>0 && displayData.map((hotel, i) =>
                        <HotelListing article={hotel} duration={duration} key={i}/>
                )}
                {displayData.length===0 && <h2>No matching result.</h2>}
            </div>
            <Footer />
        </div>
    )
}

export default Results