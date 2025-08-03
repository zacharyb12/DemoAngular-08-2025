import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRouteList } from './demo-route-list';

describe('DemoRouteList', () => {
  let component: DemoRouteList;
  let fixture: ComponentFixture<DemoRouteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoRouteList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoRouteList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
