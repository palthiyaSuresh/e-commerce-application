const Auth=require("express");
const authApiRoute=Auth.Router();
const jwt=require("jsonwebtoken");



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


module.exports=verifyToken;