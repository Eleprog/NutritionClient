import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnergyValueDto } from 'src/app/Dto/EnergyValueDto';
import { NewProductDto } from 'src/app/Dto/NewProductDto';
import { ProductDto } from 'src/app/Dto/ProductDto';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  @Output() onAdded = new EventEmitter();
  form: FormGroup;
  isAdding: boolean;
  title: string;
  _product: ProductDto;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    this.initForm();
  }

  public set product(value: ProductDto) {
    this._product = value;
    this.initForm();
  }

  async onSubmit() {
    if (!this.form.valid) {
      return;
    }

    this.isAdding = true;

    const id: number = this.form.controls['id'].value;
    const product = this.createProduct();
    let result: any;
    if (id > 0) {
      result = await this.productService.update(id, product);
    }
    else {
      result = await this.productService.create(product);
      this.onAdded.emit();
      this.form.reset({ id: 0, name: '', cost: 0, proteins: 0, fats: 0, carbohydrates: 0 });
    }

    console.log(result);
    this.isAdding = false;
  }

  ngOnInit() {
    this.title = 'Создание нововго продукта';
    this.route.queryParams.subscribe(async params => {
      const id = params['ingredientId'];
      if (!id) {
        return;
      }

      this.product = await this.productService.getById(id);
      this.title = 'Редактирование продукта'
    });
  }

  private createProduct(): NewProductDto {
    return new NewProductDto(
      this.form.controls['name'].value,
      Number(this.form.controls['cost'].value),
      Number(this.form.controls['proteins'].value),
      Number(this.form.controls['fats'].value),
      Number(this.form.controls['carbohydrates'].value));
  }

  private initForm() {
    let initProduct: ProductDto;
    if (this._product) {
      initProduct = this._product;
    }
    else {
      initProduct = new ProductDto(0, '', 0, new EnergyValueDto(0, 0, 0, 0));
    }

    this.form = this.formBuilder.group({
      'id': [initProduct.id],
      "name": [initProduct.name, [Validators.required]],
      "cost": [initProduct.cost, [Validators.min(0)]],
      "proteins": [initProduct.energyValue.proteins, [Validators.min(0)]],
      "fats": [initProduct.energyValue.fats, [Validators.min(0)]],
      "carbohydrates": [initProduct.energyValue.carbohydrates, [Validators.min(0)]],
    });
  }
}
