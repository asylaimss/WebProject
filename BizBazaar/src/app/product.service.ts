import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './categories';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private client: HttpClient) {
}

getProducts(): Observable<Product[]> {
  return this.client.get<Product[]>(`http://127.0.0.1:8000/api/products`);
}
getProductsById(id: number): Observable<Product> {
  return this.client.get<Product>(`http://127.0.0.1:8000/api/products/${id}`);
}

getProductsByCategories(id: number): Observable<Category[]> {
  return this.client.get<Category[]>(`http://127.0.0.1:8000/api/categories/${id}/products`);
}



} 


