const mongoose=require("mongoose");
const {Schema}=mongoose;
const fs=require("fs");
const { stringify } = require("querystring");

// const { networkInterfaces } = require("os");
// const passportLocalMongoose = require("passport-local-mongoose")
// const userSchema = new Schema({
//     username: {type: String, required: true},
//     password: {type: String, required: true}
// })
//userSchema.plugin(passportLocalMongoose)
//let userModel = mongoose.model('user', userSchema)

const activitySchema=new Schema({
    id: Number,
    city: String,
    price: Number,
    lat: Number,
    lng: Number, 
    name: String,
    image: {data:Buffer,contentType: String},
    stay: Number,
    link: String
})
let activityModel=mongoose.model('activities',activitySchema)
const hotelSchema=new Schema({
    name: String,
    city: String,
    rating:Number,
    price: Number,
    blurb: String,
    amenity: [String],
    lat: Number,
    lng: Number,
    image: {data:Buffer,contentType: String},
    link: String,
    stay:Number
})
let hotelModel=mongoose.model('hotels',hotelSchema)
const citySchema=new Schema({
    name:String,
    top5: [String],
    image: {data:Buffer,contentType: String},
    description:String
})
let cityModel=mongoose.model("cities", citySchema)
const tripSchema=new Schema({
    city: String,
    hotel: String,
    activities: [[String]],
    startDate:String,
    endDate: String
})
let tripModel=mongoose.model("trips",tripSchema)
const problemSchema=new Schema({
    category: String,
    description: String
})
let problemModel=mongoose.model("problems", problemSchema)
const userSchema=new Schema({
    first: String,
    last: String,
    username: String,
    password: String
})
const userModel=mongoose.model("users", userSchema)
function uploadActivityData(activities){
    activities.forEach(ele => {
        let activity=new activityModel();
        activity.image.contentType='image/jpeg';
        activity.id=ele.id
        activity.city=ele.city
        activity.price=ele.price
        activity.lat=ele.lat
        activity.lng=ele.lng
        activity.name=ele.name
        activity.image.data=fs.readFileSync(ele.image)
        activity.link=ele.link
        activity.stay=ele.stay;
        (async()=>{
            await activity.save();
            console.log("activity "+ele.id+" uploaded")
        })()
    });
}
function uploadHotelData(hotels){
    hotels.forEach(ele=>{
        let hotel=new hotelModel();
        hotel.image.contentType='image/jpeg';  
        hotel.name=ele.name
        hotel.city=ele.city
        hotel.rating=ele.rating
        hotel.price=ele.price
        hotel.blurb=ele.blurb
        hotel.amenity=ele.amenity
        hotel.lat=ele.lat
        hotel.lng=ele.lng
        hotel.image.data=fs.readFileSync(ele.image)
        hotel.link=ele.link;
        (async()=>{
            await hotel.save();
            console.log("hotel "+ele.name+" uploaded")
        })()
    })
    
}
function uploadCityData(cities){
    cities.forEach(ele=>{
        let city=new cityModel();
        city.name=ele.name
        city.top5=ele.top5
        city.image.data=fs.readFileSync(ele.image)
        city.description=ele.description;
        (async()=>{
            await city.save();
            console.log("city "+ele.name+" uploaded")
        })()
    })
}
function uploadTripData(trips){
    trips.forEach(ele=>{
        let trip=new tripModel()
        trip.city=ele.city
        trip.hotel=ele.hotel
        trip.activities=ele.activities
        trip.startDate=ele.startDate
        trip.endDate=ele.endDate;
        (async()=>{
            await trip.save();
            console.log("trip to "+ele.city+" uploaded")
        })()
    })
}
function uploadProblemData(problem){
    let newProblem=new problemModel()
    newProblem.category=problem.category
    newProblem.description=problem.description;
    (async()=>{
        await newProblem.save();
        console.log("Problem "+newProblem.category+" uploaded")
    })()
}
function uploadUserData(user){
    let newUser=new userModel()
    newUser.first=user.first
    newUser.last=user.last
    newUser.username=user.username
    newUser.password=user.password;
    (async()=>{
        await newUser.save()
        console.log("User "+newUser.username+" uploaded")
    })
}
module.exports={
    uploadActivityData,
    uploadHotelData, 
    uploadCityData,
    uploadTripData,
    uploadProblemData,
    uploadUserData,
    activityModel,
    hotelModel,
    cityModel,
    tripModel,
    problemModel,
    userModel
}