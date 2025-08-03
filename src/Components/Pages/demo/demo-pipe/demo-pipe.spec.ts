import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPipe } from './demo-pipe';

describe('DemoPipe', () => {
  let component: DemoPipe;
  let fixture: ComponentFixture<DemoPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
