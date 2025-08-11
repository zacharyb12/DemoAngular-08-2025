import { CanDeactivateFn } from '@angular/router';

export const quitGuardGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
    const role = localStorage.getItem('role') || '';
  
  if(role === ''){
  return true;
  }
  return false;
};
