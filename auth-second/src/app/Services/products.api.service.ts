import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ProductsApiService {

  constructor(private http: Http) { }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get(API_URL + '/api/Products/list')
      .map(response => {
        const products = response.json();
        return products.map((product) => new Product(product));
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
