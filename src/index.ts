import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import express from  "express"
import { ContentModel, UserModel } from "./db"
import {JWT_PASSWORD} from "./config" 
import { userMiddleware } from "./middlewares"
const app = express()
app.use(express.json())
mongoose.connect("mongodb+srv://nikhilksrivastav190:xcrZqPZcWcGBKU1U@cluster0.e6uvw.mongodb.net/brainly")



app.post("/api/v1/signup",async  (req,res)=>{

    try {
        const username = req.body.username;
        const password = req.body.password;
    
         await UserModel.create({
            username: username,
            password:password
        })
        res.json("usert signed up")
    } catch (e) {
        res.status(400).json({
            message : "user laready exist"
        })
        
    }
})

app.post("/api/v1/sigin", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password
    const existingUser = await UserModel.findOne({
        username,
        password
    })
    if(existingUser){
        const token = jwt.sign({
            id:existingUser._id

        },JWT_PASSWORD)
        res.json({
            token 
        })
    }
    res.json("hello world ")
})

//@ts-ignore
app.post("/api/v1/content", userMiddleware, async (req,res)=>{
    const link = req.body.link;
    const type = req.body.type;
    await ContentModel.create({
        link,
        type,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })
    
    
})
app.get("/api/v1/content", userMiddleware (req,res)=>{
    //@ts-ignore
    cosnt userId = req.userId
    cosnt content = ContentModel.find({
        userId: userId
    })
})
app.get("/api/v1/signup", (req,res)=>{
    res.json("hello world ")
})
app.get("/api/v1/signup", (req,res)=>{
    res.json("hello world ")
})
app.get("/api/v1/brain/share", (req,res)=>{
    res.json("hello world ")
})
app.get("/api/v1/brain/:shareLink", (req,res)=>{
    res.json("hello world ")
})


app.listen (3000);