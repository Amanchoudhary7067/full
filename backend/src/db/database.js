// DATABASE connect karna 
import mongoose  from "mongoose";
import {DB_NAME} from "../constants.js"

const connectDB = async()=>{
    const uri = process.env.MONGODB_URI;
    if(!uri){
        console.error("MONGODB_URI MISSING");
        console.log(uri)
        process.exit(1);
    }
    try {
       const connectionResponse = await mongoose.connect(uri,{dbName:DB_NAME})
       console.log(`\n MongoDB connected !! DB HOST:${connectionResponse.connection.host}`);
       
    } catch (error) {
        console.log("MONGODB connection FAILED",error)
        process.exit(1)
    }
}

export default connectDB;
