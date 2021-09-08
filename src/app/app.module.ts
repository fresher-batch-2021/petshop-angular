import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{GoogleChartsModule } from'angular-google-charts';
import{HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AddstockComponent } from './addstock/addstock.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    
    HomeComponent,
    ContactComponent,
    CartComponent,
    AdminComponent,
    AdminheaderComponent,
    AddproductComponent,
    UsersComponent,
    OrdersComponent,
    ProductsComponent,
    EditproductsComponent,
    DashboardComponent,
    AddstockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    GoogleChartsModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
