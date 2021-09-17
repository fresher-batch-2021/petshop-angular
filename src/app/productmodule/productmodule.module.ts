import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductmoduleRoutingModule } from './productmodule-routing.module';
import { AddstockComponent } from '../addstock/addstock.component';
import { EditproductsComponent } from '../editproducts/editproducts.component';
import { ElementrefDirective } from '../elementref.directive';
import { ProductsComponent } from '../products/products.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HeaderComponent } from '../header/header.component';
// import { ContentComponent } from '../content/content.component';



@NgModule({
  declarations: [
    ProductsComponent,
    EditproductsComponent,
    // HeaderComponent,
    AddstockComponent,
    ElementrefDirective
    // ContentComponent
  ],
  imports: [
    CommonModule,
    ProductmoduleRoutingModule,
    FormsModule,
    DataTablesModule,
    NgxSpinnerModule,
    MatButtonModule,
    MatDialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductmoduleModule { }
