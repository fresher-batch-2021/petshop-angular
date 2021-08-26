import { Component, OnInit } from '@angular/core';
import{ OrderService} from '../order.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }
listOrders:any;
  ngOnInit(): void {
    this.orders();
  }
  orders(){
    OrderService.listOfOrders().then((res:any)=>{
      let data = res.data.rows;
      this.listOrders=data.map((obj:any)=>obj.doc);
    }).catch((err:any)=>{
      console.log("err"+err.data);
    });
  }

}
