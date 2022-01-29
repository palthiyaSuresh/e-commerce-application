import { Component, OnInit } from '@angular/core';
import {MyServicesService} from '../services/my-services.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userObj:any;
  value:any;
  editForm = new FormGroup({
    gender: new FormControl(),
    location:new FormControl(),
    number: new FormControl()
  })

  constructor(private myServiceService:MyServicesService,private router:Router) { }

  ngOnInit(): void {
   
  }
  save(){}
  // save()
  // {
  //   console.log("edit form",this.editForm.value)
  //   this.userObj= sessionStorage.getItem("userObj")
  //  this.userObj=JSON.parse(this.userObj);
  //    this.myServiceService.edit(this.editForm.value,this.userObj.fname).subscribe(
  //    data=>{
  //      if(data["messege"]=="success")
  //      {
          
  //        this.router.navigateByUrl("/profile")
  //      }
       

  //    },
  //    err=>{
  //       alert("something went wrong please try again!")
  //    }
  //    )


    
    
  // }

}
