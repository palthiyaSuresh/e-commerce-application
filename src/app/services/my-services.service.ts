import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  constructor(private httpClient:HttpClient) { }
  getType(path:any):Observable<any>{
     
    const val= this.httpClient.get("/cars");     
    return val;

  }
  createUser(obj:any):Observable<any>
  {
    return this.httpClient.post("/users/create",obj);
  }
  loginUser(obj:any):Observable<any>
  {
    let un=obj.fname;
    let pw=obj.password
    return this.httpClient.get(`/users/login/${un}/${pw}`);
  }
  getCart(user:any):Observable<any>
  {
    return this.httpClient.get(`/cart/${user}`)
  }
  

  productObj:any;
  getProductObj(obj:any)
 {
  this.productObj=obj;
  console.log("in get pruct method",this.productObj)
 }
 sendProductObj()
{
  console.log("in send pruct method",this.productObj)
  return this.productObj;
}

//user details to sell his details
getUserForSell(obj:any):Observable<any>
{
  return this.httpClient.get(`/users/${obj}`);
}

//add to cart
addToCart(obj:any):Observable<any>
{   
    console.log("hello surya**",obj);
    return this.httpClient.post("/cart",obj)
  
}

addProduct(obj:any,ptype:any):Observable<any>
{
 
  console.log("product form",obj);
  return this.httpClient.post(`/${ptype}`,obj)

}
getBrand(path1:any,path2:any):Observable<any>
{
    return this.httpClient.get(`/${path1}/${path2}`)
}



 //get series(series components)
 getSeries(path1:any,path2:any,path3:any):Observable<any>
 {
   return this.httpClient.get(`/${path1}/${path2}/${path3}`)
 }

 
//get my products
getMyProducts(type:any,user:any):Observable<any>
{
   
 return this.httpClient.get(`/myproducts/${type}/${user}`)
  // let bikesObj=this.httpClient.get(`/bikes/myProducts/${obj}`)
}




}
