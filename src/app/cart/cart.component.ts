import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MyServicesService} from '../services/my-services.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  obj:any;
  cartArrayObj:any;
  totalLen:any;
  page=1
  val:any;
  constructor(private myServiceService:MyServicesService,private router:Router) { }

  ngOnInit(): void {
    this.obj= sessionStorage.getItem("userObj");
    this.obj=JSON.parse(this.obj);

     
    // get cart array
    console.log("in cart comp",this.obj.fname)
    this.myServiceService.getCart(this.obj.fname)
    .subscribe(
      data=>{
          this.cartArrayObj=data["messege"];

      },
      err=>{
        alert("oops! something wrong!...please try again")
      }
    )
     

  }
  productDetails(obj:any)
  {
    this.myServiceService.getProductObj(obj);
    this.router.navigateByUrl("/product");
  }

}
