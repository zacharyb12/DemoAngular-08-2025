import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanlistUpdate } from './fanlist-update';

describe('FanlistUpdate', () => {
  let component: FanlistUpdate;
  let fixture: ComponentFixture<FanlistUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanlistUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanlistUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
