const cars=require("express") 
const carsApiRouter=cars.Router();  
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const multer=require("multer");
  


const asyncHandler=require("express-async-handler");
 


//clodinary configuration
cloudinary.config({ 
    cloud_name: 'dxfxsq2iw', 
    api_key: '887779541666659', 
    api_secret: 'KacpKZ24Cz0MiznOmzNJBEf5vgM' 
  });



  const storage = new CloudinaryStorage({

    cloudinary: cloudinary,

    params:async (req, file) => {

        return {

        folder: 'soldXphotos',       

        public_id: file.fieldname + '-' + Date.now()

    }},

}); 
 

var upload=multer({storage:storage})
 

 

carsApiRouter.use(cars.json())
//random cars
carsApiRouter.get("/",async (req,res)=>{
     

 let dbObj=req.app.locals.dbObj;
let result=await dbObj.collection("carsCollection").find().toArray()
     
    res.send({messege:result})

})

//random BMW
carsApiRouter.get("/:brand",async (req,res,next)=>{
    let dbObj=req.app.locals.dbObj;
    let brand=req.params.brand;
   let result=await dbObj.collection("carsCollection").find({productBrand:{$eq:brand}}).toArray()
    res.send({messege:result})


})




carsApiRouter.get("/:brand/:series",async (req,res)=>{


    let dbObj=req.app.locals.dbObj;
    let brand=req.params.brand;
    let series=req.params.series;
    let result=await dbObj.collection("carsCollection").find({productSeries:{$eq:series}}).toArray()
    res.send({messege:result})

})
 



 
carsApiRouter.post("/",upload.single("photo"),async(req,res,next)=>{
    let productObj=JSON.parse(req.body.userObj)
   

     
    productObj.imageUrl=req.file.path;
    
    let dbObj=req.app.locals.dbObj;
    let result=await dbObj.collection("carsCollection").insertOne(productObj)
    res.send({messege:"user created"})


    
})





 
module.exports=carsApiRouter;