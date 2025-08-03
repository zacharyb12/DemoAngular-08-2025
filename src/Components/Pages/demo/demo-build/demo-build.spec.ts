import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBuild } from './demo-build';

describe('DemoBuild', () => {
  let component: DemoBuild;
  let fixture: ComponentFixture<DemoBuild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoBuild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoBuild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
