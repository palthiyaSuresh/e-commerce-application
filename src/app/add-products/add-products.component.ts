import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MyServicesService} from '../services/my-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  typeValue:any;
  brandValue:any;
  seriesValue:any;
  imageData:any;  
  user:any;
   file!:File;
  

  
  
    addProduct=new FormGroup({
    productImage:new FormControl(null),
    productType:new FormControl(null),
    productBrand:new FormControl(null),
    productSeries:new FormControl(null),
    price:new FormControl(null),
    year:new FormControl(null),
    waranty:new FormControl(null),
   
    
  })

  constructor(private myServiceService:MyServicesService,private router:Router) {
    
    
   
  
   }
  ngOnInit(): void {
    
  }

   
  
  
  
  


  onChange(event:any)
  {
     
     
    if(event.target.files.length>0)
    {
      
      this.file=event.target.files[0];
       
      const reader=new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload=()=>{
        this.imageData=reader.result;
      
    }
  }
  

}
insertProduct()
{
   
     
 
  this.user= sessionStorage.getItem("userObj");
  this.user=JSON.parse(this.user);
  let formData=new FormData();
  let userObj=this.addProduct.value;
  userObj["fname"]=this.user.fname;
  formData.append("photo", this.file);
   
  formData.append("userObj",JSON.stringify(userObj));
  
  
  this.myServiceService.addProduct(formData,this.addProduct.value.productType).subscribe(
    result=>{
      
            
             alert("product  inserted successfully");
             
             this.router.navigateByUrl("/profile");
           
    },
    err=>{
      alert("something went wrong")
    }
  )
 
     
}

}
