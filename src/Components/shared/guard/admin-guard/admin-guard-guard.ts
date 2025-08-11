import { CanActivateFn } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
   const role = localStorage.getItem('role');

  if(role ==  'admin'){
  return true;
  }

  return false;
};
