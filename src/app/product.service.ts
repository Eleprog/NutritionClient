import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NewProductDto } from './Dto/NewProductDto';
import { ProductDto } from './Dto/ProductDto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly updateProducts = new Subject();
  private readonly url: string = 'https://localhost:5001/api/product';

  constructor(private http: HttpClient) {
  }

  async getAll(): Promise<ProductDto[]> {
    return await <Promise<ProductDto[]>>this.http.get(this.url).toPromise();
  }

  async getById(id: number): Promise<ProductDto> {
    return await <Promise<ProductDto>>this.http.get(this.url + '/' + id).toPromise();
  }

  async create(product: NewProductDto) {
    let result = await this.http.post(this.url, product).toPromise();
    this.updateProducts.next();
    return result;

  }

  async delete(id: number) {
    const deletingUrl = `${this.url}/${id}`;
    let result = await this.http.delete(deletingUrl).toPromise();
    this.updateProducts.next();
    return result;
  }

  async update(id: number, product: NewProductDto) {
    let result = await this.http.put(this.url, product, { params: new HttpParams().set('id', id.toString()) })
      .toPromise();

    this.updateProducts.next();
    return result;
  }
}
