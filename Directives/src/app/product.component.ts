import {Component} from "@angular/core";
import { Product } from "./product.model";
import { ProductRepository } from './repository.model';

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]})
export class ProductComponent {
    model: ProductRepository = new ProductRepository();
    productName: string = this.model.getProductsById(1).name;

    addProduct() {
        this.model.addProduct(new Product(6, "Samsung S10", "iyi telefon", "1.jpg", 5000))
    }

    deleteProduct(product: Product): void {
        this.model.deleteProduct(product)
    }

    updateProduct(product: Product): any {
        product.name = 'update';
    }

}