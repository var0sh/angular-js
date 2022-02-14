import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { Products } from './product.datasource';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  editPrd: Product;

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(Products);
  }

  editSetProduct(prd: Product) {
    this.editPrd = prd;
  }

  saveChanges(id: number, name: string, price: string, imageUrl: string, desc: string) {
    const arananPrd = Products.find(prd => prd.id == id);
    const index = Products.findIndex(i => i.id == arananPrd?.id);
    
    Products.splice(index, 1, {id, name, price, imageUrl, desc} as Product);
  }

  deletePrd(product: Product) {
    const index = Products.indexOf(product);
    
    Products.splice(index, 1)

  }

}
