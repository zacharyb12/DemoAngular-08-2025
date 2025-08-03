import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputOutputEnfant } from './demo-input-output-enfant';

describe('DemoInputOutputEnfant', () => {
  let component: DemoInputOutputEnfant;
  let fixture: ComponentFixture<DemoInputOutputEnfant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoInputOutputEnfant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoInputOutputEnfant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
