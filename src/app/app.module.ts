import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from'@angular/common/http';
import{NgxPaginationModule} from 'ngx-pagination';
import { RegisterComponent } from './register/register.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductPageComponent } from './product-page/product-page.component';
import {AuthServiceService} from './AuthService/auth-service.service'
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UploadProductsComponent } from './upload-products/upload-products.component';
import { SearchPipe } from './searchPipe/search.pipe';
 
 
 
 
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CartComponent,
    CartItemsComponent,
    EditProfileComponent,
    AddProductsComponent,
    ProductPageComponent,
    PageNotFoundComponent,
    UploadProductsComponent,
    SearchPipe,
     
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
     
     
     
     
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthServiceService,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
