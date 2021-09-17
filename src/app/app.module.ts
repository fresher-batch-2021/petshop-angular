import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';
// import { ProductsComponent } from './products/products.component';
// import { EditproductsComponent } from './editproducts/editproducts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{GoogleChartsModule } from'angular-google-charts';
import{HTTP_INTERCEPTORS } from '@angular/common/http';
// import { ToastrModule } from 'ngx-toastr';
// import { AddstockComponent } from './addstock/addstock.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { ErrorInterceptor } from './error.interceptor';
// import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { ElementrefDirective } from './elementref.directive';
import {MatButtonModule} from '@angular/material/button';
// import{MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AddproductComponent,
    UsersComponent,
    OrdersComponent,
    DashboardComponent,
    ContentComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MatButtonModule,
    GoogleChartsModule.forRoot(),
   

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
