import { Component } from '@angular/core';
import { ObservableService } from '../../../services/observable/observable-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-demo-observables',
  imports: [],
  templateUrl: './demo-observables.html',
  styleUrl: './demo-observables.css'
})
export class DemoObservables {
counterValue: number | null = null;
  subscription?: Subscription;

  constructor(private observableService: ObservableService) {}

  startCounter() {
    this.subscription = this.observableService.getCounter().subscribe({
      next: (value) => this.counterValue = value,
      complete: () => console.log('Observable terminé'),
    });
  }

  stopCounter() {
    this.subscription?.unsubscribe();
  }

  ngOnDestroy() {
    this.stopCounter(); // Nettoyage si le composant est détruit
  }
}
