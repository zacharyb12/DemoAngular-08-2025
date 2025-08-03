import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormGroup } from './demo-form-group';

describe('DemoFormGroup', () => {
  let component: DemoFormGroup;
  let fixture: ComponentFixture<DemoFormGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoFormGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoFormGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
