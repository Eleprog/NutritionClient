import { Component, OnInit } from '@angular/core';
import { EnergyValueDto } from 'src/app/Dto/EnergyValueDto';
import { ProductDto } from 'src/app/Dto/ProductDto';

@Component({
  selector: 'ingredient-description',
  templateUrl: './ingredient-description.component.html',
  styleUrls: ['./ingredient-description.component.css']
})
export class IngredientDescriptionComponent implements OnInit {
  product: ProductDto;
  constructor() { 
    this.product = new ProductDto(0, 'Any product',123,new EnergyValueDto(1,2,3,4));
  }

  ngOnInit(): void {
  }
}
