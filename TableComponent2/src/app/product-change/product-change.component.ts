import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductListingComponent } from '../product-listing/product-listing.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-change',
  templateUrl: './product-change.component.html',
  providers: [ ProductService ]
})
export class ProductChangeComponent implements OnInit {

  @Input() editPrd: Product;
  prdList: ProductListingComponent;

  constructor(private productService: ProductService) { 
    
  }

  ngOnInit(): void { }

  saveChanges(id: number, name: string, price: string, imageUrl: string, desc: string) {
    this.productService.saveChanges(id, name, price, imageUrl, desc)
  }

}
