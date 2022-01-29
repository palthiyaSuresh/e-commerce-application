import { Component, Input, OnInit } from '@angular/core';
import {MyServicesService} from 'src/app/services/my-services.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-general-bmw',
  templateUrl: './general-bmw.component.html',
  styleUrls: ['./general-bmw.component.css']
})
export class GeneralBmwComponent implements OnInit {
  @Input()
  min:any;
  @Input()
  max:any;

constructor(private myServiceService:MyServicesService,private router:Router ) { }
totalLen:any;
page=1
val:any;
arrayObj:any;

  ngOnInit(): void {
    this.myServiceService.getBrand("cars","bmw").subscribe(
      data=>{
        this.arrayObj=data['messege'];
        

      },
      err=>{
        alert("something went wrong!...... please try again")
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
