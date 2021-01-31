import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const products:Product[] = [
      { id: 11, name: 'Dr Nice',code:'a',unit_price:50,in_stock:true },
      
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(product: Product[]): number {
    return product.length > 0 ? Math.max(...product.map(u => u.id)) + 1 : 11;
  }
}