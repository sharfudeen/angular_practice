import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {
    path: "",
    component: LandingComponent
  },
  {
    path: "products",
    component: ProductListComponent
  },
  {
    path: "product/:id",
    component: ProductComponent
  }
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, RouterLink]
})
export class FrontEndModule { }
