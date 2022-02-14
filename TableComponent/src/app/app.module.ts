import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AdminProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
