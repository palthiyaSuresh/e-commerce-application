import { Component, OnInit } from '@angular/core';
import {MyServicesService} from '../services/my-services.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  obj:any;
arrayCars:any;
arrayBikes:any;
page=1;
totalLen:any;
  constructor(private myServiceService:MyServicesService,private router:Router) {}
   
      
  ngOnInit(): void {
    this.obj= sessionStorage.getItem("userObj");
    this.obj=JSON.parse(this.obj);


    //get my products
     
    this.myServiceService.getMyProducts("cars",this.obj.fname)
    .subscribe(
      data=>{
          this.arrayCars=data["messege"];

      },
      err=>{
        alert("oops! something wrong!...please try again")
      }
    )
    
   }
    
     
}
