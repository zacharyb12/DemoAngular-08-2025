import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoServices } from './demo-services';

describe('DemoServices', () => {
  let component: DemoServices;
  let fixture: ComponentFixture<DemoServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
