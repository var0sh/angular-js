import { Component } from "@angular/core";
import { Product } from "./product.model";
import { ProductRepository } from "./repository.model";

@Component({
    selector: "app",
    template: `
        {{ text | summary : 1 }}
    `,
    styleUrls: ["product.component.css"]
})

export class ProductComponent {
    // model: ProductRepository = new ProductRepository();
    // disabled: boolean = false;
    // email: any = 'email@gmail.com';
    // today: number = Date.now();
    // title: string = 'Furkan Akçatepe';
    // students: number = 234723;
    // price: number = 50.78;
    // completed: number = 0.54;
    text: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, cupiditate.'


    // getClasses(id: number): string {
    //     let product = this.model.getProductById(id);
    //     return (product.price <= 1000 ? "bg-info" : "bg-secondary") + " m-2 p-2"
    // }

    // getClassMap(id: number): object {
    //     let product = this.model.getProductById(id);
        
    //     return {
    //         "bg-info": product.price <= 1000,
    //         "bg-secondary": product.price > 1000,
    //         "text-center text-white": product.name == 'Phone2'
    //     }
    // }

    // onSubmit($event: any) {
    //     $event.stopPropagation();
    //     console.log(`button was clicked`);
    //     console.log($event);
    // }

    // onDivClicked() {
    //     console.log(`div was clicked`);
        
    // }

    // onKeyUp1(value: any) {
    //     console.log(value);
    // }

    // onKeyUp2() {
    //     console.log(this.email);
    // }


}