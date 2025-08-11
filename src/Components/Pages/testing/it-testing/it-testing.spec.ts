import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTesting } from './it-testing';

describe('ItTesting', () => {
  let component: ItTesting;
  let fixture: ComponentFixture<ItTesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItTesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItTesting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
