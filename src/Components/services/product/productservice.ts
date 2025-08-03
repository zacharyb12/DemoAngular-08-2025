import { Injectable } from '@angular/core';
import { ShoppingItem } from '../../shared/Models/ShoppingItem.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Productservice {
  listProduct : ShoppingItem[] = [
      {
        id: 1,
        name: 'Product 1',
        quantity: 1,
      },
            {
        id: 2,
        name: 'Product 2',
        quantity: 2,
      },
       { 
        id: 3,
        name: 'Product 3',
        quantity: 3,
      }
  ];

  constructor() { }

  getProducts(){
    return this.listProduct;
  }

  addItem(item : string) {
    const exist = this.listProduct.find((el) => el.name === item);
    if(exist){
      exist.quantity++;
    }
    else{
      const newItem : ShoppingItem= {
        id: this.listProduct.length + 1,
        name: item,
        quantity: 1
      }
      this.listProduct.push(newItem);
    }
  }

  removeItem(id : number){
    console.log('remove item', id);
    this.listProduct = this.listProduct.filter((item) => item.id !== id)
  }

  addQuantity(id : number) {
  const item = this.listProduct.find((item) => item.id === id);
  if(item){
  item.quantity++;
  }
  }

  removeQuantity(id : number) {
    const item = this.listProduct.find((item) => item.id === id);
     
    if(item){
        if(item.quantity > 1) {
          item.quantity--;
        }
        else{
          this.removeItem(id);
        }
  }
  }


    items : ShoppingItem[] = [
    { id: 1, name: 'Milk', quantity: 2 },
    { id: 2, name: 'Bread', quantity: 1 },
    { id: 3, name: 'Eggs', quantity: 12 },
    { id: 4, name: 'Butter', quantity: 1 },
    { id: 5, name: 'Cheese', quantity: 1 }
  ]


  getItems() {
    return this.items;
  }

  getById(id : number) : ShoppingItem | null {
    return this.items.find((item) => item.id === id) || null;

  }

    getByIdObservable(id : number) : Observable<ShoppingItem | null> {
    return of(this.items.find((item) => item.id === id) || null);
  }

}
