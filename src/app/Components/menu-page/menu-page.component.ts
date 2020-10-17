import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductDto } from 'src/app/Dto/ProductDto';
import { CreateMenuComponent } from '../create-menu/create-menu.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  private selectedProduct: ProductDto;
  @ViewChild('productList', { static: false })
  private productList: ProductListComponent;
  @ViewChild('createMenu', { static: false })
  private createMenu: CreateMenuComponent;

  constructor() { }

  ngOnInit(): void {
  }

  select(product: ProductDto) {
    this.selectedProduct = product;
  }

  addIngredient() {
    this.createMenu.addIngredient(this.productList.selectedProduct);
  }

  add() {

  }
}
