import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { quitGuardGuard } from './quit-guard-guard';

describe('quitGuardGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => quitGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
