//mongodb+srv://keshav_mandal:<password>@cluster0.thgbj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//DFD5bRFNecckBn6a

const mongoose=require("mongoose")

const UserSchema=mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    country:String,
})

module.exports=mongoose.model("User",UserSchema)