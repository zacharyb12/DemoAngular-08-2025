import { TestBed } from '@angular/core/testing';

import { FanlistService } from './fanlist-service';

describe('FanlistService', () => {
  let service: FanlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FanlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
