import { Component, OnInit } from '@angular/core';
import { ValidationService } from '../validation.service';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private validator:ValidationService ,private productService:ProductService, private route:Router) { }
  productName:string="";
  price:number=0;
  description:string="";
  imageUrl:any;
  category:string="";
  quantity:number=0;
  ngOnInit(): void {
  }
  onFileUpload(event:any)
  {
    this.imageUrl=event.target.files[0].name;
    
  }

  product = {
    productName :"",
    price: 0,
    description:"",
    imageUrl :"",
    category:"",
    quantity: 0
  }
  


  addProduct()
  {
  
   let name=this.productName;
   let price=this.price;
   let description=this.description;
   let imageUrl=this.imageUrl;
   let category=this.category;
   let quantity=this.quantity;
   
   try
   {
     this.validator.ValidateName(name,"Enter your name")
     let productObj:any={
       productName:name,
       price:price,
       description:description,
       imageUrl:imageUrl,
       category:category,
       quantity:quantity
     };
     this.productService.addDatas(productObj)
     .then((res:any)=>
      {
        let data=res.data;
        console.log(data);
        
        this.route.navigate(['../product'])
        // alert("working");
     }).catch((err:any)=>
      {
        console.log(err.response.message);
        alert("error");

      });
    
      
    }
    catch{(err:any)=>
      {
        console.log(err.message);
        alert(err.message.response);
        alert("cant add products");
      }}
   
  }

}
