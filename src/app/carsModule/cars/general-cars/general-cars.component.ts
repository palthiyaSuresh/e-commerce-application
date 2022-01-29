import { Component, OnInit } from '@angular/core';
import {MyServicesService} from 'src/app/services/my-services.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-general-cars',
  templateUrl: './general-cars.component.html',
  styleUrls: ['./general-cars.component.css']
})
export class GeneralCarsComponent implements OnInit {
  arrayObj:any;

constructor(private myServiceService:MyServicesService,private router:Router) { }
totalLen:any;
page=1
val:any;


ngOnInit(): void {
  console.log("hello world")
  this.myServiceService.getType("cars").subscribe(
    data=>{
       this.arrayObj=data['messege'];   
    },
    err=>{
      alert("something went wrong!...... please try again in home")
    }
  ) 
}
  addCart(obj:any)
  {
    
     
    
    delete obj._id;
     
     this.myServiceService.addToCart(obj).subscribe(
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

  productPage(obj:any)
  {
    
    this.myServiceService.getProductObj(obj);
    this.router.navigateByUrl("/product");
  }

}
