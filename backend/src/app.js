import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
// ye sare coonfigure app banne ke baad bante hai
const app = express()
// middleware mein use hoat hai
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))
// json file ko accept karna
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}