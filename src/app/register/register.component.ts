import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username:string="";
  email:string="";
  password:string="";
  confirmpassword:string="";
  register(){
    alert("reg");
    const name=this.username;
    const email=this.email;
    const password= this.password;
    const confirmpassword = this.confirmpassword;
    if(password.length < 8){
      alert("password must be 8 character");
  }
  else if(password!=confirmpassword){
      alert("password and confirm password not matched")
  }
  else{
      const regdata = {
          "name":name,
          "email":email,
          "password":password
      };
  alert(email);
  console.log(regdata);
  let url="https://product-mock-api.herokuapp.com/petshopapp/api/v1/auth/register"
 axios.post(url,regdata).then(res=>{
     let data = res.data;
     console.log(data);
     alert("register successfully");
     window.location.href='/login';
 }).catch(err=>{
     console.error(err);
     alert("error")
 });
 

  }

}
}
