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
    this.userService.getUser().subscribe((res:any)=>{
      let data =res.rows;
      this.users= data.map((obj:any)=>obj.doc);
    },(err:any)=>{
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