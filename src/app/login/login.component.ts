import { Component, OnInit } from '@angular/core';
import {MyServicesService} from '../services/my-services.service';
import {Router} from '@angular/router';
import{FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addLoanTypeForm = new FormGroup({
    fname: new FormControl(),
    password:new FormControl()
  })

  constructor(private myServicesService:MyServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  logIn()
  {
     
      this.myServicesService.loginUser(this.addLoanTypeForm.value).subscribe(
        data=>{
            if(data["messege"]=="no user existed")
            {
              alert("invalid username......! \n(or) register into the website")
               
            }
            if(data["messege"]=="passwords not matched")
            {
              alert("invalid password")
            }
            if(data["messege"]=="login successfull")
            {
              
              sessionStorage.setItem("token",data["token"])
              let dmObj=JSON.stringify(data["userObj"])
              sessionStorage.setItem("userObj",dmObj)
              alert("login successfull");
              this.router.navigateByUrl("home");
              
            }
        },
        err=>{
          alert("something went wrong! please try again")
        }
      )
     
    
     
  }
  

}
