import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewProductDto } from './Dto/NewProductDto';
import { ProductDto } from './Dto/ProductDto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly url:string = 'https://localhost:5001/api/product';

  constructor(private http: HttpClient) {
  }

  async getAll(): Promise<ProductDto[]> {
    return await <Promise<ProductDto[]>>this.http.get(this.url).toPromise();
  }

  async create(product: NewProductDto) {
    return await this.http.post(this.url, product).toPromise();
  }

  async delete(id: number) {
    const deletingUrl = `${this.url}/${id}`;
    return await this.http.delete(deletingUrl).toPromise();
  }
}
