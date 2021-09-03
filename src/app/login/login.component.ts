import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from'axios';
import { ToastrService } from 'ngx-toastr';
import { UservalidationService } from '../uservalidation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private loginService:UservalidationService, private router:Router, private fb : FormBuilder,private toastr:ToastrService) { 
    this.loginForm = this.fb.group({
      email : new FormControl("", [Validators.required, Validators.email]),
      password : new FormControl("", [Validators.required, Validators.minLength(8)])
    })
  }
  user:any;
  ngOnInit(): void {
    let userStr = localStorage.getItem('LOGGED_IN_USER');
    this.user = userStr != null ? JSON.parse(userStr) : null;
    console.log(this.user)

    if(this.user != null ){
      this.router.navigate(['product']);
    }
  }
 
  login(){
      let user =this.loginForm.value;
      const role = "ADMIN";
      this.loginService.loginAuth(user.email,user.password, role)
      .subscribe((res:any)=>{
        
        console.log(res.data)
        let data=res.docs[0];
        localStorage.setItem('LOGGED_IN_USER', JSON.stringify(data))
        let userStr = localStorage.getItem('LOGGED_IN_USER');
        let user = userStr != null ? JSON.parse(userStr) : null;
        if(user.role=="ADMIN"){
          this.toastr.success("welcome Admin");
          this.router.navigate(['product']);

        }
        else{
          this.toastr.error("Only Admin can Logged in");
          this.router.navigate(['login'])
        }
      });
   //    alert("successfully login");
}
  }

 
