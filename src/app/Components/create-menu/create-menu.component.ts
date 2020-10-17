import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDto } from 'src/app/Dto/ProductDto';

@Component({
  selector: 'create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  readonly ingredients: ProductDto[];
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.ingredients = new Array();
    this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.form = this.formBuilder.group({
      "name": new FormControl("Название меню", Validators.required),
    });
  }

  addIngredient(product: ProductDto) {
    this.ingredients.push(product);
  }

  removeIngredient(id : number){
    const index = this.ingredients.findIndex((value)=> value.id == id);
    this.ingredients.splice(index);
  }

  onSubmit() {

  }
}
