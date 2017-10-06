import { Component, OnInit } from '@angular/core';
import {ProductsServiceService} from '../Services/products-service.service';
import {Product} from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsServiceService]
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productAPIService: ProductsServiceService) { }

  ngOnInit() {
    this.productAPIService.getAllProducts()
      .subscribe((products) => {
      this.products = products;
      });
  }
 // dssf
}
