import { Component } from '@angular/core';
import { Productservice } from '../../../services/product/productservice';
import { ShoppingItem } from '../../../shared/Models/ShoppingItem.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-resolver',
  imports: [
    CommonModule
  ],
  templateUrl: './demo-resolver.html',
  styleUrl: './demo-resolver.css'
})
export class DemoResolver {
 item : ShoppingItem | null = null
  // ancienne methode
constructor(
  private service: Productservice,
      private route : ActivatedRoute,
) { 
  this.item = this.route.snapshot.data['item'];
}


}
