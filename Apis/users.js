const users=require("express")
const usersApiRouter=users.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const asyncHandler=require("express-async-handler");
const { json } = require("express");
// const verifyToken=require("./Authorization")
usersApiRouter.use(users.json())
//to use this verifytoken in any route place it before the request handler
const verifyToken=(req,res,next)=>{
    let tokenWithBearer=req.headers["Authorization"]
    if(tokenWithBearer==undefined)
    {
        res.send({messege:"user not authorised to access this"})
    }
    if(tokenWithBearer.startsWith("Bearer ")){
        let token=tokenWithBearer.slice(7,tokenWithBearer.length)
        jwt.verify(token,"surya",(err,decoded)=>{
            if(err)
            {
                res.send({messege:"session expired...please login again"})
            }
            else{
                next();
            }
        })
    }
}
//user login
usersApiRouter.get("/login/:un/:pw",asyncHandler( async (req,res,next)=>{
    
    let dbObj=req.app.locals.dbObj;
    let fn=req.params.un;
    let pswd=req.params.pw;
     
    let obj=await dbObj.collection("usersCollection").findOne({fname:{$eq:fn}})
    if(obj==null)
    {
        res.send({messege:"no user existed"});
    }
    else{
      let result=await bcrypt.compare(pswd,obj.password)
      if(result==false)
      {
          res.send({messege:"passwords not matched"})
      }
      else{
         let signedToken=await jwt.sign({fname:fn},"surya")
         res.send({messege:"login successfull",token:signedToken,userObj:obj})
      }
    }
}))
//user registration
usersApiRouter.post("/create",asyncHandler( async (req,res,next)=>{
    let data=req.body;
    let dbObj=req.app.locals.dbObj;
      
    let obj=await dbObj.collection("usersCollection").findOne({fname:{$eq:data.fname}})
    if(obj==null)
    {
        let psd=await bcrypt.hash(data.password,6)
        data.password=psd;
        
        let msg=await dbObj.collection("usersCollection").insertOne(data);
        if(msg)
        {
            res.send({messege:"success"})
        }
        else{
            res.send({messege:"success"})
        }
    }
    else{
        res.send({messege:"user existed"})
    }
}))
//update user
usersApiRouter.put("/update/:fname",asyncHandler( async (req,res)=>{
    let data=req.body;
    let dbObj=req.app.locals.dbObj;
    // let userObj=json.parse('req.params.userObj') ;
    let userFname=req.params.fname;    
    let result=await dbObj.collection("usersCollection").updateOne({fname:{$eq:userFname}},{$set:data })
    res.send({messege:"success"})
}))



usersApiRouter.get("/:user",verifyToken,asyncHandler(async(req,res)=>{
    let user=req.params.user;
    let dbObj=req.app.locals.dbObj;
    let result=await dbObj.collection("usersCollection").findOne({fname:{$eq:user}})
    res.send({messege:result})

}));


module.exports=usersApiRouter;