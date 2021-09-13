import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddstockComponent } from './addstock/addstock.component';
import { AuthGuard } from './auth.guard';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditproductsComponent } from './editproducts/editproducts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
{path:'addproduct',component:AddproductComponent ,canActivate:[AuthGuard]},
{path:'listuser',component:UsersComponent,canActivate:[AuthGuard]},
{path:'listorder',component:OrdersComponent,canActivate:[AuthGuard]},
{path:'product',component:ProductsComponent,canActivate:[AuthGuard]},
{path:'editproducts/:id',component:EditproductsComponent,canActivate:[AuthGuard]},
{path:'',component:LoginComponent},
{path:'dashboard',component:DashboardComponent},
{path:'addstock/:id',component:AddstockComponent},
{path:'content',component:ContentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
