import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmwComponent } from './bmw/bmw.component';
import { Bmwx1Component } from './bmwx1/bmwx1.component';
import { Bmwx7Component } from './bmwx7/bmwx7.component';
import { Bmwz4RoadsterComponent } from './bmwz4-roadster/bmwz4-roadster.component';
import { CarsComponent } from './cars.component';
import { FordEcosportComponent } from './ford-ecosport/ford-ecosport.component';
import { FordEndeavourComponent } from './ford-endeavour/ford-endeavour.component';
import { FordMustangFaceliftComponent } from './ford-mustang-facelift/ford-mustang-facelift.component';
import { FordComponent } from './ford/ford.component';
import { GeneralBmwComponent } from './general-bmw/general-bmw.component';
import { GeneralCarsComponent } from './general-cars/general-cars.component';
import { GeneralFordComponent } from './general-ford/general-ford.component';
import { GeneralMaruthiComponent } from './general-maruthi/general-maruthi.component';
import { MaruthiSuzukiSCrossComponent } from './maruthi-suzuki-s-cross/maruthi-suzuki-s-cross.component';
import { MaruthiSuzukiSwiftComponent } from './maruthi-suzuki-swift/maruthi-suzuki-swift.component';
import { MaruthiSuzukiXl6Component } from './maruthi-suzuki-xl6/maruthi-suzuki-xl6.component';
import { MaruthiSuzukiComponent } from './maruthi-suzuki/maruthi-suzuki.component';

const routes: Routes = [ 
  { path: '', component: CarsComponent,children:[ 
    {path:'',component:GeneralCarsComponent},          
    { path:'BMW',component:BmwComponent,children:[                   
            {path:'',component:GeneralBmwComponent}, 
            {path:'bmwx1',component:Bmwx1Component},                  
            {path:'bmwx7',component:Bmwx7Component},
            {path:'bmwz4',component: Bmwz4RoadsterComponent}]
    },           
    { path:'ford',component:FordComponent,children:[
            {path:'',component:GeneralFordComponent},
            {path:'ecosport',component:FordEcosportComponent},
            {path:'endeavour',component:FordEndeavourComponent},
            {path:'mustang',component:FordMustangFaceliftComponent}
          ]
    },
    { path:'maruthisuzuki', component: MaruthiSuzukiComponent,children:[
            {path:'',component:GeneralMaruthiComponent},
            {path:'scross',component:MaruthiSuzukiSCrossComponent},
            {path:'swift',component:MaruthiSuzukiSwiftComponent},
            {path:'xl6',component:MaruthiSuzukiXl6Component}
          ]
    },

]}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
