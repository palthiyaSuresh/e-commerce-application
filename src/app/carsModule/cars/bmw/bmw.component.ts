import { Component, OnInit } from '@angular/core';
import {MyServicesService} from 'src/app/services/my-services.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-bmw',
  templateUrl: './bmw.component.html',
  styleUrls: ['./bmw.component.css']
})
export class BmwComponent implements OnInit {
  val:any;
  minVal:any;
  maxVal:any;
  value:any;
  constructor(private myServicesService:MyServicesService,private router:Router) { }

  ngOnInit(): void {
  }

}
