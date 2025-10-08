// require('dotenv').config({Path:'./env'})
// OR
import dotenv from 'dotenv';
import connectDB from "./db/database.js";
import { app } from './app.js';

dotenv.config({
    port:'./env'
})
connectDB() // ye async method se  promise return karega
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port:${process.env.PORT}`)
    })
    app.on("error",(error)=>{
        console.log("ERROR",error);
        throw error
        
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed !!!:",err);
})






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