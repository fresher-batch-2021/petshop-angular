import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ OrderService} from '../order.service';
import { ProductService } from '../product.service';
import axios from 'axios';
const dbUsername = "apikey-v2-2809fxu62dw0lybt6awh1vn0jxt1srfscx9z33bhudjy";
const dbPassword = "ff4e6d701676a004128c9bdb601b52d2";
const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
const Url = "https://f6c8119d-795e-4261-b941-ec3cbc9a4a29-bluemix.cloudantnosqldb.appdomain.cloud/petshop_order/";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private productService:ProductService , private route:Router) { }
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
  status(updateProductObj:any){
alert("hello")
    const id=updateProductObj._id;
    const rev=updateProductObj._rev;
    updateProductObj.status='delivered';
    const url=Url+id+'?rev='+rev;
    axios.put(url,updateProductObj,{headers:{Authorization:basicAuth}}).then((res=>{
      alert("update succesfull")
      this.route.navigate(['../orders'])
    }));
    
  }

}
