require('dotenv').config({ silent: true })
const express = require("express") 
const app = express() 
const cors=require("cors")
const morgan = require("morgan")
const bodyParser=require("body-parser")
const { isTypedArray } = require("util/types")
app.use(bodyParser.json())
app.use(morgan('dev', {skip: (req, res) => process.env.NODE_ENV === 'test'}))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const fs = require('fs')
const users = require("./data/user.json")
const trips = require("./data/trip.json")

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
    res.sendStatus(200).end()
    /*store in database*/
})

module.exports = app