import { Component } from '@angular/core';
import { Productservice } from '../../../services/product/productservice';
import { ShoppingItem } from '../../../shared/Models/ShoppingItem.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-services',
  imports: [
    CommonModule
  ],
  templateUrl: './demo-services.html',
  styleUrl: './demo-services.css'
})
export class DemoServices {
  list : ShoppingItem[] = []
  // ancienne methode
constructor(
  private service: Productservice
) { }

//private service = inject(CounterService)

ngOnInit(): void {
this.getProducts()
}

getProducts(){
  this.list = this.service.getProducts();
}

add(product: string){
this.service.addItem(product);
}

remove(id : number){
this.service.removeItem(id);
  this.getProducts();
}

addQuantity(id : number){
this.service.addQuantity(id)
this.getProducts();

}

removeQuantity(id : number){
  this.service.removeQuantity(id)
  this.getProducts();

}
}
