import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { catchError, delay, of } from 'rxjs';
import { Productservice } from '../../../services/product/productservice';
import { ShoppingItem } from '../../Models/ShoppingItem.model';

export const shoppingResolver: ResolveFn<ShoppingItem | null> = (route, state) => {
  // Définition des paramètres à injecter
  const productService = inject(Productservice);
  const id = route.paramMap.get('id');
  
  // Si l'id n'est pas présent dans les paramètres de la route, on retourne null
  if (!id) {
    return of(null);
  }

  setTimeout(() => {
  }, 3000);
  
  // On utilise le service productService pour récupérer le shopping item par son id
  // On utilise catchError pour gérer les erreurs et retourner null en cas d'erreur
  // On retourne un observable de type ShoppingItem ou null en cas d'erreur
return productService.getByIdObservable(parseInt(id)).pipe(
  delay(3000), // délai de 3 secondes avant l'émission
  catchError(error => {
    console.error('Error fetching shopping item:', error);
    return of(null);
  })
);

};