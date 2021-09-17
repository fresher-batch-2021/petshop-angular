export class Datatype
 {
   _id!:string;
   _rev!:string;
   productName!:string;
   price!:number;
   imageUrl!:string;
   category!:string;
   quantity!:number;

   setdata(addProduct:any)
   {
       this.productName = addProduct.productName;
       this.imageUrl=addProduct.imageUrl;
       this.price=addProduct.price;
       this.quantity=addProduct.quantity;
       this.category=addProduct.category;
   }
}
