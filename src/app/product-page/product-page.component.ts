import { Component, OnInit } from '@angular/core';
import {MyServicesService} from '../services/my-services.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productObj:any;
  userObj:any;
  productUser:any;
  constructor(private myServiceService:MyServicesService,private router:Router) { }

  ngOnInit(): void {
    this.productObj=this.myServiceService.sendProductObj();
    this.myServiceService.getUserForSell(this.productObj.fname).subscribe(
      data=>{
          this.productUser=data["messege"];
      },
      err=>{

      }
    )
 
  }
  addCart()
  {
    
     this.userObj=sessionStorage.getItem("userObj")
     this.userObj=JSON.parse(this.userObj)      
      
       if(this.userObj==null)
       {
         alert("please log in")
         this.router.navigateByUrl("/login") 
       }
       else{
         
       this.productObj['fname']=this.userObj.fname;
    
     delete this.productObj._id;
     console.log("hello world!--",this.productObj)
 
 
      
      this.myServiceService.addToCart(this.productObj).subscribe(
        data=>{
          if(data["messege"]=="success")
          {
            alert("inserted to the cart successfully")
          }
        },
        err=>{
         alert("something went wrong!...... please try again")
        }
      )
       }




  }


}
