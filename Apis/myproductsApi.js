const myproduct=require("express")
const myProductsApi=myproduct.Router();
myProductsApi.use(myproduct.json());



myProductsApi.get("/cars/:user",async(req,res,next)=>{
    let dbObj=req.app.locals.dbObj;
    let user=req.params.user;
     
    let result=await dbObj.collection("carsCollection").find({fname:{$eq:user}}).toArray()
     
    res.send({messege:result})

})
myProductsApi.get("/bikes/:user",async(req,res,next)=>{
    let dbObj=req.app.locals.dbObj;
    let user=req.params.user;
    let result=await dbObj.collection("bikesCollection").find().toArray()
    res.send({messege:result})

})




module.exports=myProductsApi;