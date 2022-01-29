import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgxPaginationModule} from 'ngx-pagination';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { BmwComponent } from './bmw/bmw.component';
import { Bmwx1Component } from './bmwx1/bmwx1.component';
import { Bmwx7Component } from './bmwx7/bmwx7.component';
import { Bmwz4RoadsterComponent } from './bmwz4-roadster/bmwz4-roadster.component';
import { FordComponent } from './ford/ford.component';
import { FordEcosportComponent } from './ford-ecosport/ford-ecosport.component';
import { FordEndeavourComponent } from './ford-endeavour/ford-endeavour.component';
import { FordMustangFaceliftComponent } from './ford-mustang-facelift/ford-mustang-facelift.component';
import { MaruthiSuzukiComponent } from './maruthi-suzuki/maruthi-suzuki.component';
import { MaruthiSuzukiSCrossComponent } from './maruthi-suzuki-s-cross/maruthi-suzuki-s-cross.component';
import { MaruthiSuzukiSwiftComponent } from './maruthi-suzuki-swift/maruthi-suzuki-swift.component';
import { MaruthiSuzukiXl6Component } from './maruthi-suzuki-xl6/maruthi-suzuki-xl6.component';
import { GeneralBmwComponent } from './general-bmw/general-bmw.component';
import { GeneralCarsComponent } from './general-cars/general-cars.component';
import { GeneralFordComponent } from './general-ford/general-ford.component';
import { GeneralMaruthiComponent } from './general-maruthi/general-maruthi.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

 


@NgModule({
  declarations: [
    CarsComponent,
    BmwComponent,
    Bmwx1Component,
    Bmwx7Component,
    Bmwz4RoadsterComponent,
    FordComponent,
    FordEcosportComponent,
    FordEndeavourComponent,
    FordMustangFaceliftComponent,
    MaruthiSuzukiComponent,
    MaruthiSuzukiSCrossComponent,
    MaruthiSuzukiSwiftComponent,
    MaruthiSuzukiXl6Component,
    GeneralBmwComponent,
    GeneralCarsComponent,
    GeneralFordComponent,
    GeneralMaruthiComponent,
    
     
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }
