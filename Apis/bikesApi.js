const bikes=require("express")
const bikesApiRouter=bikes.Router();

bikesApiRouter.use(bikes.json());


//random bikes
bikesApiRouter.get("/",(req,res)=>{

})

//random KTM

bikesApiRouter.get("/ktm",(req,res)=>{

})
            //random ktm rc200
            bikesApiRouter.get("/ktm/rc200",(req,res)=>{

            })
            //random ktm 125duke
            bikesApiRouter.get("/ktm/125duke",(req,res)=>{

            })
           //random ktm 200duke
            bikesApiRouter.get("/ktm/200duke",(req,res)=>{

            })
//random pulsar

bikesApiRouter.get("/pulsar",(req,res)=>{

})
            //random pulsar150
            bikesApiRouter.get("/pulsar/pulsar150",(req,res)=>{
    
            })
            //random rs200
            bikesApiRouter.get("/pulsar/rs200",(req,res)=>{
    
            })
            //random ns200
            bikesApiRouter.get("/pulsar/ns200",(req,res)=>{
    
            })

//random royal enfield

bikesApiRouter.get("/royalEnfield",(req,res)=>{

})

            //random re classic350
            bikesApiRouter.get("/royalEnfield/classic350",(req,res)=>{

            })
            //random re interceptor650
            bikesApiRouter.get("/royalEnfield/interceptor650",(req,res)=>{

            })
            //random re meteor350
            bikesApiRouter.get("/royalEnfield/meteor350",(req,res)=>{

            })


//insert bike
 
bikesApiRouter.post("/",async (req,res)=>{

    let dbObj=req.app.locals.dbObj;

    let payload=req.body;
    console.log("payload is",payload)
   let result=await dbObj.collection("bikesCollection").insertOne(payload)
   if(result==true)
   {
       res.send({messege:"success"})
   }
   else{
       res.send({messege:"failed"})
   }
    
})



 
 





module.exports=bikesApiRouter;