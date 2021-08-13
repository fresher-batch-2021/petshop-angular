import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email:string="";
  password:string="";
  confirmpassword:string="";
  forgetpassword(){
    if(this.password.length<8){
      alert("password must be 8 character")
    }else if(this.password!=this.confirmpassword){
      alert("new password and confirm password does not match")
    }else{
      alert("password changed")
      window.location.href="/login"
    }
  }

}
