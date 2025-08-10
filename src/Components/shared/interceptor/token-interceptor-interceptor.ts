import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  // Récupération du token depuis le localStorage
  const token = localStorage.getItem('token');
  // Si le token existe, on clone la requête pour y ajouter le header Authorization
  if (token) {
    // Clonage de la requête pour ajouter le header Authorization
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    // On passe la requête clonée au prochain intercepteur ou à la requête HTTP
    return next(clonedReq);
  }

  // Si le token n'existe pas, on passe la requête originale sans modification
  return next(req);
};
