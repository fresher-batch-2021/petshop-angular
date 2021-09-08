import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.css']
})
export class AddstockComponent implements OnInit {
  id:string;
  constructor(private route:ActivatedRoute, private productService:ProductService, private toastr:ToastrService, private router:Router) { 
    this.id=this.route.snapshot.params["id"];
  }
  productName:string="";
  category:string="";
  quantity:number=0;
  ngOnInit(): void 
  {
    this.getProduct();
  }

product:any;
getProduct(){
  this.productService.getProduct(this.id).subscribe((res:any)=>{
    this.product=res;
  });
}
stockQuantity=0;
type="ADD";
edit(){
  try{
if(this.type=="ADD"){
this.product.quantity=this.product.quantity+this.stockQuantity;
}
else if(this.type=="RETURN"){
  this.product.quantity=this.product.quantity-this.stockQuantity;
}
this.productService.updateProduct(this.product).subscribe((res:any)=>{
  let data= res;
  this.toastr.success("Item is update");
  this.router.navigateByUrl("product");
});

  } catch(err){
    this.toastr.error("Update Failed");
    
  }
}
}
