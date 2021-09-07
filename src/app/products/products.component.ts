import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private toastr: ToastrService) { }
  products: any;
  ngOnInit(): void {
    this.listAllProducts();
  }

  listAllProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      let datas = res.rows;
      console.log("hari",datas);
      let productData = datas.map((obj: any) => obj.doc);
      this.products = productData;

    });
  }
  delete(id: string, rev: string) {
    let cfm = confirm("Do you want to delete ?");
    if (cfm) {

      this.productService.deleteData(id, rev).subscribe(res => {
        this.toastr.success("item deleted successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1500)


      }), (err: any) => {
        console.log(err.message.response);
      };

    }
  }
}



