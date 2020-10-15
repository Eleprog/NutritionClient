import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMenuComponent } from './Components/create-menu/create-menu.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product/create', component: CreateProductComponent },
  { path: 'menu/create', component: CreateMenuComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
