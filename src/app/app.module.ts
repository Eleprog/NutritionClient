import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { IngredientDescriptionComponent } from './Components/ingredient-description/ingredient-description.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { RouterModule } from '@angular/router';
import { CreateMenuComponent } from './Components/create-menu/create-menu.component';
import { MenuPageComponent } from './Components/menu-page/menu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    IngredientDescriptionComponent,
    CreateProductComponent,
    CreateMenuComponent,
    MenuPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule,
    RouterModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
