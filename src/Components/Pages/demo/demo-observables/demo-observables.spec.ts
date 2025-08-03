import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoObservables } from './demo-observables';

describe('DemoObservables', () => {
  let component: DemoObservables;
  let fixture: ComponentFixture<DemoObservables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoObservables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoObservables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
