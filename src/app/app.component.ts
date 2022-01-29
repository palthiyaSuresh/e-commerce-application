import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 userObj:any=null;
  primarysearch:any;
  title = 'Application';

  arrayEle:any;
  searchItem:any;
  

  constructor(private router:Router) { 
     
  }

  ngOnInit(): void {
    
    this.userObj= sessionStorage.getItem("userObj");
    this.userObj=JSON.parse(this.userObj);
  }
 
  



  checkProfile()
  {
    this.userObj= sessionStorage.getItem("userObj");
    this.userObj=JSON.parse(this.userObj);
    console.log(this.userObj)
      if(this.userObj==null)
      {
        alert("please log in")
        this.router.navigateByUrl("/login")

      }
      
  }
  checkCart()
  {
    this.userObj= sessionStorage.getItem("userObj");
    this.userObj=JSON.parse(this.userObj);
    console.log(this.userObj)
      if(this.userObj==null)
      {
        alert("please log in")
        this.router.navigateByUrl("/login")

      }
      
  }
  userCheckLogin()
  {
    this.userObj= sessionStorage.getItem("userObj");
    this.userObj=JSON.parse(this.userObj);
    console.log(this.userObj)
      if(this.userObj!=null)
      {
        alert("please log out")
        this.router.navigateByUrl("/profile")

      }
  }
  userCheckRegister()
  {
    this.userObj= sessionStorage.getItem("userObj");
    this.userObj=JSON.parse(this.userObj);
    console.log(this.userObj)
      if(this.userObj!=null)
      {
        alert("please log out")
        this.router.navigateByUrl("/profile")

      }
  }

 
}

