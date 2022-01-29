const cartexp=require("express")
const cartApiRouter=cartexp.Router();
const jwt=require("jsonwebtoken");
 
cartApiRouter.use(cartexp.json());
 

//insert product

cartApiRouter.post("/",async (req,res)=>{
    let dbObj=req.app.locals.dbObj;

    let payload=req.body;
     
     
   let result=await dbObj.collection("cartCollection").insertOne(payload)
     
    if(result==true)
   {
       res.send({messege:"failed"})
   }
   else{
       res.send({messege:"success"})
   }
})


//get from cart
cartApiRouter.get("/:user",async (req,res)=>{
    let dbObj=req.app.locals.dbObj;
    let user=req.params.user;
    
    let result=await dbObj.collection("cartCollection").find({fname:{$eq:user}}).toArray()
     
    res.send({messege:result})
     

})







module.exports=cartApiRouter;