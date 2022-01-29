import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikesRoutingModule } from './bikes-routing.module';
import { BikesComponent } from './bikes.component';
import { KtmComponent } from './ktm/ktm.component';
import { KtmRc200Component } from './ktm-rc200/ktm-rc200.component';
 


@NgModule({
  declarations: [
    BikesComponent,
    KtmComponent,
    KtmRc200Component,
    
  ],
  imports: [
    CommonModule,
    BikesRoutingModule
  ]
})
export class BikesModule { }
