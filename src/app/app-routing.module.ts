import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartComponent } from './cart/cart.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,children:[
    {path:'',component:CartItemsComponent},
    {path:'edit',component:EditProfileComponent}, 
    {path:'add',component:AddProductsComponent}
   ]},
   {path:'product',component:ProductPageComponent},
   {path:'cart',component:CartComponent},
  { path: 'cars', loadChildren: () => import('./carsModule/cars/cars.module').then(m => m.CarsModule) },
  { path: 'bikes', loadChildren: () => import('./bikesModule/bikes/bikes.module').then(m => m.BikesModule) },
  { path: 'laptops', loadChildren: () => import('./laptopsModule/laptops/laptops.module').then(m => m.LaptopsModule) },
  { path: 'phones', loadChildren: () => import('./laptopsModule/phones/phones.module').then(m => m.PhonesModule) },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
