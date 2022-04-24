require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const passportJWT = require("passport-jwt")
const passportLocal = require("passport-local")
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy =  passportLocal.Strategy
//const {JwtStrategy} = passportJWT.Strategy
const _ = require("lodash") // the lodash module has some convenience functions for arrays that we use to sift through our mock user data... you don't need this if using a real database with user info
const mongoose = require("mongoose")

// set up some JWT authentication options
let jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt") // look for the Authorization request header
jwtOptions.secretOrKey = process.env.JWT_SECRET // an arbitrary string used during encryption - see the .env file
// console.log(jwtOptions) // debug to make sure the secret from the .env file is loaded correctly
// passport can work with many authentication systems... here we are setting some middleware code for using JWT that we'll pass to passport to use

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.yougi.mongodb.net/TripPlannerDB?retryWrites=true&w=majority`)

const jwtStrategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    // console.log("JWT payload received", jwt_payload) // debugging

    // load up some mock user data in an array... we only need this because we're mocking the data from a database
    const {userModel} = require("./uploadData")

    // try to find a matching user in our "database"
    // usually we would do this by finding matching records in a real database... here we're searching the hard-coded mock data in our 'user_data.js' file
    const retrieve = async() => { 
        const user = await userModel.findById(jwt_payload.id) // find a matching user using a convenient lodash function... we would normally look this user up in a real database
        if (user) {
            // we found the user... keep going
            next(null, user)
        } else {
            // we didn't find the user... fail!
            next(null, false)
        }
    }
})

module.exports = {
    jwtOptions,
    jwtStrategy,
}