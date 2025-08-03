import { Component } from '@angular/core';
import { Productservice } from '../../../services/product/productservice';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ShoppingItem } from '../../../shared/Models/ShoppingItem.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-route-details',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './demo-route-details.html',
  styleUrl: './demo-route-details.css'
})
export class DemoRouteDetails {
  item! : ShoppingItem;

  id : number;
  
  constructor(
    private listService : Productservice,
    private route : ActivatedRoute
  ){
    this.id  = +this.route.snapshot.params['id'];
    this.getItem();

  }
  
  getItem() {
    if(this.id){
      const foundItem = this.listService.getById(this.id);
      if (foundItem) {
        this.item = foundItem;
      }
      console.log(this.item); 
}
}
}
