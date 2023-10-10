import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Modal';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http : HttpClient) { }

  addProducts(product: Product){
    return this.http.post('http://localhost:8080/addProduct',product,{responseType : 'text' as 'json'})
  }
}
