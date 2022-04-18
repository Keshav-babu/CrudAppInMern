const router=require("express").Router()
const User=require("../modals/User")

router.post("/",async(req,res)=>{
    const filter={_id:req.body._id}
    let del=await User.deleteOne(filter);
    res.status(200).send(req.body)
})

module.exports=router;