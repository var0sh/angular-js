import { Product } from "./product.model";

export class SimpleDataSource {
    
    private products: Product[];
    
    constructor() {
        this.products = new Array<Product>(
            new Product(1, 'Phone1', 'good phone', '1.jpg', 1000),
            new Product(2, 'Phone2', 'good phone', '2.jpg', 2000),
            new Product(3, 'Phone3', 'good phone', '3.jpg', 3000),
            new Product(4, 'Phone4', 'good phone', '4.jpg', 4000),
            new Product(5, 'Phone5', 'good phone', '5.jpg', 5000),
            new Product(6, 'Phone6', 'good phone', '6.jpg', 6000),
            new Product(7, 'Phone7', 'good phone', '7.jpg', 7000)
        )
    }

    getProducts(): Array<Product> {
        return this.products;
    }

}