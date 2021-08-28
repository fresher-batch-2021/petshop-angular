import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductsComponent } from './editproducts/editproducts.component';

import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'forgetpassword',component:ForgetpasswordComponent},
{path:'addproduct',component:AddproductComponent},
{path:'listuser',component:UsersComponent},
{path:'listorder',component:OrdersComponent},
{path:'product',component:ProductsComponent},
{path:'editproducts/:id',component:EditproductsComponent},
{path:'',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
