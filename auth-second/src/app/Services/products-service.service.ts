import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {ProductsApiService} from './products.api.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductsServiceService {

  products: Product[];

  constructor(private apiService: ProductsApiService) { }

  // get all the products....
  getAllProducts(): Observable<Product[]> {
    return this.apiService.getAllProducts();
  }
}
