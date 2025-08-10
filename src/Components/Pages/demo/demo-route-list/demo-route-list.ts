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

// Comment fonctionne le routing dans Angular
// Le routing permet de naviguer entre différentes pages de l'application
// Ici, nous allons créer une liste de produits et permettre à l'utilisateur de naviguer vers une page de détails pour chaque produit
// Pour ça nous allons simplement passer l'id de l'objet à transmettre dans l'url
// il faut faire trois choses :
// une methode qui redirige vers la page de détails avec l'id du produit
// recuperer l'id dans la page de détails
// definir le paramètre dans notre route ( app.route.ts  ->  /:id )

list : ShoppingItem[] = []

constructor(
  private listService : Productservice,
  // Injection du service de routage pour naviguer vers d'autres pages
  private router : Router
) {
  this.getList();
}

getList() {
this.list = this.listService.getItems();
}

// Méthode pour naviguer vers la page de détails d'un produit
navigate(id: number) {
  // Utilisation du service de routage pour naviguer vers la page de détails
  // Le paramètre id est passé dans l'URL pour identifier le produit
this.router.navigateByUrl('/demo/routing-details/'+ id)

// this.router.navigateByUrl(`/demo/detail/${id}`)
}

// Méthode pour naviguer vers une page avec un resolver
// Le resolver permet de précharger des données avant d'afficher la page
navigateResolver(id: number) {
this.router.navigateByUrl('/demo/resolver/'+ id)
// this.router.navigateByUrl(`/demo/detail/${id}`)
}



}
