import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../product.service';
import { ValidationService } from '../validation.service';


@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute, private validator: ValidationService, private productService: ProductService, private router: Router, private toastr: ToastrService) {
    this.id = this.route.snapshot.params["id"];

  }
  productName: string = "";
  price: number = 0;
  imageUrl: any;
  category: string = "";
  quantity: number = 0;
  ngOnInit(): void {
    this.getProduct();
  }
  imageName = '';
  onFileUpload(event: any) {
    this.imageUrl = event.target.files[0].name;
    // alert(this.imageUrl)
    this.imageName = this.imageUrl;
  }
  product: any;

  getProduct() {

    this.productService.getProduct(this.id)
      .subscribe((res: any) => {

        console.log(res);
        this.product = res;

      });
  }

  edit() {
    try {
      this.validator.ValidateName(this.product.productName, "Enter your name");
      console.log(this.product)
      this.productService.updateProduct(this.product).subscribe((res: any) => {
        let data = res;
        this.toastr.success("update successfully");
        setTimeout(() => {
          this.router.navigate(['/product']);
        }, 500)

      });

    }
    catch (err) {
      console.log(err.message);
      alert("cant update");
    }

  }


}

