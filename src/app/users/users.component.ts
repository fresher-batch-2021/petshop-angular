import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UservalidationService } from '../uservalidation.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UservalidationService,private route:Router) { }
  users:any
  ngOnInit(): void {
    this.userList();
  }
  userList(){
    UservalidationService.getUser().then((res:any)=>{
      let data =res.data.rows;
      this.users= data.map((obj:any)=>obj.doc);
    }).catch((err:any)=>{
      console.log("err"+err.data);
    });
    }
  
  // delete(id:any,rev:any){
  //   //
  //   console.log(id);
  //     this.userService.deleteUser(id,rev).then((res=>{
  //       alert("deleted sucessfully");
  //       this.route.navigate(['../users']);
  //     }));
     
  //   }
  

  }