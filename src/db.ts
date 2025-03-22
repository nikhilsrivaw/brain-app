import mongoose, { model, Model, Schema } from "mongoose"

const schema = mongoose.Schema;
const objectid = mongoose.Types.ObjectId;
mongoose.connect("mongodb+srv://nikhilksrivastav190:xcrZqPZcWcGBKU1U@cluster0.e6uvw.mongodb.net/brainly")




const userSchema = new schema({
    email :{ type : String ,unique:true },
    passsword :String
})
export const UserModel = model("User",userSchema)

const ContentSchema = new Schema({
    title: String,
    link : String,
    tags : [{type: mongoose.Types.ObjectId , ref:'Tag'}],
    userId : {type:mongoose.Types.ObjectId , ref:'User',required : "True"}
})
export const ContentModel = model("Content" , ContentSchema)