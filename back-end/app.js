require('dotenv').config({path:"../.env"})
const express = require("express") 
const app = express() 
const cors=require("cors")
const morgan = require("morgan")
const bodyParser=require("body-parser")
const Buffer=require('buffer').Buffer;
//const { isTypedArray } = require("util/types")
app.use(bodyParser.json())
app.use(morgan('dev', {skip: (req, res) => process.env.NODE_ENV === 'test'}))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const fs = require('fs')
const users = require("./data/user.json")
const trips = require("./data/trip.json")
const dbData=require("./uploadData")
const activityData=require("./data/activities.json")
const hotelData=require("./data/hotels.json")
const cityData=require('./data/cities.json')
const mongoose=require("mongoose");
const { stringify } = require('querystring');
const {Schema}=mongoose;

(async()=>{
await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.yougi.mongodb.net/TripPlannerDB?retryWrites=true&w=majority`)
})();

// for data upload purpose only.
// dbData.uploadActivityData(activityData)
// dbData.uploadHotelData(hotelData)
// dbData.uploadCityData(cityData)

app.post("/getDestinationActivities",(req, res)=>{
    let activityList;
    (async()=>{
        activityList=await dbData.activityModel.find({"city":"New York"})
        res.json(activityList)
    })() 
})

app.get("/getRecommendedActivities", (req, res)=>{
    let activityL=[];
    (async()=>{
        for(let i=1;i<6;i++){
            let activityFound=await dbData.activityModel.findOne({"id":i})
            activityL.push(activityFound)
        }
        res.json(activityL)
    })() 
})

app.get("/getRecommendedDestinations",(req, res)=>{
    let destinationL=[];
    (async()=>{
        let activityFound=await dbData.cityModel.findOne({"name":"New York"})
        activityFound.image="data:image/jpeg;base64,".concat(Buffer.from(activityFound.image.data).toString("base64"))
        destinationL.push(activityFound)
        res.json(destinationL)
    })() 
})

app.get("/results/getHotelData",(req, res)=>{
    (async()=>{
        const hotelL=await dbData.hotelModel.find({"city":"New York"})
        res.json(hotelL)
    })()
})

app.post("/destinationDescription/getTop5", (req, res)=>{
    let activities=[]
    const top5=req.body.top5
    top5.forEach(name=>{
        (async()=>{
            const activity=await dbData.activityModel.find({"name":name})
            activities.push(activity)
            if(activities.length==5){
                res.json(activities)
            }
        })()
    })
})

// signup page
app.post("/signup", (req, res) => {
    const userData = {username: req.body.name, password: req.body.password}
    console.log(userData)
    users.push(userData)
    fs.writeFile("./data/user.json", JSON.stringify(users), (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("File written successfully\n");
        }
    })
    res.json(users)
})

// login page
app.post("/login", (req, res) => {
    let success = 0
    const userData = {username: req.body.name, password: req.body.password}
    console.log(userData)
    users.map(user => {
        if(user.username === userData.username && user.password === userData.password) {success=1}
    })
    if (success === 1) {
        res.json(true)
    }
    else {
        res.json(false)
    }
})


/* data from contact page*/
app.post("/contact",(req,res)=>{
    const contactData=req.body
    console.log(contactData)
    res.sendStatus(200).end()
    /*store in database*/
})

app.get("/home-getInitData", (req, res)=>{
    res.json([
        {
            "id": "1",
            "rating": "4", 
            "type": "activity",
            "name": "name",  
            "price": "200", 
            "location": "Location", 
            "tags": ["tropics", "water", "family-friendly"]
        },
        {
            "id": "2",
            "type": "activity", 
            "rating": "3", 
            "name": "name",  
            "price": "350", 
            "location": "Location", 
            "tags": ["tropics", "water", "family-friendly"]
        },
        {
            "id": "3",
            "type": "activity", 
            "rating": "2.5", 
            "name": "name",  
            "price": "50", 
            "location": "Location", 
            "tags": ["tropics", "water", "family-friendly"]
        },
        {
            "id": "4",
            "type": "activity", 
            "rating": "5", 
            "name": "name",  
            "price": "400", 
            "location": "Location", 
            "tags": ["tropics", "water", "family-friendly"]
        },
        {
            "id": "5",
            "type": "activity", 
            "rating": "3.5", 
            "name": "name",  
            "price": "290", 
            "location": "Location", 
            "tags": ["tropics", "water", "family-friendly"]
        },
        {
            "id": "6", 
            "type": "destination", 
            "location": "Location", 
            "tags": ["tropics", "asia", "beaches"]
        },
        {
            "id": "7", 
            "type": "destination", 
            "location": "Location", 
            "tags": ["tropics", "asia", "beaches"]
        },
        {
            "id": "8", 
            "type": "destination", 
            "location": "Location", 
            "tags": ["tropics", "asia", "beaches"]
        }
    ])
    res.end()
})

module.exports = app