import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EnergyValueDto } from 'src/app/Dto/EnergyValueDto';
import { ProductDto } from 'src/app/Dto/ProductDto';

@Component({
  selector: 'ingredient-description',
  templateUrl: './ingredient-description.component.html',
  styleUrls: ['./ingredient-description.component.css']
})
export class IngredientDescriptionComponent implements OnInit {
  @Input() product: ProductDto;
  @Output() onClose = new EventEmitter();
  @Output() onEdit = new EventEmitter<ProductDto>();

  constructor() {
    this.product = new ProductDto(0, '', 0, new EnergyValueDto(0, 0, 0, 0));
    NgClass
  }

  ngOnInit(): void {
  }

  close() {
    this.onClose.emit();
  }

  edit(){
    this.onEdit.emit(this.product);    
  }
}
