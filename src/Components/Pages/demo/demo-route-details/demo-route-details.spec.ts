import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRouteDetails } from './demo-route-details';

describe('DemoRouteDetails', () => {
  let component: DemoRouteDetails;
  let fixture: ComponentFixture<DemoRouteDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoRouteDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoRouteDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
