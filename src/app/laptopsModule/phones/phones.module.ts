import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhonesRoutingModule } from './phones-routing.module';
import { PhonesComponent } from './phones.component';


@NgModule({
  declarations: [
    PhonesComponent
  ],
  imports: [
    CommonModule,
    PhonesRoutingModule
  ]
})
export class PhonesModule { }
