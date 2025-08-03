import { Component } from '@angular/core';
import { Productservice } from '../../../services/product/productservice';
import { Router } from '@angular/router';
import { ShoppingItem } from '../../../shared/Models/ShoppingItem.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-route-list',
  imports: [
    CommonModule
  ],
  templateUrl: './demo-route-list.html',
  styleUrl: './demo-route-list.css'
})
export class DemoRouteList {
list : ShoppingItem[] = []

constructor(
  private listService : Productservice,
  private router : Router
) {
  this.getList();
}

getList() {
this.list = this.listService.getItems();
}

navigate(id: number) {
this.router.navigateByUrl('/demo/routing-details/'+ id)

// this.router.navigateByUrl(`/demo/detail/${id}`)
}

navigateResolver(id: number) {
this.router.navigateByUrl('/demo/resolver/'+ id)
// this.router.navigateByUrl(`/demo/detail/${id}`)
}



}
