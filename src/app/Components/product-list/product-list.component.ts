import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductDto } from 'src/app/Dto/ProductDto';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() select = new EventEmitter<ProductDto>();
  selectedProduct : ProductDto;
  products: ProductDto[];

  constructor(private productService : ProductService) { }

  async ngOnInit() {
    this.products = await this.productService.getAll();
  }

  async delete(id: number){
    await this.productService.delete(id);
    this.ngOnInit();
  }

  onSelectElement(product:ProductDto){
    this.select.emit(product);
  }
}
