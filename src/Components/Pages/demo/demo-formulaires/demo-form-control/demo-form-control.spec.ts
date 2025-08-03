import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormControl } from './demo-form-control';

describe('DemoFormControl', () => {
  let component: DemoFormControl;
  let fixture: ComponentFixture<DemoFormControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoFormControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFormControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
