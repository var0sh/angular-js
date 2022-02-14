import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CategoriesComponent } from './admin-categories/admin-categories.component';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from '../auth.service';


@NgModule({
  declarations: [
    AdminComponent,
    AdminProductsComponent,
    CategoriesComponent
  ],
  providers: [
    AuthGuard, AuthService
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
