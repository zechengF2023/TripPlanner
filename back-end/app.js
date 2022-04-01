const express = require("express") 
const app = express() 
const cors=require("cors")
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(cors())


/* data from contact page*/
app.post("/contact",(req,res)=>{
    const contactData=req.body
    res.sendStatus(200).end()
    /*store in database*/
})


module.exports = app