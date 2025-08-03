import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoHome } from './exo-home';

describe('ExoHome', () => {
  let component: ExoHome;
  let fixture: ComponentFixture<ExoHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
