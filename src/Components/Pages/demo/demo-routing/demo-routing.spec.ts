import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRouting } from './demo-routing';

describe('DemoRouting', () => {
  let component: DemoRouting;
  let fixture: ComponentFixture<DemoRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoRouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoRouting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
