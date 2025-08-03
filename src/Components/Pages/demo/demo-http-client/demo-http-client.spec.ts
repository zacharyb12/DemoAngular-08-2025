import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHttpClient } from './demo-http-client';

describe('DemoHttpClient', () => {
  let component: DemoHttpClient;
  let fixture: ComponentFixture<DemoHttpClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoHttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoHttpClient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
