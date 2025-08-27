import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanlistDetails } from './fanlist-details';

describe('FanlistDetails', () => {
  let component: FanlistDetails;
  let fixture: ComponentFixture<FanlistDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanlistDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanlistDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
