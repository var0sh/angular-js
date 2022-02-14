import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../product';
import { ProductChangeComponent } from '../product-change/product-change.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-listing',
  templateUrl: './product-listing.component.html'
})
export class ProductListingComponent implements OnInit {

  products: Product[];
  prdChange: ProductChangeComponent;
  editPrd: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(prds => {
        this.products = prds;
      });
  }

  editProduct(prd: Product) {
    this.editPrd = prd;
  }

  deletePrd(product: Product) {
    this.productService.deletePrd(product);
  }

}
