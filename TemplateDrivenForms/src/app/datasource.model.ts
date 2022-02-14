import { Product } from "./product.model";

export class SimpleDataSource {
    private products: Product[];

    constructor() {
        this.products = new Array<Product>(
            new Product(1, 'Phone 1', 'Good Phone', '1.jpg', 1000),
            new Product(2, 'Phone 2', 'Good Phone', '2.jpg', 2000),
            new Product(3, 'Phone 3', 'Good Phone', '3.jpg', 3000),
            new Product(4, 'Phone 4', 'Good Phone', '4.jpg', 4000),
            new Product(5, 'Phone 5', 'Good Phone', '5.jpg', 5000),
        )
    }

    getProducts(): Product[] {
        return this.products; 
    }

}