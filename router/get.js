const User = require("../modals/User");

const router =require("express").Router();



router.get("/",async(req,res)=>{
    const response=await User.find({});

    res.status(200).send(response);
})

module.exports=router