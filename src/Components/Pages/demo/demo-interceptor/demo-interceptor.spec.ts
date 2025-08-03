import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInterceptor } from './demo-interceptor';

describe('DemoInterceptor', () => {
  let component: DemoInterceptor;
  let fixture: ComponentFixture<DemoInterceptor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoInterceptor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoInterceptor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
