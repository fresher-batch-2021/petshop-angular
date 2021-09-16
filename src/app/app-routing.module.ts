import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
// import { AddstockComponent } from './addstock/addstock.component';
import { AuthGuard } from './auth.guard';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { EditproductsComponent } from './editproducts/editproducts.component';

import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
// import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
{path:'addproduct',component:AddproductComponent ,canActivate:[AuthGuard]},
{path:'listuser',component:UsersComponent,canActivate:[AuthGuard]},
{path:'listorder',component:OrdersComponent,canActivate:[AuthGuard]},
{path:'product',loadChildren:()=>import("./productmodule/productmodule.module").then(m=>m.ProductmoduleModule)},
// {path:'editproducts/:id',component:EditproductsComponent,canActivate:[AuthGuard]},
{path:'',component:LoginComponent},
{path:'dashboard',component:DashboardComponent},
// {path:'addstock/:id',component:AddstockComponent},
{path:'content',component:ContentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
