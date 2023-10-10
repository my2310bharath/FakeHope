import { Component } from '@angular/core';
import { Product } from './Modal';
import { ProductserviceService } from './productservice.service';
import { map } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD';

  product : Product = new Product("",0,0)

  constructor(private proservice : ProductserviceService){

  }
  
  message : any
  addnewProduct(){
    let response = this.proservice.addProducts(this.product)
    response.subscribe((data) => this.message = data)
  }
}
