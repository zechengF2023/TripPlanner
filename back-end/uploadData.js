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
let hotelModel=mongoose.model('hotelModel',hotelSchema)
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
            console.log("activity "+ele.id+" sent")
        })()
    });
}
function uploadHotelData(hotels){
    let hotel=new hotelModel();
    hotel.image.contentType='image/jpeg';
}


module.exports={
    uploadActivityData: uploadActivityData,
    uploadHotelData: uploadHotelData, 
    activityModel: activityModel,
    hotelModel: hotelModel
}