import { Component, Input, OnInit } from '@angular/core';
import { EnergyValueDto } from 'src/app/Dto/EnergyValueDto';
import { ProductDto } from 'src/app/Dto/ProductDto';

@Component({
  selector: 'ingredient-description',
  templateUrl: './ingredient-description.component.html',
  styleUrls: ['./ingredient-description.component.css']
})
export class IngredientDescriptionComponent implements OnInit {
  @Input() product: ProductDto;
  constructor() {
    this.product = new ProductDto(0, '', 0, new EnergyValueDto(0, 0, 0, 0));
  }

  ngOnInit(): void {
  }

  setProduct(product: ProductDto) {
    this.product = product;
  }
}
