const router=require("express").Router();
const User=require("../modals/User")

router.post("/",async(req,res)=>{
    const filter={_id:req.body._id};
    
    const update={
        name:req.body.name,
        age:req.body.age,
        city:req.body.city,
        country:req.body.country
    }

    let up=await User.findByIdAndUpdate(filter,update)
    res.status(200).send(req.body);
})

module.exports=router;