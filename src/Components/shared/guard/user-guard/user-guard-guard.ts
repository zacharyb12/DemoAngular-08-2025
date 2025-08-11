import { CanActivateFn } from '@angular/router';

export const userGuardGuard: CanActivateFn = (route, state) => {
    if(localStorage.getItem('role') === 'user'){
    return true;
  }
  return false;
};
