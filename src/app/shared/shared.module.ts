import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
   
  ]
})
export class SharedModule { }
