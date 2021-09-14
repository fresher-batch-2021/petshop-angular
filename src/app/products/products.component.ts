import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private productService: ProductService, private toastr: ToastrService,private spinner:NgxSpinnerService) { }
  products: any;
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.listAllProducts();
    
  }

  listAllProducts() {
   
    this.productService.getProducts().subscribe((res: any) => {
      
      let datas = res.rows;
      let productData = datas.map((obj: any) => obj.doc);
      this.products = productData;
      this.dtTrigger.next();

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



