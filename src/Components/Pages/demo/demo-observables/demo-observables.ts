import { Component } from '@angular/core';
import { ObservableService } from '../../../services/observable/observable-service';
import { Subscription } from 'rxjs';
import { Product } from '../demo-directives/demo-directives';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-observables',
  imports: [
    CommonModule
  ],
  templateUrl: './demo-observables.html',
  styleUrl: './demo-observables.css'
})
export class DemoObservables {

counterValue: number | null = null;

  subscription?: Subscription;

  products : Product[] = [];

  constructor(private observableService: ObservableService) {}

  // Méthode pour démarrer l'observable qui émet un compteur
  // On s'abonne à l'observable pour recevoir les valeurs émises
  startCounter() {
    // On s'abonne à l'observable retournée par la méthode getCounter
    this.subscription = this.observableService.getCounter().subscribe({
      next: (value) => this.counterValue = value,
      complete: () => console.log('Observable terminé'),  
    });
  }

  // Méthode pour se désabonner de l'observable
  // Cela arrête la réception des valeurs émises par l'observable
  stopCounter() {
    this.subscription?.unsubscribe();
  }



  // a la destruction du composant, on nettoie l'abonnement
  // pour éviter les fuites de mémoire
  ngOnDestroy() {
    this.stopCounter(); // Nettoyage si le composant est détruit
  }



  getShoppingItem() {
    this.observableService.getShoppingItem().subscribe({
      next: (item) => {
        this.products.push(item);
      },
      complete: () => console.log('Observable de produits terminé'),
    });
  }
}
