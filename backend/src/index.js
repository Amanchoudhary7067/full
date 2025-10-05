// require('dotenv').config({Path:'./env'})
// OR
import dotenv from 'dotenv';
import connectDB from "./db/database.js";

dotenv.config({
    port:'./env'
})
connectDB()








/*

import express from "express"
const app = express()// jo express se app banta hai vo hai ye
// feez function ke through (array function)
( async ()=>{
    try {
        // YE NICHE DATABASE CONNECT HOGA 
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // niche app ka listener hai jo error ko listen karega
        app.on("error",(error)=>{
            console.log("ERROR: ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error);
        throw error
    }
})()

*/