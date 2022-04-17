const mongoose=require("mongoose");
const {Schema}=mongoose;
const fs=require("fs")
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
    link: String
})
let hotelModel=mongoose.model('hotels',hotelSchema)
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
        activity.image.data=fs.readFileSync(ele.image);
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


module.exports={
    uploadActivityData: uploadActivityData,
    uploadHotelData: uploadHotelData, 
    activityModel: activityModel,
    hotelModel: hotelModel
}