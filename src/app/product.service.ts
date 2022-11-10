import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL:string="http://localhost:3000/ProductDetails"
  constructor(private httpclient:HttpClient) { }
  getProducts():Observable<Array<Product>>{

    return this.httpclient.get<Array<Product>>(this.URL)

  }
}
