import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  minVal:any;
  maxVal:any;
  arrayObj:any;

  constructor() { }

  ngOnInit(): void {
  }

}
