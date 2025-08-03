import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInputOutputParent } from './demo-input-output-parent';

describe('DemoInputOutputParent', () => {
  let component: DemoInputOutputParent;
  let fixture: ComponentFixture<DemoInputOutputParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoInputOutputParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoInputOutputParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
