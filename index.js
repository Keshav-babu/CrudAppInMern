const express=require("express")
const cors=require("cors")
const app=express()
const mongoose=require("mongoose")
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT||5000
const CONNECTION_URL="mongodb+srv://keshav_mandal:DFD5bRFNecckBn6a@cluster0.thgbj.mongodb.net/myCRUD?retryWrites=true&w=majority"
mongoose.connect(
    CONNECTION_URL,
    //{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    {useNewUrlParser:true, useUnifiedTopology:true},
    ()=>console.log("Connected to Database")
)

const create=require("./router/create.js")
const get=require("./router/get.js")
const update=require("./router/update.js")
const delet=require("./router/delete.js")

app.use("/create",create)
app.use("/get",get)
app.use("/update",update)
app.use("/delete",delet)

if(process.env.NODE_ENV=="production"){
    app.use(express.static("frontend/build"));
    
}


app.listen(PORT, () => console.log("Running on port 5000"));