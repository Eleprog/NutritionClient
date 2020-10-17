import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ProductDto } from 'src/app/Dto/ProductDto';
import { ProductService } from 'src/app/product.service';
import { IngredientDescriptionComponent } from '../ingredient-description/ingredient-description.component';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() select = new EventEmitter<ProductDto>();
  selectedProduct: ProductDto;
  products: ProductDto[];
  isShowDescription: Boolean;
  selectedId: Number;

  constructor(private productService: ProductService) { }

  async ngOnInit() {
    this.products = await this.productService.getAll();
    this.productService.updateProducts.subscribe(async () => this.products = await this.productService.getAll());
  }

  selectProduct(product: ProductDto) {
    if (this.selectedProduct && this.selectedProduct.id == product.id) {
      this.clearSelect();
    }
    else {
      this.selectedProduct = product;
      this.select.emit(product);
    }
  }

  clearSelect() {
    this.selectedProduct = null;
  }

  // async delete(id: number) {
  //   await this.productService.delete(id);
  //   this.ngOnInit();
  // }

  // onSelectElement(product: ProductDto) {
  //   this.selectedId = product.id;
  //   this.select.emit(product);
  //   this.isShowDescription = this.selectedId > 0;
  // }

  // clearSelectedElement() {
  //   this.selectedId = 0;
  // }
}
