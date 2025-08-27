import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanlistListe } from './fanlist-liste';

describe('FanlistListe', () => {
  let component: FanlistListe;
  let fixture: ComponentFixture<FanlistListe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FanlistListe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanlistListe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
