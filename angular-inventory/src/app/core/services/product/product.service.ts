import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'api/products'
  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.productUrl)
}

}
