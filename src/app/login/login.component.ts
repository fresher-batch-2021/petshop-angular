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
      email : new FormControl("", Validators.required),
      password : new FormControl("", Validators.required)
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
  email:any="";
  password:any="";
  login(){
    let email=this.email;
    let password=this.password;
    if(email=="" || email==null || email.trim() ==""){
      this.toastr.error("please enter the email");
    }
    else if (password.length < 8) 
    {
      this.toastr.error("password must be in 8 character")
  }
else{
      const role = "ADMIN";
      this.loginService.loginAuth(email,password)
      .subscribe((res:any)=>{
        
        console.log(res.data)
        let data=res.docs[0];
        localStorage.setItem('LOGGED_IN_USER', JSON.stringify(data))
        let userStr = localStorage.getItem('LOGGED_IN_USER');
        let user = userStr != null ? JSON.parse(userStr) : null;
        if(user.role=="ADMIN"){
          this.toastr.success("welcome admin");
          this.router.navigate(['product']);

        }
        else{
          this.toastr.error   ("your are not admin");
          this.router.navigate(['login'])
        }
      });
   //    alert("successfully login");
}
  }
}
 
