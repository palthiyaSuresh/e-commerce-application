const exp=require("express");
const app=exp();
const carsApi=require("./Apis/carsApi");
const bikesApi=require("./Apis/bikesApi");
const usersApi=require("./Apis/users");
const cartsApi=require("./Apis/cartApi")
const productsApi=require("./Apis/myproductsApi")
const mc=require("mongodb").MongoClient;
const path=require("path");
app.use(exp.static(path.join(__dirname,"dist/Application")))




const dbUrl="mongodb+srv://soldx:soldx@cluster0.kljm8.mongodb.net/soldxDataBase?retryWrites=true&w=majority"
mc.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(client=>{
    console.log("db connected successfully");
    let DbObj=client.db("soldxDataBase");
    app.locals.dbObj=DbObj;

})
.catch(er=>{
    console.log("error in connecting to db");
})
 





app.use("/cars",carsApi);
app.use("/bikes",bikesApi);
app.use("/users",usersApi);
app.use("/cart",cartsApi);
app.use("/myproducts",productsApi)
app.use((req,res,next)=>{
    console.log(`the path ${req.url} doesnot exist`)
})

app.use((err,req,res,next)=>{
    res.send({message:"error occured",reason:err.message})
     
})

app.listen(13579,(req,res)=>{
    console.log("hey surya! iam listening")
})