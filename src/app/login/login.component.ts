import { Component, OnInit } from '@angular/core';
import axios from'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("hi")
  }
  email:string="";
  password:string="";
  login(){
    let email=this.email;
    let password=this.password;
    if(email=="" || email==null || email.trim() ==""){
      alert("please enter the email");
    }
    else if (password.length < 8) {
      alert("password must be in 8 character")
  }
  else {
      const logindata = {
       //    "user": name,
          "email": email,
          "password": password    
      };
      console.log(logindata);
      let url="https://product-mock-api.herokuapp.com/petshopapp/api/v1/auth/login";
      axios.post(url,logindata).then(res=>{
          let data =res.data;
          console.log(data);
          alert("successfully login");
          window.location.href = '/home';
      }).catch(err=>{
          console.error(err);
          alert("unable to login");
      });
   //    alert("successfully login");
    
  }
}
 
}
