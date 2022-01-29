import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MyServicesService} from '../services/my-services.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userObj:any;
  image:any;
  updatedDetails:any;
  constructor(private router:Router,private myServiceService:MyServicesService) { }

  ngOnInit(): void {
    this.userObj= sessionStorage.getItem("userObj");
   this.userObj=JSON.parse(this.userObj);
   console.log(" for profile",this.userObj)
  //  this.myServiceService.updateProfile(th)
 
  }
  logOut():void
  {
  //  this.userObj= sessionStorage.getItem("userObj");
  //  this.userObj=JSON.parse(this.userObj);
    sessionStorage.clear()
    //navigate to home page

    this.router.navigateByUrl("/")
    
  }
  edit()
  {
    this.router.navigateByUrl("/editProfile");
  }



  selectedImage(event:any)
  {
      if(event.target.files.length>0)
      {
          const file=event.target.files[0];
          this.image=file
      }
       
  }


}
