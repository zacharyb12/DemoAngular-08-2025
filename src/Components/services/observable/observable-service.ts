import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  
   // Cette méthode retourne un Observable qui émet un nombre toutes les secondes
  getCounter(): Observable<number> {
    return new Observable<number>((observer) => {
      let count = 0;

      const interval = setInterval(() => {
        observer.next(count); // On émet la valeur
        count++;

        if (count > 5) {
          observer.complete(); // On termine l'observable après 5
        }
      }, 1000);

      // Nettoyage en cas d’arrêt
      return () => {
        clearInterval(interval);
      };
    });
  }
}
