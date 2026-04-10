import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"
import cookieParser from "cookie-parser"

// import all routes
import userRoutes from "./routes/user.routes.js"

import dns from "dns"
dns.setServers(["1.1.1.1","8.8.8.8"])



const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

const port = process.env.PORT || 3000;
dotenv.config()

app.use(
    cors({
        origin:"http://localhost:3000",
        credentials: true,
        methods:['GET','POST','DELETE','OPTIONS'],
        allowedHeaders: ['Content-Type','Authorization']
    })
);


app.get("/",(req,res)=> {
    res.send("Cohort")
})
app.get("/Krish",(req,res) => {
    res.send("Krishna Walia")
})

db();

// user routes
app.use("/api/v1/users",userRoutes)

app.listen(port,()=> {
    console.log(`Example app listening on port ${port}`)
})