import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private productService:ProductService, private orderService:OrderService,private spinner:NgxSpinnerService  ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
    },1000);
    this.orderChart();
  }
  orders: any;
  amount: any;
  getOrderAmount(order:any){
    let totalAmount = 0;
    let products = order.products;
    products.forEach( (obj:any)=>{
      totalAmount += obj.price;
    })
    return totalAmount;
 
  }

  prepareRevenueChartData(orders:any){
    //group by date
    let salesData = _.groupBy(orders, 'date');
      console.table(salesData)
      let keys = Object.keys(salesData);
      console.table('keys',keys);
      this.revenueData = [];
      
        for(let orderDate of keys){
            console.log(orderDate);
            let totalAmount = 0;
            let sales = salesData[orderDate];
            console.table(sales);
            //iterate orders and get total amount
            for(let sale of sales){
              console.log(sale);
              totalAmount += parseInt(sale.totalAmount);                
            }
            let column = [ orderDate, totalAmount];
            this.revenueData.push(column); //store in chart data array
        }
        console.log(this.revenueData);

  }
  orderChart() {
    this.orderService.listOfOrders().subscribe((res: any) => {
      let orders = res.rows.map ((obj:any)=> obj.doc);
      console.table(orders);
      this.prepareRevenueChartData(orders);
    });
  }
  myType: any = 'ColumnChart';
  PieChart: any = 'PieChart';
  pointSize: any = 30;
  revenueData: any = [];
  productData:any = [];
  
  
  
  barData: any = [];
 
  options = {
    'title': 'Total products sold',
    'width': 500,
    'height': 250,
    'is3D': true
  };
  
  
  rowChartOptions = {
    'title': 'Daily Sales',
    'width': 500,
    'height': 250,
  };
}
