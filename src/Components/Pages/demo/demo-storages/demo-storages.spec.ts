import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStorages } from './demo-storages';

describe('DemoStorages', () => {
  let component: DemoStorages;
  let fixture: ComponentFixture<DemoStorages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoStorages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoStorages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
