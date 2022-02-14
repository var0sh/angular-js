import { Component } from '@angular/core';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor() { }
  model: ProductRepository = new ProductRepository();
}
