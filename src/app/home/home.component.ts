import { Component, OnInit } from '@angular/core';
import {MyServicesService} from '../services/my-services.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchVal:any;
  token:any;
  arrayObjCars:any;
  productVal:any;
  totalLen:any;
  page=1;
  val:any;
  value:any;
  newItems:any=[];
  selected:any;
  shuffled:any;  
  userObj:any;

  constructor(private myServicesService:MyServicesService,private router:Router) { }

  ngOnInit(): void {
    console.log("hello world")
    this.myServicesService.getType("cars").subscribe(
      data=>{
         this.arrayObjCars=data['messege'];   
      },
      err=>{
        alert("something went wrong!...... please try again in home")
      }
    ) 
  }
  productPage(obj:any)
  {
    
    this.myServicesService.getProductObj(obj);
    this.router.navigateByUrl("/product");
  }

}
