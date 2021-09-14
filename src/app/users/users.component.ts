import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UservalidationService } from '../uservalidation.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UservalidationService, private route: Router, private spinner:NgxSpinnerService) { }
  users: any
  ngOnInit(): void {
    this.userList();
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },1000)
  }
  userList() {
    this.userService.getUser().subscribe((res: any) => {
      let data = res.rows;
      let userList = data.map((obj: any) => obj.doc);
      this.users = userList.filter((obj: any) => obj.role == "USER");
    }, (err: any) => {
      console.log("err" + err.data);
    });
  }

}