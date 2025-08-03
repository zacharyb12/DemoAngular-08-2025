import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBindings } from './demo-bindings';

describe('DemoBindings', () => {
  let component: DemoBindings;
  let fixture: ComponentFixture<DemoBindings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoBindings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoBindings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
