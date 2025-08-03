import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoResolver } from './demo-resolver';

describe('DemoResolver', () => {
  let component: DemoResolver;
  let fixture: ComponentFixture<DemoResolver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoResolver]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoResolver);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
