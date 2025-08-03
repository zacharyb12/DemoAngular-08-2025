import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { shoppingResolverResolver } from './shopping-resolver-resolver';

describe('shoppingResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => shoppingResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
