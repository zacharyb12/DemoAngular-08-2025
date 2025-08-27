import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanlistCreate } from './fanlist-create';

describe('FanlistCreate', () => {
  let component: FanlistCreate;
  let fixture: ComponentFixture<FanlistCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanlistCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanlistCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
