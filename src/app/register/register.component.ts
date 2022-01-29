import { Component, OnInit } from '@angular/core';
import {MyServicesService} from '../services/my-services.service';
import {Router} from '@angular/router';
import {FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  addLoanTypeForm=new FormGroup({
    userName:new FormControl(),
    fname:new FormControl(),
    password:new FormControl(),
    confirmPassword:new FormControl()
    
  })


  constructor(private myServicesService:MyServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  createUser()
  {
    // this.router.navigateByUrl("/login");
    delete this.addLoanTypeForm.value.confirmPassword;
    this.myServicesService.createUser(this.addLoanTypeForm.value).subscribe(
      data=>{
        if(data["messege"]=="success")
        {
          this.router.navigateByUrl("/login")
        }
        if(data["messege"]=="failed")
        {
          alert("something went wrong please try again")
        }
        if(data["messege"]=="user existed")
        {
          alert("This gmail/number alredy used .please try with another gmail/number")
        }

      },
      err=>{
        console.log("something went wrong!")
      }
    )
}

}
