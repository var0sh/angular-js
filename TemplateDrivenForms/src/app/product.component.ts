import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Product } from './product.model';
import { ProductRepository } from './repository.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  model: ProductRepository = new ProductRepository();
  newProduct: Product = new Product();
  formSubmited: boolean = false;

  constructor() { }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log(`New Product: ${this.jsonProduct}`);
  }

  log(x: any) {
    console.log(x);
  }

  getValidationErrors(state: any, key: string) {
    let ctrlName: string = state.name || key;
    let messages: string[] = [];

    if (state.errors) {
      for(let errorName in state.errors) {
        switch(errorName) {
          case 'required':
            messages.push(`You must enter a '${ctrlName}'.`);
            break;
          case 'minlength':
            messages.push(`Minimum 4 characters for '${ctrlName}'.`);
            break;
          case 'pattern':
            messages.push(`'${ctrlName}' contains illegal characters.`);
            break;
        }
      }
    }

    return messages;
  }

  submitForm(form: NgForm) {
    console.log(form);

    this.formSubmited = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmited = false;
    }
  }

  getFormValidationErrors(form: NgForm): Array<String> {
    let messages: string[] = [];

    Object.keys(form.controls).forEach(k => {
      console.log(k); // name
      console.log(form.controls[k]);

      this.getValidationErrors(form.controls[k], k).forEach(message => messages.push(message));

    })

    return messages;
  }

}
