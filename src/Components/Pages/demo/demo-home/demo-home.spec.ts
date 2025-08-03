import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHome } from './demo-home';

describe('DemoHome', () => {
  let component: DemoHome;
  let fixture: ComponentFixture<DemoHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
