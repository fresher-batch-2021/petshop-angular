import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AddproductComponent } from '../addproduct/addproduct.component';
import { AddstockComponent } from '../addstock/addstock.component';
import { AuthGuard } from '../auth.guard';
import { EditproductsComponent } from '../editproducts/editproducts.component';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [{path:"",component:ProductsComponent},
// {path:"editproduct/:id",component:EditproductsComponent,canActivate:[AuthGuard]},
// {path:'addproduct',component:AddproductComponent ,canActivate:[AuthGuard]},
// {path:'addstock/:id',component:AddstockComponent}
{
  path:":id",children : [{path:"editproducts",component:EditproductsComponent,canActivate:[AuthGuard]},{path:"addstock",component:AddstockComponent,canActivate:[AuthGuard]}]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductmoduleRoutingModule { }
