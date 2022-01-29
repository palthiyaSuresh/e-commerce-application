import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaptopsRoutingModule } from './laptops-routing.module';
import { LaptopsComponent } from './laptops.component';


@NgModule({
  declarations: [
    LaptopsComponent
  ],
  imports: [
    CommonModule,
    LaptopsRoutingModule
  ]
})
export class LaptopsModule { }
