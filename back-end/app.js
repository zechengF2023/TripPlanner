require('dotenv').config({})
const express = require("express") 
const app = express() 
const cors=require("cors")
const morgan = require("morgan")
const bodyParser=require("body-parser")
const Buffer=require('buffer').Buffer;
app.use(bodyParser.json())
app.use(morgan('dev', {skip: (req, res) => process.env.NODE_ENV === 'test'}))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { body, validationResult } = require('express-validator');

// jwt authentication

const jwt = require("jsonwebtoken")
const passport = require("passport")
app.use(passport.initialize())

const {jwtOptions, jwtStrategy} = require("./jwt-config.js")
passport.use(jwtStrategy)

const dbData=require("./uploadData")
const activityData=require("./data/activities.json")
const hotelData=require("./data/hotels.json")
const cityData=require('./data/cities.json')
const tripData=require('./data/trips.json')
const mongoose=require("mongoose");

(async()=>{
await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.yougi.mongodb.net/TripPlannerDB?retryWrites=true&w=majority`)
})();

// for data upload purpose only.
// dbData.uploadActivityData(activityData)
// dbData.uploadHotelData(hotelData)
// dbData.uploadCityData(cityData)
// dbData.uploadTripData(tripData)



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

//to be modified. 
app.get("/getRecommendedDestinations",(req, res)=>{
    let destinationL=[];
    (async()=>{
        let activityFound=await dbData.cityModel.findOne({"name":"New York"})
        activityFound.image="data:image/jpeg;base64,".concat(Buffer.from(activityFound.image.data).toString("base64"))
        destinationL.push(activityFound)
        res.json(destinationL)
    })() 
})

//to be modified
app.get("/results/getHotelData",(req, res)=>{
    (async()=>{
        const hotelL=await dbData.hotelModel.find({"city":"New York"})
        res.json(hotelL)
    })()
})

app.post("/getSingleHotel", (req, res)=>{
    (async()=>{
        const hotel=await dbData.hotelModel.findOne(req.body)
        res.json(hotel).end()
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

//user id to be added
app.post("/myTrips/getAllTrips",async(req, res)=>{
    const trip=await dbData.tripModel.find({username: req.body.username})
    res.json(trip)
})

app.post("/getUser", async(req, res)=>{
    const user=await dbData.userModel.findOne({"username":req.body.username})
    console.log(user)
    res.json(user).end()
})

app.post("/getActivity", async(req, res)=>{
    const activity=await dbData.activityModel.find({"name": req.body.name})
    res.json(activity)
})

app.post("/getHotel", async(req, res)=>{
    const hotel=await dbData.hotelModel.find({"name": req.body.name})
    res.json(hotel)
})

app.post("/getCity", async(req, res)=>{
    const city=await dbData.cityModel.find({"name": req.body.name})
    res.json(city)
})

app.post("/saveTrip", (req, res)=>{
    const newTrip=[req.body]
    dbData.uploadTripData(newTrip)
    console.log("sent")
    res.status(200).end()
})

app.post("/deleteTrip", async(req, res)=>{
    await dbData.tripModel.deleteOne({_id:req.body.tripId})
    res.status(200).end()
})

// signup page
app.post("/signup", body("username").isEmail(),body("password").isLength({min:6}), body("last").isLength({min:1}), body("first").isLength({min:1}), (req, res) => {
    const userData = {first: req.body.first, last: req.body.last, username: req.body.username, password: req.body.password}
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).end()
    }
    else{
        (async()=>{
            const existingUser=await dbData.userModel.find({username: userData.username})
            if(existingUser.length>0){
                res.send("duplicate").end()
            }
            else{
                dbData.uploadUserData(userData)
                res.json(userData).end()
            }
        })()
    }
})

// login page
app.post("/login", async(req, res) => {
    const userData = {username: req.body.username, password: req.body.password}
    const userToLogin=await dbData.userModel.findOne({username: userData.username})
    if (userToLogin && userToLogin.password===userData.password){
        res.json(userToLogin).status(200).end()
    }
    else{
        res.status(400).end()
    }
})


/* data from contact page*/
app.post("/contact",(req,res)=>{
    const contactData=req.body
    console.log(contactData)
    console.log(contactData.description)
    dbData.uploadProblemData(contactData)
    res.sendStatus(200).end()
})

module.exports = app